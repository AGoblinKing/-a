import { currentVRM, mirrorVRM } from "./component/vrm";
import { key_down, key_map } from "./keyboard";
import state from "./state";
import { avatar_current, do_echo, open_heard, open_help, open_stats, tick, toggle_selfie } from "./timing";
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
    Save = "save",

    Var = "var",
    NotVar = "notvar",
    ClearVar = "clearvar",

    Bind = "bind",
    NotBind = "notbind",
    ClearBind = "clearbind",

    Selfie = "selfie",
    NotSelfie = "notselfie",

    Swap = "swap",
    Visible = "visible",
    NotVisible = "notvisible",
    Avatar = "avatar",
    ClearAvatar = "clearavatar",

    Echo = "echo",
    NotEcho = "notecho",
    Help = "help",
    NotHelp = "nothelp",
    Stats = "stats",
    NotStats = "notstats",
    Heard = "heard",
    NotHeard = "notheard",

}
// all the things being said
export const talk = new Value('')
export const voice = new Value("UK English")
export const assist = new Value('')

const findTilde = /~/g

function say(said: string) {
    if (!said) return

    said = said.replace(findTilde, "control")

    if (doControl(said)) return

    const spli = said.split("|")

    said = spli[Math.floor(Math.random() * spli.length)]

    const voices = synth.getVoices();

    var utterThis = new SpeechSynthesisUtterance(said);

    utterThis.voice = findVoice(voice.$) || findVoice("Aus") || findVoice("UK English Female") || voices[0]
    utterThis.pitch = 1
    utterThis.rate = 0.8
    synth.speak(utterThis);
}

function clone(target: any) {
    return Object.fromEntries(Object.entries(target)) as { [key: string]: any }
}
const binds = new Value<{ [key: string]: string }>(clone(state.binds)).save("binds")
const vars = new Value<{ [key: string]: string }>(clone(state.vars)).save("vars")

export const controls = {
    [EControl.Bind]: (items: string[]) => {
        binds.$[items[2]] = items.slice(3).join(" ")
        binds.poke()
    },
    [EControl.NotBind]: (items: string[]) => {
        delete binds.$[items[3]]
        binds.poke()
    },
    [EControl.ClearBind]: (items: string[]) => {
        binds.set(clone(state.binds))
    },
    [EControl.Var]: (items: string[]) => {
        vars.$[items[2]] = items.slice(3).join(" ")
        vars.poke()
    },
    [EControl.NotVar]: (items: string[]) => {
        delete vars.$[items[3]]
        vars.poke()
    },
    [EControl.ClearVar]: (items: string[]) => {
        vars.set(clone(state.vars))
    },
    [EControl.Selfie]: (items: string[]) => {
        toggle_selfie.set(true)
    },
    [EControl.NotSelfie]: (items: string[]) => {
        toggle_selfie.set(false)
    },
    [EControl.Save]: () => {
        saveState()
    },
    [EControl.Swap]: (items: string[]) => {
        // switch doer and current

        const cur = currentVRM.$
        const mir = mirrorVRM.$

        currentVRM.$ = mir
        mirrorVRM.$ = cur

        currentVRM.poke()
        mirrorVRM.poke()
    },
    [EControl.Visible]: (items: string[]) => {

    },
    [EControl.NotVisible]: (items: string[]) => {

    },
    [EControl.Avatar]: (items: string[]) => {
        avatar_current.set(items[2])
    },
    [EControl.ClearAvatar]: (items: string[]) => {
        avatar_current.set(state.avatar.current)
    },
    [EControl.Echo]: (items: string[]) => {
        do_echo.set(true)
    },
    [EControl.NotEcho]: (items: string[]) => {
        do_echo.set(false)
    },
    [EControl.Help]: (items: string[]) => {
        open_help.set(true)
    },
    [EControl.NotHelp]: (items: string[]) => {
        open_help.set(false)
    },
    [EControl.Stats]: (items: string[]) => {
        open_stats.set(true)
    },
    [EControl.NotStats]: (items: string[]) => {
        open_stats.set(false)
    },
    [EControl.Heard]: (items: string[]) => {
        open_heard.set(true)
    },
    [EControl.NotHeard]: (items: string[]) => {
        open_heard.set(false)
    },
}

function saveState() {
    console.log(JSON.stringify({
        binds: binds.$,
        vars: vars.$,
        selfie: toggle_selfie.$
    }, null, "\t"))
}

function loadState(state: { binds: { [key: string]: string }, vars: { [key: string]: string }, selfie: boolean }) {
    binds.set(state.binds)
    vars.set(state.vars)
    toggle_selfie.set(state.selfie)
}

// @ts-ignore
window.loadState = loadState

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

    return do_echo.$
}

talk.on(say)

recog.on((event) => {
    if (!event) return

    var said = event.results[event.results.length - 1][0].transcript.trim();

    talk.set(said)
})

export const start = () => recognition.start()

let cancels = []

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

