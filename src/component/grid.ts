
AFRAME.registerComponent("grid", {
    schema: {
        width: { type: "number", default: 1 },
        length: { type: "number", default: 1 },
        height: { type: "number", default: 1 },
        fill: { type: "bool", default: false },
    },
    init() {
        const d = this.el.object3D.parent.userData

        if (this.data.fill) {
            const i = (d.ringDex === undefined ? d.ringDex = 0 : d.ringDex++) % (this.data.width * this.data.height * this.data.length)

            this.el.object3D.position.set(
                i % this.data.width - this.data.width / 2,
                Math.floor(i / this.data.width / this.data.length) - this.data.height / 2,
                Math.floor(i / this.data.width) - this.data.length / 2
            )
        } else {
            const i = (d.ringDex === undefined ? d.ringDex = 0 : d.ringDex++) % ((this.data.width * 2 + 2 * this.data.height) * this.data.length)

            this.el.object3D.position.set(
                i % (this.data.width * 2 + 2 * this.data.height) - this.data.width - this.data.height,
                Math.floor(i / (this.data.width * 2 + 2 * this.data.height)) - this.data.height,
                Math.floor(i / (this.data.width * 2 + 2 * this.data.height)) - this.data.length
            )
        }
    }
})