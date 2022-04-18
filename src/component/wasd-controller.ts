import { key_map } from "src/keyboard";
import { camera } from "src/timing";

const vec3 = new AFRAME.THREE.Vector3()
const quat = new AFRAME.THREE.Quaternion()

AFRAME.registerComponent("wasd-controller", {
    schema: {
        speed: { type: "number", default: 0.3 },
        rot: { type: "number", default: 0.0025 },
    },

    init() {
        this.jump = AFRAME.utils.throttleTick(this.jump, 1000, this)
    },
    jump() {
        this.el.emit("jump")
    },

    tick(_, delta) {
        if (!this.el.body) return

        const o3d = this.el.object3D

        let force

        let torq
        vec3.set(0, 0, 0)
        let intensity = 1
        let hop = 5
        if (key_map.$["shift"]) {
            intensity = 1.5
        }

        // TODO: or if colliding with a climbable
        if (key_map.$[" "] && o3d.position.y < 0.5) {
            hop = 4 * delta
            // we're jumping
            this.jump()
        }
        if (key_map.$["w"]) {
            vec3.y = hop
            vec3.z += -this.data.speed * delta * intensity
        }
        if (key_map.$["s"]) {
            vec3.y = hop
            vec3.z += this.data.speed * delta * intensity
        }
        if (key_map.$["a"]) {
            vec3.y = hop
            vec3.x += -this.data.speed * delta * intensity
        }
        if (key_map.$["d"]) {
            vec3.y = hop
            vec3.x += this.data.speed * delta * intensity
        }
        if (key_map.$["q"]) {
            camera.$.parent.parent.parent.rotation.y += this.data.rot * delta
        }
        if (key_map.$["e"]) {
            camera.$.parent.parent.parent.rotation.y -= this.data.rot * delta

        }
        if (Math.abs(vec3.length()) > 0 && camera.$) {
            camera.$.updateMatrixWorld()
            quat.setFromRotationMatrix(camera.$.matrixWorld)
            vec3.applyQuaternion(quat)
            force = new Ammo.btVector3(vec3.x, vec3.y, vec3.z)
            // apply to currentVRM body
            this.el.body.applyForce(force)
            this.el.body.activate()
            Ammo.destroy(force);

        }

        if (torq) Ammo.destroy(torq)


    }
})