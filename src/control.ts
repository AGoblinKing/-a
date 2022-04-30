import { guest, host, room } from "./component/net"
import { AVATAR } from "src/component/avatar"

import state from "src/state"
import { avatar_current, avatar_doer, camera, do_drop, do_echo, do_throw, do_vary, open_debug, open_help, open_hostid, open_stats, open_targeting, open_ui, scouter, size, toggle_pointerlock, toggle_selfie, toggle_visible, voice_current } from "./timing"
import { Value } from "src/value"

export const binds = new Value<{ [key: string]: string }>(clone(state.binds)).save("binds")
export const vars = new Value<{ [key: string]: string }>(clone(state.vars)).save("vars")
export const binds_icon = new Value<{ [key: string]: string }>(clone(state.binds_icon)).save("binds_icon")

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

const arr = [1, 2, 3]
const vec3 = new AFRAME.THREE.Vector3()
const vec3o = new AFRAME.THREE.Vector3()
const quat = new AFRAME.THREE.Quaternion()

export enum EMod {
    not = "not",
    clear = "clear",
    toggle = "toggle"
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

    Join = "join",
    NotJoin = "notjoin",

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

    Room = "room",
    NotRoom = "notroom",

    UI = "ui",
    NotUI = "notui",

    Icon = "icon",
    NotIcon = "noticon",
    ClearIcon = "clearicon",

    Use = "use",
    NotUse = "notuse",
    ClearUse = 'throw',

    PointerLock = "pointerlock",
    NotPointerLock = "notpointerlock",
    TogglePointerLock = "togglepointerlock",

    ToggleThrow = "togglethrow",
    ToggleDrop = "toggledrop",

    Spawn = "spawn",
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
    [EControl.Voice]: (items: string[]) => {
        voice_current.set(items.slice(2).join(" "))
    },

    [EControl.Host]: (items: string[]) => {
        host.set(true)
    },
    [EControl.NotHost]: (items: string[]) => {
        host.set(false)
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

    },
    [EControl.Room]: (items: string[]) => {
        open_hostid.set(true)
    },
    [EControl.NotRoom]: (items: string[]) => {
        open_hostid.set(false)
    },
    [EControl.Join]: (items: string[]) => {
        // TODO: daisy chain might be okay?
        if (host.$) host.set(false)
        guest.set(true)
        room.set(items.slice(2).join(" "))
    },
    [EControl.NotJoin]: (items: string[]) => {
        guest.set(false)
        room.set("")
    },
    [EControl.UI]: (items: string[]) => {
        open_ui.set(true)
    },
    [EControl.NotUI]: (items: string[]) => {
        open_ui.set(false)
    },
    [EControl.Icon]: (items: string[]) => {
        binds_icon.$[items[2]] = items.slice(3).join(" ")
    },
    [EControl.NotIcon]: (items: string[]) => {
        delete binds_icon.$[items[2]]
    },

    [EControl.ClearIcon]: (items: string[]) => {
        binds_icon.set(clone(state.binds_icon))
    },
    [EControl.Use]: (items: string[]) => {
        if (items[2].slice(0, 3) !== "bag") {
            if (do_drop.$) {
                AVATAR.$.doDrop(items[2])
                return
            }

            if (do_throw.$) {
                AVATAR.$.doThrow(items[2])
                return
            }
        }
        // use [itemslot=hand_left]
        if (items[3]) {
            AVATAR.$.doUse(items[2], document.getElementById(items[3]))
        } else {
            AVATAR.$.doUse(items[2])
        }


    },
    [EControl.NotUse]: (items: string[]) => {
        // drop [itemslot=hand_left]
        AVATAR.$.doDrop(items[3])
    },
    [EControl.ClearUse]: (items: string[]) => {
        AVATAR.$.doThrow(items[3])
    },
    // TODO: should make a helper for this common scenario
    [EControl.PointerLock]: (items: string[]) => {
        toggle_pointerlock.set(true)
    },
    [EControl.NotPointerLock]: (items: string[]) => {
        toggle_pointerlock.set(false)
    },
    [EControl.TogglePointerLock]: (items: string[]) => {
        toggle_pointerlock.set(!toggle_pointerlock.$)
    },
    [EControl.ToggleDrop]: (items: string[]) => {
        do_drop.set(!do_drop.$)
    },
    [EControl.ToggleThrow]: (items: string[]) => {
        do_throw.set(!do_throw.$)
    },
    [EControl.Spawn]: (items: string[]) => {
        // ezpz
        const [, , what, count = "1"] = items

        const spawned = document.getElementById("spawned")
        const s = document.createElement("a-entity")
        if (parseInt(count) > 1) {
            // pool it
            // TODO: Mesh instancing or ammomodifications
            s.setAttribute(`pool__${what}`, `mixin: ${what}; size: ${count}`)
            s.setAttribute(`activate__${what}`, "")

        } else {
            s.setAttribute("mixin", what)
        }
        spawned.appendChild(s)
        camera.$.getWorldPosition(vec3)
        vec3o.set(0, 0, -2).applyQuaternion(camera.$.getWorldQuaternion(quat))
        vec3.add(vec3o)

        s.setAttribute("position", vec3.toArray(arr).join(" "))

    }
}

