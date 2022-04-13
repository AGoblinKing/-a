import { init } from "svelte/internal";

var recognition = new webkitSpeechRecognition();

var synth = window.speechSynthesis;

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

AFRAME.registerComponent("speech-controller", {

    init() {
        recognition.start()

        const voices = synth.getVoices();

        let voice = voices.find(voice => voice.name.indexOf('Aus') !== -1)

        if (!voice) {
            voice = voices.find(voice => voice.name.indexOf('UK English Female') !== -1)
        }

        recognition.onresult = (event) => {
            var said = event.results[event.results.length - 1][0].transcript.trim();
            console.log(said)
            this.el.setAttribute("color", said.replace(".", ""));

            var utterThis = new SpeechSynthesisUtterance(said);
            utterThis.voice = voice
            utterThis.pitch = 1
            utterThis.rate = 1
            synth.speak(utterThis);
        }

        recognition.onend = () => {
            this.init()
        }
    },


})