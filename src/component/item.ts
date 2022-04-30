import { doControl } from "src/chat"
import { camera, ground } from "src/timing"
import { Value } from "src/value"
import { AVATAR, WIPE_TARGET } from "src/component/avatar"

const vec3 = new AFRAME.THREE.Vector3()
const quat = new AFRAME.THREE.Quaternion()

AFRAME.registerComponent("item", {
    schema: {
        holder: { type: "selector" },
        action: { type: "string", default: "" },
    },
    init() {
        this.updated = new Value(this.data)

        this.el.addEventListener("use", this.use = this.use.bind(this))
        this.el.addEventListener("throw", this.throw = this.throw.bind(this))
        this.el.addEventListener("drop", this.drop = this.drop.bind(this))

    },
    drop(e) {
        if (!this.data.holder) return

        // change position to world position
        this.el.object3D.getWorldPosition(this.el.object3D.position)

        // put item back into scene
        this.reset()
        // set data holder to nothing
        delete this.data.holder
        this.updated.poke()
    },
    throw(e) {
        if (!this.data.holder) return

        const p = this.data.holder

        this.drop(e)

        vec3.set(-30, 10, 0).applyQuaternion(p.object3D.parent.getWorldQuaternion(quat))

        // apply force to item based on thrower
        const force = new Ammo.btVector3(vec3.x, vec3.y, vec3.z)
        const torque = new Ammo.btVector3(10, 10, 10)
        this.el.body.applyForce(force)
        this.el.body.applyTorque(torque)
        this.el.body.activate()
        Ammo.destroy(force)
        Ammo.destroy(torque)

        // use the body rotation for the throw

    },
    action(slot: string, whom: HTMLElement) {
        // plays sound/etc
        doControl(this.data.action)
        this.el.emit("action", { slot, whom })

    },


    reset() {
        this.ogParent.add(this.el.object3D)
        // add a bunch of animations
        this.el.removeAttribute("animation")
        this.el.removeAttribute("animation__action")

        this.el.setAttribute("ammo-body", this.ogBody)
        this.el.setAttribute("ammo-shape", this.ogShape)

    },
    equip(e) {
        const { slot, whom } = e.detail
        this.data.holder = whom
        const avatar = whom.components["avatar"]

        avatar.data[slot] = this.el
        avatar.updated.poke()

        // zero out position, add avatar
        this.ogParent = this.el.object3D.parent

        this.ogBody = this.el.getAttribute("ammo-body")
        this.ogShape = this.el.getAttribute("ammo-shape")

        this.el.removeAttribute("ammo-body")
        this.el.removeAttribute("ammo-shape")
        WIPE_TARGET.set(this.el.object3D.uuid)

        if (avatar.isCurrent()) {
            // vrms attach at head
            camera.$.add(this.el.object3D)

            AVATAR.poke()
            // we updated the data to it
        } else {
            whom.object3D.add(this.el.object3D)
        }

        switch (slot) {

            case "bag1":
            case "bag2":
            case "bag3":
            case "bag4":
            case "bag5":
            case "bag6":
                break
            case "hand_left":
            case "hand_right":
                // add a bunch of animations
                this.el.setAttribute("animation__action", "startEvents: action; autoplay: false; property: object3D.rotation; dur: 1000; easing: linear; to: -90 0 0; loop: 2; dur: 500; dir: alternate; ")
                this.el.setAttribute("animation", "property: object3D.position.y; from: -0.5; to: -.25; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate;")
                this.el.object3D.position.set(slot.indexOf("right") !== -1 ? 0.4 : -0.4, 0, -1)
                this.el.object3D.lookAt(0, 1, -5)

                break
            default:
                console.log("attached", slot, whom, this.el)
                break
        }

        whom.emit("equip", { item: this.el, slot })
    },

    use(e) {
        const { slot, whom } = e.detail

        const avatar = whom.components["avatar"]
        const existing = avatar.data[slot]

        if (existing) {
            if (existing !== this.el) return
            // action of item
            this.action(slot, whom)
            return
        }

        // equip item to slot
        this.equip(e)
    },
    remove() {
        this.el.removeEventListener("use", this.use)
        this.el.removeEventListener("throw", this.throw)
        this.el.removeEventListener("drop", this.drop)
    }
})