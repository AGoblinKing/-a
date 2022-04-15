import type { Object3D } from "three";
import state from "./state";
import { Value } from "./value";

export const tick = new Value(0)
export const avatar_current = new Value<string>(state.avatar.current).save("avatar_current_2")
export const avatar_doer = new Value<string>(state.avatar.doer).save("avatar_doer_1")

export const open_home = new Value(true)
export const open_game = new Value(false)
export const open_text = new Value<string>(undefined)
export const open_loading = new Value(false)
export const open_help = new Value(false)
export const open_stats = new Value(false).save("stats")
export const open_heard = new Value(true).save("heard")

export const camera = new Value<Object3D>()
export const toggle_selfie = new Value(state.selfie).save("selfie")
export const do_echo = new Value(true).save("do_echo")

open_game.on(($g) => {
    if (open_game.$) {
        open_loading.set(true)
    }
})



export const motd = new Value(`🎊v0.1.0🎊
Controls + Persist
✅ Controls ✅ Persist 

❌ Performance Pass

❌ AI DOER ❌ Gameplay 

❌ WebRTC Multiplayer 
6 player, 5 clients to 1 host

❌ 1 MediaStream 
music / video / camera source / picture

❌ Factions ❌ Rules 

The web is a scary place. 
🖥️ Use a VPN.🖥️

WebRTC connection details stored in central DB to allow connection by alias. 

WebRTC data is sent to peers only. 

Camera data is processed by mediapipe via tensorflow locally.

Microphone data is handled by the browser provider, ie: Chrome / Edge / etc.

Cookies for localStorage only. 
If that's a problem then reject the cookie use policy by closing your browser.

Accountless. 

Age 18+ only.

`)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

export const loading = new Value(`Loading...

 WASD Move | Q+E Rotate
 Enter | Chat
 ~ | Command
 Space | Jump
 
 Default Binds:
 N: Selfie
 M: NotSelfie
 H: Hi | Hi! | Hello | Heya | Yo
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
`
)