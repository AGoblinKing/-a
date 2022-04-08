import { ImageBuffer } from 'src/databuffer'

export class Paint extends ImageBuffer {
	static SIZE = 4

	r(idx: number, r?: number) {
		return this.gs(idx * this.size, r)
	}

	g(idx: number, g?: number) {
		return this.gs(idx * this.size + 1, g)
	}

	b(idx: number, b?: number) {
		return this.gs(idx * this.size + 2, b)
	}

	texture(idx: number, texture?: number) {
		return this.gs(idx * this.size + 3, texture)
	}
}

export const Paints = new Paint(256 * 256 * Paint.SIZE)
