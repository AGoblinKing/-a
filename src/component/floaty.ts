import { time } from "src/timing"
import floatyVert from "../shader/floaty.vert"

const main = `
vec4 mvPosition = vec4(transformed, 1.0);

mvPosition = modelViewMatrix * Floaty(mvPosition);
mvPosition = projectionMatrix * mvPosition;
gl_Position = mvPosition;
`

AFRAME.registerComponent("floaty", {
    init() {
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
                            floatyVert
                        ].join("\n")).replace("#include <project_vertex>", main)
                    } else {
                        shader.vertexShader = shader.vertexShader.replace("#include <common>", [
                            "#include <common>",
                            floatyVert
                        ].join("\n")).replace("(mvPosition);", "(Floaty(mvPosition));")
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