import { Value } from "./value";

export const tick = new Value(0)

const ticker = () => {
    requestAnimationFrame(ticker)
    tick.set(tick.$ + 1)
}

ticker()
