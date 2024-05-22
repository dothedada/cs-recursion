import { LinkedList } from "./linkedListRecursive.js"

class HashMap {
	constructor(buckets) {
		this.buckets = buckets
		this.data = new Array(buckets)
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] = new LinkedList()
		}
	}
}
const pato = new HashMap(5)
console.log(pato)

