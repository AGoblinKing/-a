// move/rotate the body based on the type of the AI

import { guest } from "./net"

AFRAME.registerComponent("alive", {
    schema: {
        type: { type: "string", default: "random" },
        hp: { type: "number", default: 10 }
    },
    init() {
        this.tick = AFRAME.utils.throttleTick(this.tick, 250, this)
    },
    tick() {
        if (this[this.data.type]) this[this.data.type]()
    },
    random() {
        if (!this.el.body || guest.$) return

        const speed = 250
        const x = (Math.random() - 0.5) * speed,
            y = (Math.random() - 0.5) * speed,
            z = (Math.random() - 0.5) * speed

        const force = new Ammo.btVector3(x, y, z)

        this.el.body.applyForce(force)

        const torq = new Ammo.btVector3(x * 0.2, y * 0.2, z * 0.2)
        this.el.body.applyTorque(torq)

        this.el.body.activate()
        Ammo.destroy(force)
        Ammo.destroy(torq)

        if (this.el.components.avatar) {
            this.avatar()
        }
    },
    avatar() {
        this.el.components.avatar?.doUse()
    }
})