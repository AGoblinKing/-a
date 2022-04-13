import { key_map } from "src/keyboard";

const vec3 = new AFRAME.THREE.Vector3()

AFRAME.registerComponent("wasd-controller", {
    schema: {
        speed: { type: "number", default: 0.25},
        rot: { type: "number", default: 0.15 },
    },
    tick(_, delta) {
        if (!this.el.body) return

        const o3d = this.el.object3D

        let force

        let torq
        vec3.set(0, 0, 0)
        let intensity = 1
        let hop = 2
        if(key_map.$["shift"]) {
            intensity = 1.5
        } 

        // TODO: or if colliding with a climbable
        if(key_map.$[" "] &&  o3d.position.y < 1) {
            hop = 15
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
            torq = new Ammo.btVector3(0, delta * this.data.rot, 0)
            this.el.body.applyTorque(torq)
            this.el.body.activate()
        }
        if (key_map.$["e"]) {
            torq = new Ammo.btVector3(0, -delta * this.data.rot, 0)
            this.el.body.applyTorque(torq)
            this.el.body.activate()

        }
        if (vec3.length() > 0) {
            vec3.applyQuaternion(o3d.quaternion)
            force = new Ammo.btVector3(vec3.x, vec3.y, vec3.z)
            // apply to currentVRM body
            this.el.body.applyForce(force)
            this.el.body.activate()
            Ammo.destroy(force);
        }

        if (torq) Ammo.destroy(torq)


    }
})