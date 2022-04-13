

AFRAME.registerComponent("control", {
    schema: {
        control: { type: "string"},
        mixin: { type: "string"}
    },

    init() {
        
    },

    remove() {
        this.cancel()
    }

})