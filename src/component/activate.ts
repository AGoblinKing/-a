
AFRAME.registerComponent('activate', {
    multiple: true,

    update() {
        const pool = this.el.components[`pool__${this.id}`]

        if (!pool) return

        let ent
        for (let i = 0; i < pool.data.size; i++) {
            ent = pool.requestEntity()
            ent.play()
        }
    }
})