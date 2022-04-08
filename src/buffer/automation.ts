// scripts to run now or in the future

import { DataBuffer } from 'src/databuffer'

export class Automation extends DataBuffer {
	static SIZE = 6

	size = Automation.SIZE
	used: Set<number>
	sorted: number[]

	resort = false

	constructor(length: number) {
		super(length)

		this.used = new Set<number>()
		this.sorted = []
	}

	script(idx: number, script?: number) {
		return this.gs(idx * this.size, script)
	}

	arg1(idx: number, arg1?: number) {
		return this.gs(idx * this.size + 1, arg1)
	}

	arg2(idx: number, arg2?: number) {
		return this.gs(idx * this.size + 2, arg2)
	}

	arg3(idx: number, arg3?: number) {
		return this.gs(idx * this.size + 3, arg3)
	}
	context(idx: number, context?: number) {
		return this.gs(idx * this.size + 4, context)
	}
	when(idx: number, when?: number) {
		if (when !== undefined) {
			if (!this.used.has(when)) {
				this.used.add(when)
				this.sorted.push(when)
			}
			this.resort = true
		}
		return this.gs(idx * this.size + 5, when)
	}
}
