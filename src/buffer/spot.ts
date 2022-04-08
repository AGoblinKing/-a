import { DataBuffer } from 'src/databuffer'

export class Spot extends DataBuffer {
	static SIZE = 8

	size = Spot.SIZE

	north(idx: number, paint?: number) {
		return this.gs(idx * this.size, paint)
	}
	south(idx: number, paint?: number) {
		return this.gs(idx * this.size + 1, paint)
	}
	west(idx: number, paint?: number) {
		return this.gs(idx * this.size + 2, paint)
	}
	east(idx: number, paint?: number) {
		return this.gs(idx * this.size + 3, paint)
	}
	floor(idx: number, paint?: number) {
		return this.gs(idx * this.size + 4, paint)
	}
	ceil(idx: number, paint?: number) {
		return this.gs(idx * this.size + 5, paint)
	}

	// knee high above floor
	floor2(idx: number, paint?: number) {
		return this.gs(idx * this.size + 6, paint)
	}

	token(idx: number, piece?: number) {
		return this.gs(idx * this.size + 7, piece)
	}
}
