
AFRAME.registerComponent("ring", {
    schema: {
        count: { type: "number", default: 10 },
        radius: { type: "number", default: 5 },
    },

    update() {
        const d = this.el.object3D.parent.userData
        const i = (d.ringDex === undefined ? d.ringDex = 1 : d.ringDex++)%this.data.count/this.data.count * Math.PI*2

        this.el.object3D.position.set(Math.sin(i), 0, Math.cos(i)).multiplyScalar(this.data.radius)
    }
})