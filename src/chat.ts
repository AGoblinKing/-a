import { Value } from "./value";


var recognition = new webkitSpeechRecognition();

var synth = window.speechSynthesis;

const recog = new Value<any>()

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    recog.set(event)
}

recognition.onend = () => {
    recognition.start()
}

function findVoice(voiceName: string) {
    const voices = synth.getVoices();
    return voices.find(voice => voice.name.indexOf(voiceName) !== -1)
}

export enum EControl {
    Nothing = "",

}
// all the things being said
export const talk = new Value('')
export const control = new Value(EControl.Nothing)

const findTilde = /~/g

function say(said: string) {
    if (!said) return
    const voices = synth.getVoices();

    var utterThis = new SpeechSynthesisUtterance(said.replace(findTilde, "control"));
    let voice = findVoice("Aus") || findVoice("UK English Female") || voices[0]
    utterThis.voice = voice
    utterThis.pitch = 0.9
    utterThis.rate = 1.1
    synth.speak(utterThis);
}

talk.on(say)

recog.on((event) => {
    if (!event) return

    var said = event.results[event.results.length - 1][0].transcript.trim();

    talk.set(said)
})

export const start = () => recognition.start()
