import { camera } from "src/timing";
import { Value } from "src/value";
import type { Box3, Color, Object3D, Vector3 } from "three";

export const location = new Value<string[]>([])

const locations: { [key: string]: ILocation } = {}

const wpos = new AFRAME.THREE.Vector3()
AFRAME.registerSystem("loc", {
    init() {
        this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);
    },
    tick() {
        camera.$.updateMatrixWorld()
        camera.$.getWorldPosition(wpos)
        for (let entry of Object.entries(locations)) {
            const [key, value] = entry

            const n = value.data.name
            const l = location.$.indexOf(n)
            if (value.playerIsIn(wpos)) {
                if (l !== -1) continue
                location.$.push(n)
                location.poke()

            } else if (l !== -1) {
                location.$.splice(l, 1)
                location.poke()
            }
        }

    }
})

const vec3 = new AFRAME.THREE.Vector3()

interface ILocationData {
    name: string
    box: string
    color: Color
};

interface ILocation {
    playerIsIn(playerPos: Vector3): boolean;
    data: ILocationData
}

AFRAME.registerComponent("location", {
    schema: {
        name: { type: "string" },
        box: { type: "string", default: "-1 -1 -1 1 1 1" }
    },

    init() {
        locations[this.data.name] = this
        this.bb = new AFRAME.THREE.Box3() as Box3
        this.bb.setFromArray(this.data.box.split(" ").map(parseFloat))
    },

    playerIsIn(playerPos: Vector3) {

        return this.bb.containsPoint(vec3.copy(playerPos).sub(this.el.object3D.position))
    },

    remove() {
        delete locations[this.data.name]
    }
})