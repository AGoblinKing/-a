export class ImageBuffer extends Uint8Array {
	size = 4

	gs(idx: number, item?: number) {
		if (item === undefined) {
			return this[idx * this.size]
		} else {
			this[idx * this.size] = item

			return item
		}
	}
}

export class DataBuffer extends Uint32Array {
	size: number = 0

	gs(idx: number, item?: number) {
		if (item === undefined) {
			return this[idx * this.size]
		} else {
			this[idx * this.size] = item

			return item
		}
	}
}
