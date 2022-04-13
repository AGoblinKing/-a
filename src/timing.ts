import { Value } from "./value";

export const tick = new Value(0)
export const open_home = new Value(true)
export const open_game = new Value(false)
export const open_text = new Value<string>(undefined)
export const open_loading = new Value(false)

export const motd = new Value(`🎊v0.0.8🎊
Lighting Update

✅VRM✅Scene✅WebCam
✅Camera✅Physics
✅Voice
❌ AI 
❌ Gameplay
❌ Editing 
❌ VRM Import
❌ WebRTC Multiplayer 
❌ Media

The web is a scary place. 
🖥️ Use a VPN.🖥️

No cookies intended. Accountless. Age 18+ only.


`)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

export const loading = new Value(`
    Loading...

What should we put here ? `
)
ticker()
