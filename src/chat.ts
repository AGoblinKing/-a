
import { binds, controls, vars } from "./control";
import { key_down } from "./input";

import { do_echo, open_live, voice_current } from "./timing";
import { Value } from "./value";


const recog = new Value<any>()
var recognition
var synth = window.speechSynthesis;
function init() {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        recog.set(event)
    }

    recognition.onend = () => {
        if (open_live.$) recognition.start()
    }
}

function findVoice(voiceName: string) {
    const voices = synth.getVoices();
    return voices.find(voice => voice.name.toLowerCase().indexOf(voiceName.toLowerCase()) !== -1)
}


// all the things being said
export const talk = new Value('')

export const assist = new Value('')

const findTilde = /~/g

function say(said: string) {
    if (!said) return

    said = said.replace(findTilde, "control")

    if (doControl(said) && !do_echo.$) return

    const spli = said.split("|")

    said = spli[Math.floor(Math.random() * spli.length)]

    const voices = synth.getVoices();

    var utterThis = new SpeechSynthesisUtterance(said);

    utterThis.voice = findVoice(voice_current.$) || findVoice("Aus") || findVoice("UK English Female") || voices[0]
    utterThis.pitch = 1
    utterThis.rate = 0.8
    utterThis.volume = 1

    synth.speak(utterThis);
}


function doControl(said: string) {
    const items = said.toLowerCase().trim().split(" ")

    if (items[0] !== "control") return false

    switch (items[1]) {
        case "not":
        case "clear":
            items[1] += items[2]
    }

    if (controls[items[1]]) {
        controls[items[1]](items)
    } else if (vars.$[items[1]]) {
        talk.set(vars.$[items[1]])
    } else {
        return false
    }

    return true
}

talk.on(say)

recog.on((event) => {
    if (!event) return

    var said = event.results[event.results.length - 1][0].transcript.trim();

    talk.set(said)
})

export const start = () => {
    if (!recognition) init()

    recognition.start()
}

function end() {
    recognition?.stop()
}
let cancels = []

open_live.on(($l) => {
    if ($l) {
        start()
    } else {
        end()
    }
})

binds.on(($binds) => {
    cancels.forEach((cancel) => cancel())
    cancels = []

    Object.entries($binds).forEach(([key, value]) => {
        const cancel = key_down.on(($k) => {
            if ($k !== key) return
            talk.set(value)
        })
        cancels.push(cancel)
    })
})

