import type { Object3D } from "three"
import { key_map } from "src/input";
import { camera } from "src/timing";
import { guest } from "./net";


const vec3 = new AFRAME.THREE.Vector3()
const quat = new AFRAME.THREE.Quaternion()


function getRoot(o3d: Object3D) {

    if (o3d.parent.name === "Root") {
        return o3d.parent
    }
    return getRoot(o3d.parent)
}
AFRAME.registerComponent("wasd-controller", {
    schema: {
        speed: { type: "number", default: 0.5 },
        rot: { type: "number", default: 0.0025 },
    },

    init() {
        this.jump = AFRAME.utils.throttleTick(this.jump, 2000, this)

        this.next = 0
    },
    remove() {
        this.cancel()
    },
    jump() {
        this.el.emit("jump")
    },
    step() {
        this.el.emit("step")
    },

    tick(t, delta) {
        if (guest.$) return

        if (!this.el.body) return

        const o3d = this.el.object3D

        let force


        vec3.set(0, 0, 0)
        let intensity = 1
        let hop = 5
        if (key_map.$["shift"]) {
            intensity = 2
        }

        // TODO: or if colliding with a climbable
        if (key_map.$[" "] && o3d.position.y < 0.5) {
            hop *= delta
            // we're jumping 
            this.jump()

            vec3.y = hop
        }
        if (key_map.$["w"]) {
            vec3.y += 5
            vec3.z += -this.data.speed * delta * intensity
        }
        if (key_map.$["s"]) {
            vec3.y += 5
            vec3.z += this.data.speed * delta * intensity
        }
        if (key_map.$["a"]) {
            vec3.y += 5
            vec3.x += -this.data.speed * delta * intensity
        }
        if (key_map.$["d"]) {
            vec3.y += 5
            vec3.x += this.data.speed * delta * intensity
        }
        if (key_map.$["z"]) {
            vec3.y += 5
            const root = getRoot(camera.$)
            root.rotation.y += this.data.rot * delta
        }
        if (key_map.$["c"]) {
            vec3.y += 5
            const root = getRoot(camera.$)
            root.rotation.y -= this.data.rot * delta

        }
        const l = Math.abs(vec3.length())
        if (l > 0 && camera.$) {
            camera.$.updateMatrixWorld()
            quat.setFromRotationMatrix(camera.$.matrixWorld)
            const up = vec3.y
            vec3.applyQuaternion(quat)

            force = new Ammo.btVector3(vec3.x, up, vec3.z)
            // apply to currentVRM body
            this.el.body.applyForce(force)
            this.el.body.activate()
            Ammo.destroy(force);
            if (t - this.next > 0) {
                this.step()

                this.next = t + 1000 - l * 40 + Math.random() * 100 + (t % 100 > 50 ? 250 : 0)
            }
        }



    }
})