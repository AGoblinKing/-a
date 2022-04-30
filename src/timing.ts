import type { Object3D } from "three";
import state from "./state";
import { Value } from "./value";

import mobile from "is-mobile"

export const tick = new Value(0)
export const avatar_current = new Value<string>(state.avatar.current).save("avatar_current_2")
export const avatar_doer = new Value<string>(state.avatar.doer).save("avatar_doer_1")
export const voice_current = new Value("UK English").save("voice_current")
export const voice_doer = new Value("Aus | UK English").save("voice_doer")
export const scouter = new Value("green").save("scouter")
export const videos = new Value(["7Cchlyg7XNI", "WajD8HPS0JI", "pxCwIWL4_wA"])
export const video = new Value("doer1.8").save("video_2")
export const ground = new Value<HTMLElement[]>([])

export const open_ui = new Value(true).save("ui")
export const open_home = new Value(true)
export const open_game = new Value(false)
export const open_text = new Value<string>(undefined)
export const open_loading = new Value(false)
export const open_help = new Value(false)
export const open_stats = new Value(false).save("stats")
export const open_debug = new Value(false).save("debugger")
export const open_targeting = new Value(false).save("targeting_5")
export const open_live = new Value(false)
export const open_hostid = new Value(true)

export const do_drop = new Value(false)
export const do_throw = new Value(false).not(do_drop)

const loc = location.search.slice(1).split("&").map((i) => i.split("="))
// @ts-ignore
export const args = new Value(new Map(loc))

export const camera = new Value<Object3D>()
export const camera_el = new Value<any>()
export const toggle_selfie = new Value(state.selfie).save("selfie")
export const toggle_visible = new Value(state.visible).save("visible")
export const do_echo = new Value(false).save("do_echo2")
export const do_vary = new Value(true)
export const ismobile = new Value(mobile())
export const toggle_pointerlock = new Value(true)
export const time = new Value(new AFRAME.THREE.Uniform(0))

export const size = new Value(new AFRAME.THREE.Vector3(1, 1, 1))
open_game.on(($g) => {
    if (open_game.$) {
        open_loading.set(true)
    }
})

export const motd = new Value(`🎊v0.4.0🎊

✅ Drop/Pickup Items
✅ Stow
✅ Use Items

❌ Perf Pass
❌ Cave
❌ HP/Death/Respawn
❌ Networked Multiplayer 
❌ Pose Animations
❌ AI  

Camera data is processed by mediapipe via tensorflow locally.

Microphone data is handled by the browser provider, ie: Chrome / Edge / etc.

Cookies are not used to track your personal data by us. localStorage is used for persistance. 
There are iframes to 3rd parties that may attempt to track you, like youtube. 
Users can load assets remotely using HTTP to other websites. We're not responsible for their content, contact the host directly.
If that's a problem then reject this terms of use by closing your browser or navigating away from this website.

Accountless. 

Age 18+ only.

`)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

export const loading = new Value(`Loading...

 WASD Move > Z+C Rotate
 Enter > Chat
 ~ > Command
 Space > Jump
 
 Default Binds:
 
 Q: Toggle Drop
 E: Toggle Throw
 N: Selfie
 M: NotSelfie
 H: Hi | Hi! | Hello | Heya | Yo
 F1: Help
 F2: NotHelp
`
)
ticker()


export const helptext = new Value(`🤖Commands🤖

~ echo 
echo on, persisted

~ not echo 
echo off, persisted

~ avatar ...url 
set avatar to URL, persisted

~ clear avatar 
set avatar to default

~ bind key ...commands 
bind key to commands, persisted

~ not bind key
unbinds key, persisted

~ var name ...commands 
binds variable name to commands

~ not var name 
unbinds variable name

~ stats 
show fps stats

~ not stats
hide fps stats


~ help
show this help

~ not help
hide this help

~ voice ...nameToSearch
set voice to nameToSearch ie: aus would find an Australian voice or UK for British, persisted
per browser

~ swap
swap places with your doer

~ visible
show your avatar

~ not visible
hide your avatar

~ selfie
selfie camera mode

~ not selfie
not selfie camera mode

~ target
show targeting UI, persists

~ not target
hide targeting UI, persists

~ scouter ...color
set your targeting UI to be that color, persists

~ not scouter
reset scout color to green, persists

~ ui
show onscreen UI

~ not ui
hide onscreen UI

~ icon bindkey ...icon
show icon on onscreen ui for that bindkey (1-5)

~ not icon bindkey
remove icon from onscreen ui for that bindkey (1-5)

~ size number
set size of your avatar

~ not size
reset back to 1 for size

~ join ...room
~ host

`
)