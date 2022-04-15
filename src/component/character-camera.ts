
import { camera, toggle_selfie } from "src/timing"
import { currentVRM } from "./vrm"

AFRAME.registerComponent("character-camera", {
    init() {

        camera.set(this.el.object3D)
        this.cancel = currentVRM.on(() => {
            // stay attached
            const o3d = this.el.object3D
            if (currentVRM.$) {
                o3d.position.set(0, 0, 0)
                currentVRM.$.firstPerson.firstPersonBone.add(o3d)
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
    tick(_, dt) {
        if (!currentVRM.$) return

        if (toggle_selfie.$ !== this.selfie) {
            if (toggle_selfie.$) {
                this.showHead()
                this.el.object3D.position.set(0, 0.1, -0.75)
                this.el.object3D.lookAt(0, 5, 0)
            } else {
                this.el.object3D.position.set(0, 0, 0)
                this.el.object3D.quaternion.identity()
                this.hideHead()
            }
            this.selfie = toggle_selfie.$
        }
    }
})