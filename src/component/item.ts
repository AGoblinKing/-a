import { doControl } from "src/chat"
import { camera } from "src/timing"
import { Value } from "src/value"
import { AVATAR } from "src/component/avatar"

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
        this.ogParent.add(this.el.object3D)
        // set data holder to nothing
        delete this.data.holder
        this.updated.poke()
    },
    throw(e) {
        this.drop(e)

        // apply force to item based on camera 

    },
    action(slot: string, whom: HTMLElement) {
        // plays sound/etc
        doControl(this.data.action)
        this.el.emit("action", { slot, whom })

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
        this.data.holder = whom

        avatar.data[slot] = this.el
        avatar.updated.poke()

        // zero out position, add avatar
        this.ogParent = this.el.object3D.parent


        if (avatar.isCurrent()) {
            // vrms attach at head
            camera.$.add(this.el.object3D)
            AVATAR.poke()
            // we updated the data to it
        } else {
            whom.object3D.add(this.el.object3D)
        }

        this.el.setAttribute("ammo-body", { "activationState": "disableSimulation", type: "kinematic" })
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
                this.el.object3D.position.set(slot.indexOf("right") !== -1 ? 0.45 : -0.45, 0, -1)
                this.el.object3D.lookAt(0, 1, -5)

                break
            default:
                console.log("attached", slot, whom, this.el)
                break
        }
        whom.emit("equip", { item: this.el, slot })
        // pick up item to slot 
        // use item if in slot
        // if holder and user same, then allow move between slots
        // otherwise reject
        // 
    },
    remove() {
        this.el.removeEventListener("use", this.use)
        this.el.removeEventListener("throw", this.throw)
        this.el.removeEventListener("drop", this.drop)
    }
})