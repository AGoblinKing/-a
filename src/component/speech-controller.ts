import { Value } from "src/value";


var recognition = new webkitSpeechRecognition();

var synth = window.speechSynthesis;

const recog = new Value<any>()

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let started = false

recognition.onresult = (event) => {
    recog.set(event)
}

recognition.onend = () => {
    recognition.start()
}

const voices = synth.getVoices();

function findVoice(voiceName: string) {
    return voices.find(voice => voice.name.indexOf(voiceName) !== -1)
}

AFRAME.registerComponent("speech-controller", {

    init() {
        let voice = findVoice("Aus") || findVoice("UK English Female") || voices[0]

        if(!started) {
            recognition.start()
            started = true
        }

        this.cancel = recog.on((event) => {
            if(!event) return

            var said = event.results[event.results.length - 1][0].transcript.trim();
            console.log(said)
            this.el.setAttribute("color", said.replace(".", ""));

            var utterThis = new SpeechSynthesisUtterance(said);
            utterThis.voice = voice
            utterThis.pitch = 0.9
            utterThis.rate = 1.25
            synth.speak(utterThis);
        })
        
    },

    remove() {
        this.cancel()
    }

})