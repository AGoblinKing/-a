// similar to main.svelte but for guest to a host
import "./chat"
import Guest from "./template/guest.svelte"

const app = new Guest({
    target: document.getElementById('svelte'),
    props: {}
})
