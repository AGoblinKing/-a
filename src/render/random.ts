// generate a random scene

import type { Board } from 'src/buffer/board'
import { Paints } from 'src/buffer/paint'
import { ESpot } from 'src/design'
import { PaintsTexture } from './visboard'

export default (board: Board) => {
	// add some random materials
	for (let i = 0; i < 256 * 256; i++) {
		Paints.r(i, Math.floor(Math.random() * 0xff))
		Paints.g(i, Math.floor(Math.random() * 0xff))
		Paints.b(i, Math.floor(Math.random() * 0xff))
		Paints.texture(i, Math.floor(Math.random() * 0xff))
	}

	PaintsTexture.needsUpdate = true

	for (let i = 0; i < board.spots.length; i++) {
		switch (i % board.spots.size) {
			case ESpot.PIECE:
				break
			default:
				board.spots[i] = Math.floor(Math.random() * 0xffff)
		}
	}
}
