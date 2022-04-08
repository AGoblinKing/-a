import { board } from './game'
import debug from './render/debug'
import Main from './ui/Main.svelte'

import './control/camera'

const app = new Main({
	target: document.getElementById('svelte'),
	props: {}
})

// TODO: remove debug
debug(board)
