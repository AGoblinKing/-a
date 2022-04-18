import { currentVRM, mirrorVRM } from "./component/vrm"
import state from "./state"
import { avatar_current, avatar_doer, camera, camera_el, do_echo, do_vary, open_debug, open_heard, open_help, open_stats, open_targeting, scouter, size, toggle_selfie, toggle_visible, voice_current } from "./timing"
import { Value } from "./value"

export const binds = new Value<{ [key: string]: string }>(clone(state.binds)).save("binds")
export const vars = new Value<{ [key: string]: string }>(clone(state.vars)).save("vars")

function clone(target: any) {
    return Object.fromEntries(Object.entries(target)) as { [key: string]: any }
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

    Guest = "guest",
    NotGuest = "notguest",

    Host = "host",
    NotHost = "nothost",

    Voice = "voice",

    Target = "target",
    NotTarget = "nottarget",

    Debug = "debug",
    NotDebug = "notdebug",

    Vary = "vary",
    Scouter = "scouter",
    NotScouter = "notscouter",

    Size = "size",
    NotSize = "notsize",

    Pos = "pos",
    NotPos = "notpos",
}


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
        const cur = avatar_current.$
        avatar_current.set(avatar_doer.$)
        avatar_doer.set(cur)
    },

    [EControl.Visible]: (items: string[]) => {
        toggle_visible.set(true)
    },
    [EControl.NotVisible]: (items: string[]) => {
        toggle_visible.set(false)
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
    [EControl.Voice]: (items: string[]) => {
        voice_current.set(items.slice(2).join(" "))
    },
    [EControl.Guest]: (items: string[]) => {

    },
    [EControl.NotGuest]: (items: string[]) => {

    },
    [EControl.Host]: (items: string[]) => {

    },
    [EControl.NotHost]: (items: string[]) => {

    },
    [EControl.Target]: (items: string[]) => {
        open_targeting.set(true)
    },
    [EControl.NotTarget]: (items: string[]) => {
        open_targeting.set(false)
    },
    [EControl.Debug]: (items: string[]) => {
        open_debug.set(true)
    },
    [EControl.NotDebug]: (items: string[]) => {
        open_debug.set(false)
    },
    [EControl.Vary]: (items: string[]) => {
        do_vary.poke()
    },
    [EControl.Scouter]: (items: string[]) => {
        scouter.set(items.join(" "))
    },
    [EControl.NotScouter]: (items: string[]) => {
        scouter.set("green")
    },
    [EControl.Size]: (items: string[]) => {
        const n = parseFloat(items[2])
        size.$.set(n, n, n)
        size.poke()

    },
    [EControl.NotSize]: (items: string[]) => {
        size.$.set(1, 1, 1)
        size.poke()
    },
    [EControl.Pos]: (items: string[]) => {

    },
    [EControl.NotPos]: (items: string[]) => {

    }
}

