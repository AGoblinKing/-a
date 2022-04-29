AFRAME.registerComponent("sfxr", {
    multiple: true,
    schema: {
        oldParams: { default: true },
        wave_type: { default: 1 },
        p_env_attack: { default: 0 },
        p_env_sustain: { default: 0.31718502829007483 },
        p_env_punch: { default: 0 },
        p_env_decay: { default: 0.2718540993592685 },
        p_base_freq: { default: 0.26126191208337196 },
        p_freq_limit: { default: 0 },
        p_freq_ramp: { default: 0.43787689856926615 },
        p_freq_dramp: { default: 0 },
        p_vib_strength: { default: 0 },
        p_vib_speed: { default: 0 },
        p_arp_mod: { default: 0 },
        p_arp_speed: { default: 0 },
        p_duty: { default: 1 },
        p_duty_ramp: { default: 0 },
        p_repeat_speed: { default: 0.7558565452384385 },
        p_pha_offset: { default: 0 },
        p_pha_ramp: { default: 0 },
        p_lpf_freq: { default: 1 },
        p_lpf_ramp: { default: 0 },
        p_lpf_resonance: { default: 0 },
        p_hpf_freq: { default: 0 },
        p_hpf_ramp: { default: 0 },
        p_vib_delay: { default: 0 },
        sound_vol: { default: 0.4 },
        sample_rate: { default: 44100 },
        sample_size: { default: 8 },
        autoplay: { type: "boolean", default: false },
        spatial: { type: "boolean", default: true },
    },
    init: function () {

        // sign up for the event and autoplay stuff
        if (this.id) {
            this.event = this.event.bind(this)
            this.el.addEventListener(this.id, this.event)

        }

        if (this.autoplay) {
            this.event()
        }
    },
    event() {

        if (!this.audio) this.audio = new SoundEffect(
            Object.assign(new Params(), this.data).mutate().mutate().mutate()
        )
            .generate()
            .getAudio()



        this.audio.play()

    },
    remove() {
        if (this.cancel) clearTimeout(this.cancel)
        this.el.removeEventListener(this.id, this.event)
    }
})

