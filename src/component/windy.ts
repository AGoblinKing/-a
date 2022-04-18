import { time } from "src/timing"
import { set_input_type } from "svelte/internal"
import windyVert from "../shader/windy.vert"

const main = `
vec4 mvPosition = vec4(transformed, 1.0);

mvPosition = modelViewMatrix * Windy(mvPosition);
mvPosition = projectionMatrix * mvPosition;
gl_Position = mvPosition;
`

AFRAME.registerComponent("windy", {
    init() {

        this.setup = this.setup.bind(this)
        this.setup()
        this.el.addEventListener("model-loaded", this.setup)

    },
    remove() {
        this.el.removeEventListener("model-loaded", this.setup)
    },
    setup() {
        // traverse o3d and update the material to have the spiral animation effect
        this.el.object3D.traverse((c) => {
            if (c.material) {

                const prev = c.material.onBeforeCompile
                c.material.onBeforeCompile = (shader) => {
                    if (!shader.uniforms.time) {
                        shader.uniforms.time = time.$
                        shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                            "#include <common>",
                            "uniform float time;",
                            windyVert
                        ].join("\n")).replace("#include <project_vertex>", main)
                    } else {
                        shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                            "#include <common>",
                            windyVert
                        ].join("\n")).replace("(mvPosition);", "(Windy(mvPosition));")
                    }


                    if (prev) {
                        prev(shader)
                    }
                }
                c.material.needsUpdate = true
            }
        })
    }
})