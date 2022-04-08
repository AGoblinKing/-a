import { Automation } from './automation'
import { Token } from './token'
import { Spot } from './spot'

// a static sized collection of fixed position pieces
export class Board {
	base = 32
	count = Math.pow(this.base, 3)

	// idx is id
	tokens = new Token(this.count * Token.SIZE)

	// idx is x,y,z
	spots = new Spot(this.count * Spot.SIZE)

	// idx is id
	autos = new Automation(0xffff * Automation.SIZE)

	tick() {
		// do autos
	}
}
