import { key_map } from "src/keyboard"
import { currentVRM } from "./vrm"

AFRAME.registerComponent("character-camera", {
    schema: {
        // 0 - 1 is FPS, 1+ is zoomed out third person but same rotations/etc
        zoom: { type: "number", default: 0 },
        max_zoom: { type: "number", default: 5 },
    },
    init() {
        this.cancel = currentVRM.on(() => {
            // stay attached
            console.log(currentVRM.$)
            currentVRM.$.firstPerson.firstPersonBone.add(this.el.object3D)
        })
    },
    remove() {
        currentVRM.$?.firstPerson.firstPersonBone.remove(this.el.object3D)
        this.cancel()
    },
    update() {
        // update camera position
        this.el.object3D.position.z = this.data.zoom

        if(this.data.zoom >= 1 && currentVRM.$) {
            // turn head back on
        }
    },
    tick() {
    
        if(key_map.$["pageup"]) {
            this.data.zoom = Math.min(this.data.max_zoom, this.data.zoom + 0.01)
            this.update()
        } else if(key_map.$["pagedown"]){
            this.data.zoom =  Math.max(this.data.zoom - 0.01, 0)
            this.update()
        }

        if(currentVRM.$) {
            console.log(currentVRM.$.firstPerson.getFirstPersonWorldDirection(this.el.object3D.rotation))
            currentVRM.$.firstPerson.getFirstPersonWorldPosition(this.el.object3D.position)
        }
    }
})