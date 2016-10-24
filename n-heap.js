"use strict";

class NHeap {
	constructor() {
		this._ar = [];
	}
	push(val) {
		if (this._ar.length > 0 && val < this._ar[0]) {
			this._ar.push(this._ar[0]);
			this._ar[0] = val;
		} else {
			this._ar.push(val);
		}
	}
	size() {
		return this._ar.length;
	}
	peekMin() {
		if (!this._ar.length)
			throw new Error("Heap is empty!");
		return this._ar[0];
	}
	extractMin() {
		if (!this._ar.length)
			throw new Error("Heap is empty!");
		let ret = this._ar[0];
		if (this._ar.length > 1) {
			let minVal = this._ar[1], minInd = 1;
			for (let i = 2; i < this._ar.length; i++) {
				if (this._ar[i] < minVal) {
					minVal = this._ar[i];
					minInd = i;
				}
			}
			this._ar[0] = minVal;
			this._ar[minInd] = this._ar[this._ar.length - 1];
		}
		this._ar.pop();
		return ret;
	}
}

exports.NHeap = NHeap;
