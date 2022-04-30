import { ECommand, IUpdate } from "src/message"
import { args } from "src/timing"
import { Value } from "src/value"

export const host = new Value(args.$.has("host"))
export const guest = new Value(args.$.has("join"))
export const room = new Value(args.$.get("join"))
export const passcode = new Value("").save("passcode")

let scene

export const paths = {}
const state = {}
let update = {}

let interop = 0

AFRAME.registerSystem("net", {
    init() {
        // if guest or host connect
        scene = this.el.object3D
        this.tick = AFRAME.utils.throttleTick(this.tick, 200, this)

        guest.on(() => {
            if (!guest.$) return

            this.connect()
            // turn off ammo
        })

        host.on(() => {
            if (!host.$) return

            this.connect()
        })
    },
    process() {
        // apply update to state
        for (let entry of Object.entries(update)) {
            const [path, value] = entry

            if (state[path]) {
                Object.assign(state[path], value)
            } else {
                state[path] = value
            }
        }

    },
    tick() {
        if (!host.$) return

        this.process()

        if (!this.ready) {
            update = {}
            return
        }

        // send out updates 
        this.ws.send(ECommand.UPDATE + this.password + JSON.stringify(update))
        update = {}

    },


    fullUpdate() {
        this.ws.send(ECommand.UPDATE + this.password + JSON.stringify(state))
    },

    connect() {
        if (this.ws) return
        console.log("connecting")

        const lhost = window.location.host === "a.goblin.life" ? "ws.goblin.life" : window.location.host

        const ws = new WebSocket(`${window.location.protocol === "https" ? "wss" : "ws"}://${lhost}/`);

        this.ws = ws

        ws.addEventListener("close", () => {
            console.log("closed")
            this.ws = undefined
            setTimeout(() => {
                this.connect()
            }, 10000)
        })
        ws.addEventListener('open', () => {
            console.log("connected")

            // if I'm a host, do a full update to server
            if (host.$) {
                console.log("send host")
                this.ws.send(ECommand.HOST + room.$)
            }
            if (guest.$) {
                this.ws.send(ECommand.JOIN + room.$)
                this.ready = true
            }
        });

        ws.addEventListener('message', (e) => {
            //console.log(e.data.slice(0, 3))
            switch ("" + e.data.slice(0, 3)) {
                default:
                    console.log(e.data.slice(0, 3))
                    break

                case ECommand.ERROR:
                    console.log("ERROR", e.data.slice(3))
                    break
                case ECommand.UPDATE:
                    if (host.$) return
                    interop = 0



                    const update = JSON.parse(e.data.slice(3))
                    for (let entry of Object.entries(update)) {
                        const [path, value] = entry
                        if (!paths[path]) continue

                        if (!state[path]) {
                            state[path] = value
                        } else {
                            Object.assign(state[path], value)
                        }

                        paths[path].components.host.netUpdate(value)
                    }
                    break
                case ECommand.HOST:
                    console.log("got host")
                    this.password = "" + e.data.slice(3, 39)

                    passcode.set(this.password)
                    room.set("" + e.data.slice(39))
                    this.ready = true
                    this.fullUpdate()
                    break
            }
        });
    }
})

function Mixins(el) {
    return el.mixinEls.map(el => el.id).join(".")
}

function MakePath(el) {
    if (el.tagName === "A-SCENE") {
        return ""
    } else {
        const target = el.parentNode
        const p = MakePath(target)
        const host = el.components.host?.data !== undefined && typeof el.components.host.data === "string" ? el.components.host.data : false


        return (p !== "" ? p + "/" : "") + (host || el.id || Mixins(el)) || ""
    }
}


const p = new AFRAME.THREE.Vector3(),
    s = new AFRAME.THREE.Vector3(),
    q = new AFRAME.THREE.Quaternion()

AFRAME.registerComponent("host", {
    schema: {
        type: "string"
    },
    init() {

        this.slowtick = AFRAME.utils.throttleTick(this.slowtick, 200, this)
        // add unique id to hosts
        this.netpath = MakePath(this.el)

        let i = 2;
        const og = this.netpath
        this.netpath += 1
        while (paths[this.netpath]) {
            this.netpath = og + i
            i++
        }

        paths[this.netpath] = this.el
        this.el.id = this.netpath
        this.cancel = host.on(($h) => {
            if (!$h) return

            this.markUpdate()
            state[this.netpath] = update[this.netpath]
        })
    },

    markUpdate() {
        const u = update[this.netpath] = update[this.netpath] || {}
        const o3d = this.el.object3D

        u.p = o3d.position.toArray(u.p)
        u.q = o3d.quaternion.toArray(u.q)
        u.s = o3d.scale.toArray(u.s)
        u.v = o3d.visible ? 1 : 0
    },

    slowtick() {
        let type = this.el.components["ammo-body"]?.data.type
        if (guest.$ && (type === "kinematic" || type === "dynamic")) {
            type = this.el.components["ammo-body"].data.type = "static"
        }
        // || !
        if (!host.$ || type === "static") return

        this.markUpdate()
    },
    // TODO: allow nondynamic bodies to early return
    tick(_, dt) {
        this.slowtick()

        interop += dt / 1000

        if (guest.$ && state[this.netpath] && this.lastUpdate > interop) {
            const i = Math.min(1, interop / 350)
            // lerp to state
            const o3d = this.el.object3D
            q.fromArray(state[this.netpath].q)
            if (Math.abs(o3d.quaternion.angleTo(q)) > 0.001) o3d.quaternion.slerp(q, i)

            p.fromArray(state[this.netpath].p)
            if (o3d.position.distanceTo(p) > 0.001) o3d.position.lerp(p, i)

            s.fromArray(state[this.netpath].s)
            if (o3d.scale.distanceTo(s) > 0.001) o3d.scale.lerp(s, i)
        }
    },

    // got a net update
    netUpdate(update: IUpdate) {
        this.lastUpdate = interop + 250
        // TODO: Lerp this
        const o3d = this.el.object3D

        if (update.v !== undefined) {
            o3d.visible = update.v
        }
    },

    remove() {
        delete paths[this.netpath]
        this.el.id = ""
        this.cancel()
    }
})


AFRAME.registerComponent("net-avatar", {
    init() {
        // when as a guest, we connect, the host spawns duplicate of these that we send updates on
        // attach our camera to the dupe if its current vrm
    }
})