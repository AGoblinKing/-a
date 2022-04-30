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
export enum ESlot {
    hand_left = "hand_left",
    hand_right = "hand_right",
    bag1 = "bag1",
    bag2 = "bag2",
    bag3 = "bag3",
    bag4 = "bag4",
    bag5 = "bag5",
    bag6 = "bag6",
}
export interface IAVATAR {
    doUse(string): void;
    doThrow(string): void;
    doDrop(string): void;
    data: any;
}
const hands = ["hand_left", "hand_right"]
export const AVATAR = new Value<IAVATAR>()
export const WIPE_TARGET = new Value<string>("")

AFRAME.registerComponent("avatar", {
    schema: {
        [ESlot.hand_left]: { type: "selector" },
        [ESlot.hand_right]: { type: "selector" },
        [ESlot.bag1]: { type: "selector" },
        [ESlot.bag2]: { type: "selector" },
        [ESlot.bag3]: { type: "selector" },
        [ESlot.bag4]: { type: "selector" },
        [ESlot.bag5]: { type: "selector" },
        [ESlot.bag6]: { type: "selector" },
    },
    init() {


        this.updated = new Value(this.data)

        this.cancel = this.updated.on(() => {
            if (!this.el.parentEl.components.vrm?.data?.current) return
            AVATAR.poke()
        })
        requestAnimationFrame(() => {
            if (this.el.parentEl.components.vrm?.data.current) {
                AVATAR.set(this)
            }
        })

        this.targets = new Value<{ [key: string]: HTMLElement }>({})
        this.cancel2 = WIPE_TARGET.on(($wt) => {
            delete this.targets.$[$wt]
            this.targets.poke()

            if (this.el.parentEl.components.vrm?.data?.current) {
                ground.$.splice(ground.$.indexOf(this.el.object3D.uuid), 1)
                ground.poke()
            }
        })

        this.collideStart = this.collideStart.bind(this);
        this.collideEnd = this.collideEnd.bind(this);

        this.el.addEventListener("collidestart", this.collideStart);
        this.el.addEventListener("collideend", this.collideEnd);
    },
    remove() {
        this.cancel2()
        this.cancel()
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
        //items will equip themselves
        // targets need removed
        Random(this.targets)?.emit('use', e, false)
    },
    doThrow(slot = "hand_left") {
        const item = this.data[slot]
        if (!item) return

        delete this.data[slot]
        this.updated.poke()

        item.emit('throw', { whom: this.el, slot }, false)
    },

    doDrop(slot = "hand_left") {
        const item = this.data[slot]
        if (!item) return

        delete this.data[slot]
        this.updated.poke()

        item.emit('drop', { whom: this.el, slot }, false)
    },

    collideStart(e) {
        const o = e.detail.targetEl
        if (!o.components.target) return

        // aframe entity targets
        this.targets.$[o.object3D.uuid] = o;
        this.targets.poke()

        if (this.isCurrent()) {
            o.emit("bump", { whom: this.el })
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