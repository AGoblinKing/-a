AFRAME.registerComponent('random', {
    multiple: true,
    schema: {
        type: "string",
    },
    init() {
        const spi = this.data.split("|")
        const mix = spi[Math.floor(Math.random() * spi.length)]

        this.el.setAttribute('mixin', this.el.getAttribute('mixin') || "" + ` ${mix}`)


    }
})