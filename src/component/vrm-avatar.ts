// provides animation and interaction to the attached VRM

import { ground } from "src/timing";
import { Value } from "src/value";
import type { Object3D } from "three";

AFRAME.registerComponent("vrm-avatar", {
    schema: {
        hip_left: { type: "selector" },
        hip_right: { type: "selector" },
        spine: { type: "selector" },
        hand_left: { type: "selector" },
        hand_right: { type: "selector" },
    },
    init() {

        this.targets = new Value<{ [key: string]: Object3D }>({

        })

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
        return this.el.parentEl.components.vrm.data.current
    },

    collideStart(e) {
        const o = e.detail.targetEl
        this.targets.$[o.object3D.uuid] = o.object3D;
        this.targets.poke()

        if (o.components.target && this.isCurrent()) {
            ground.$.push(o.components.target.data)
            ground.poke()
        }
    },

    collideEnd(e) {
        const o = e.detail.targetEl
        delete this.targets.$[o.object3D.uuid]

        this.targets.poke()
        if (o.components.target && this.isCurrent()) {
            ground.$.splice(ground.$.indexOf(o.components.target.data), 1)
            ground.poke()
        }
    },

    tick() {
        // determine animation/play animation/record animation
    }
})