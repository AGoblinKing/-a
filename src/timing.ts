import { Value } from "./value";

export const tick = new Value(0)
export const open_home = new Value(true)
export const open_game = new Value(false)

export const motd = new Value(`🎊v0.0.5🎊

✅VRM✅Scene✅WebCam
❌ FPS Camera
❌ PhysX
❌ AI / Gameplay
❌ Voice
❌ Editing 
❌ VRM Import
❌ WebRTC Multiplayer 
❌ WebRTC MediaSoup Server 

The web is a scary place. 
🖥️ Use a VPN.🖥️

No cookies intended. Accountless. Age 18+ only.

`)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

ticker()
