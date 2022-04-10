
AFRAME.registerComponent('activate', {
    multiple: true,

    update() {
        const pool = this.el.components[`pool__${this.id}`]

        if(!pool) return
        
        let ent 
        while(ent = pool.requestEntity()) {
            ent.play()
        }

    }
})