import { key_map } from "src/keyboard"
import { currentVRM } from "./vrm"

AFRAME.registerComponent("character-camera", {
    schema: {
        // 0 - 1 is FPS, 1+ is zoomed out third person but same rotations/etc
        zoom: { type: "number", default: 0 },
        max_zoom: { type: "number", default: 5 },
        head: { type: "boolean", default: false },
    },
    init() {
        this.cancel = currentVRM.on(() => {
            // stay attached

            const o3d = this.el.object3D
            if (currentVRM.$) {
                o3d.position.set(0, 0, 0)
                currentVRM.$.firstPerson.firstPersonBone.add(o3d)
                this.hideHead()
            }
        })
    },
    showHead() {
        const { layers } = this.el.object3D.children[0]

        this.data.head = true
        layers.disable(currentVRM.$.firstPerson.firstPersonOnlyLayer);
        layers.enable(currentVRM.$.firstPerson.thirdPersonOnlyLayer);
    },
    hideHead() {
        const { layers } = this.el.object3D.children[0]

        this.data.head = false
        layers.enable(currentVRM.$.firstPerson.firstPersonOnlyLayer);
        layers.disable(currentVRM.$.firstPerson.thirdPersonOnlyLayer);
    },
    remove() {

        if (currentVRM.$) {
            currentVRM.$?.firstPerson.firstPersonBone.remove(this.el.object3D)
        }
        this.cancel()
    },
    update() {
        if (!currentVRM.$) return

        // update camera position
        this.el.object3D.position.z = this.data.zoom
        this.el.object3D.position.y = this.data.zoom / 2


        if (this.data.zoom >= 0.2) {
            // turn head back on
            this.showHead()
        } else if (this.data.head) {
            this.hideHead()
        }
    },
    tick(_, dt) {
        if (!currentVRM.$) return

        if (key_map.$["pageup"]) {
            this.data.zoom = Math.min(this.data.max_zoom, this.data.zoom + 0.001 * dt)
            this.update()
        } else if (key_map.$["pagedown"]) {
            this.data.zoom = Math.max(this.data.zoom - 0.001 * dt, 0)
            this.update()
        }
    }
})