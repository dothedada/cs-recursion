import { LinkedList } from "./linkedListRecursive.js"

class HashMap {
	constructor(buckets) {
		this.buckets = buckets
		this.data = new Array(buckets)
	}

	hash(key) {
		let hashCode = 0

		const primeNumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
		}

		return hashCode % this.buckets;
	}

	// Método de auto grow o shrink

	set(key, value) {
		const hash = this.hash(key)
		if (!this.data[hash]) {
			this.data[hash] = [{ key, value }]
		} else if (this.data[hash].some(e => e.key === key)) {
			this.data[hash].find(e => e.key === key).value = value
		} else {
			this.data[hash].push({ key, value })
		}
	}

	get(key) {
		const hash = this.hash(key)
		if (!this.data[hash]) return null
		if (this.data[hash].length === 1) return this.data[hash][0].value
		return this.data[hash].find(e => e.key === key).value
	}
}
const pato = new HashMap(1)
pato.set('miguel', 1234)
pato.set('manuel', 6789)
console.log(JSON.stringify(pato, null, 2))
console.log(pato.get('miguel'))

