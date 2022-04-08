import { DataBuffer } from 'src/databuffer'

export class Token extends DataBuffer {
	static SIZE = 3

	size = Token.SIZE

	paint(idx: number, paint?: number) {
		return this.gs(idx * this.size, paint)
	}

	alignment(idx: number, alignment?: number) {
		return this.gs(idx * this.size + 1, alignment)
	}

	scale(idx: number, scale?: number) {
		return this.gs(idx * this.size + 2, scale)
	}
}
