import { LinkedList } from "./linkedListRecursive.js"

class HashMap {
	constructor(buckets) {
		this.buckets = buckets
		this.data = new Array(buckets)
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] = new LinkedList()
		}
	}

	hash(key) {
		let hashCode = 0

		const primeNumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
		}

		return hashCode 
		// return hashCode % this.buckets;
	}
}
const pato = new HashMap(5)
console.log(pato)
console.log(pato.hash('Miguel'))
console.log(pato.hash('Manuel'))

