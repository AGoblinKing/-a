AFRAME.registerComponent("recolor", {
    multiple: true,
    schema: {
        // goblin green
        type: "color", default: "#0F0"

    },

    init() {
        // run through model

        this.el.addEventListener("model-loaded", this.loaded = this.loaded.bind(this))


    },
    update() {
        if (this.e) {
            this.loaded(this.e)
        }
    },
    remove() {
        this.el.removeEventListener("model-loaded", this.loaded)
    },

    loaded(e) {
        // run through the model and change the color based on filter

        this.e = e
        e.detail.model.traverse(o => {
            if (o.isMesh) {

                o.material.roughness = 1
                o.material.metalness = 0

                if (this.id === "" || o.material.name.toLowerCase().includes(this.id)) {
                    o.material.color.set(this.data)

                    o.material.needsUpdate = true
                }
            }
        })
    }
})