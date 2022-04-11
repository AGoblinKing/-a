import { Value } from "./value";

export const tick = new Value(0)
export const open_home = new Value(true)
export const open_game = new Value(false)

export const motd = new Value(`🎊v0.0.4🎊

✅VRM✅Scene✅WebCam
❌ FPS Camera
❌ PhysX
❌ AI / Gameplay

The web is a scary place. 
🖥️ Use a VPN.🖥️

`)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

ticker()
