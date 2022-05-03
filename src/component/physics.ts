const phys = {
    schema: {
        type: "string"
    },

    init() {
        this.loaded = this.loaded.bind(this)

        this.el.addEventListener("model-loaded", this.loaded)
        this.el.addEventListener("db-ready", this.loaded)
    },
    remove() {
        this.el.removeEventListener("model-loaded", this.loaded)
        this.el.removeEventListener("db-ready", this.loaded)
    },
    loaded() {
        if (this.ready) return

        requestAnimationFrame(() => {
            this.ready = true
            this.update()
        })
    },
}

AFRAME.registerComponent("physics-body", Object.assign({
    update() {
        if (!this.ready) return
        this.el.setAttribute("ammo-body", this.data)
    },

}, phys))

AFRAME.registerComponent("physics-shape", Object.assign({
    update() {
        if (!this.ready) return
        this.el.setAttribute("ammo-shape", this.data)
    },
}, phys))