import Main from "./main.svelte"
import "./chat"

const app = new Main({
	target: document.getElementById('svelte'),
	props: {}
})


window.addEventListener("contextmenu", e => e.preventDefault())