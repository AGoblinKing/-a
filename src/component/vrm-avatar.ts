// provides animation and interaction to the attached VRM

import { ground } from "src/timing";
import { Value } from "src/value";

function Random(targets: { [key: string]: HTMLElement }) {
    const keys = Object.keys(targets.$)
    const t = targets.$[
        keys[
        Math.floor(keys.length * Math.random())
        ]
    ]


    return t
}

export interface IVRM_AVATAR {
    doUse(string): void;
}
const hands = ["hand_left", "hand_right"]
export const VRM_AVATAR = new Value<IVRM_AVATAR>()

AFRAME.registerComponent("vrm-avatar", {
    schema: {
        hip_left: { type: "selector" },
        hip_right: { type: "selector" },
        spine: { type: "selector" },
        hand_left: { type: "selector" },
        hand_right: { type: "selector" },
    },
    init() {
        requestAnimationFrame(() => {
            if (this.el.parentEl.components.vrm?.data.current) {
                VRM_AVATAR.set(this)
            }
        })

        this.targets = new Value<{ [key: string]: HTMLElement }>({})


        this.collideStart = this.collideStart.bind(this);
        this.collideEnd = this.collideEnd.bind(this);

        this.el.addEventListener("collidestart", this.collideStart);
        this.el.addEventListener("collideend", this.collideEnd);
    },
    remove() {
        this.el.removeEventListener("collidestart", this.collideStart);
        this.el.removeEventListener("collideend", this.collideEnd);
    },

    isCurrent() {
        return this.el.parentEl.components.vrm.attrValue.current === "true"
    },

    doUse(slot = "hand_left") {
        const e = { whom: this.el, slot }
        if (this.data[slot]) {
            this.data[slot].emit('use', e, false)
            return
        }

        if (hands.indexOf(slot) === -1) return
        Random(this.targets)?.emit('use', e, false)
    },

    collideStart(e) {
        const o = e.detail.targetEl
        if (!o.components.target) return

        this.targets.$[o.object3D.uuid] = o;
        this.targets.poke()

        if (this.isCurrent()) {
            ground.$.push(o.components.target.data)
            ground.poke()
        }
    },

    collideEnd(e) {
        const o = e.detail.targetEl
        if (!o?.object3D || !o.components.target) return

        delete this.targets.$[o.object3D.uuid]

        this.targets.poke()
        if (this.isCurrent()) {
            ground.$.splice(ground.$.indexOf(o.components.target.data), 1)
            ground.poke()
        }
    },

    tick() {
        // determine animation/play animation/record animation
    }
})