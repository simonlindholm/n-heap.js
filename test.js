"use strict";

let {NHeap} = require("./n-heap.js");
var heap = new NHeap();
heap.push(7);
heap.push(5);
console.log(heap.extractMin());
heap.push(12);
console.log(heap.extractMin());
console.log(heap.size());
console.log(heap.extractMin());
