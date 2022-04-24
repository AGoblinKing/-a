
AFRAME.registerComponent("grid", {
    schema: {
        width: { type: "number", default: 1 },
        length: { type: "number", default: 1 },

        spacing: { type: "number", default: 1 },
        fill: { type: "bool", default: false },
    },
    init() {
        const d = this.el.object3D.parent.userData

        if (this.data.fill) {
            const i = (d.ringDex === undefined ? d.ringDex = 0 : d.ringDex++) % (this.data.width * this.data.length)

            this.el.object3D.position.set(
                i % this.data.width - this.data.width / 2,
                0,
                Math.floor(i / this.data.width) - this.data.length / 2
            ).multiplyScalar(this.data.spacing)
        } else {
            const i = (d.ringDex === undefined ? d.ringDex = 0 : d.ringDex++) % (this.data.width * 2 + this.data.length * 2)


            this.el.object3D.position.set(
                i % (this.data.width * 2) - this.data.width,
                0,
                Math.floor(i / (this.data.width * 2)) - this.data.length
            ).multiplyScalar(this.data.spacing)

            // flip it for perp movement
        }


    }
})