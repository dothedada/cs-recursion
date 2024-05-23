import { LinkedList } from "./linkedListRecursive.js"

class HashMap {
	constructor(buckets) {
		this.buckets = buckets
		this.data = new Array(buckets)
	}

	#hash(key) {
		let hashCode = 0

		const primeNumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
		}

		return hashCode % this.buckets;
	}

	// Método de auto grow o shrink

	set(key, value) {
		const hash = this.#hash(key)
		if (!this.data[hash]) {
			this.data[hash] = [{ key, value }]
		} else if (this.data[hash].some(e => e.key === key)) {
			this.data[hash].find(e => e.key === key).value = value
		} else {
			this.data[hash].push({ key, value })
		}
	}

	get(key) {
		const hash = this.#hash(key)
		if (!this.data[hash]) return null
		if (this.data[hash].length === 1) return this.data[hash][0].value
		return this.data[hash].find(e => e.key === key).value
	}

	has(key) {
		const hash = this.#hash(key)
		if (!this.data[hash]) return false
		return this.data[hash].some(e => e.key === key)
	}

	remove(key) {
		const hash = this.#hash(key)
		if (!this.data[hash]) return false
		const index = this.data[hash].findIndex(e => e.key === key)
		this.data[hash].splice(index, 1)
		return true
	}

	get length() {
		let items = 0
		this.data.forEach(bucket => {
			if (bucket?.length) items += bucket.length
		})
		return items
	}

	clear() {
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] = null
		}
	}

	get keys() {
		const keysArr = []
		for (let i = 0; i < this.data.length; i++) {
			if (!this.data[i]) continue
			keysArr.push(...this.data[i].reduce((sum, item) => {
				sum.push(item.key)
				return sum
			}, []))
		}
		return keysArr
	}
	
	get values() {
		const valuesArr = []
		for (let i = 0; i < this.data.length; i++) {
			if (!this.data[i]) continue
			valuesArr.push(...this.data[i].reduce((sum, item) => {
				sum.push(item.value)
				return sum
			}, []))
		}
		return valuesArr
	}

	get entries() {
		const entriesArr = []
		for (let i = 0; i < this.data.length; i++) {
			if (!this.data[i]) continue
			entriesArr.push(...this.data[i].reduce((sum, item) => {
				sum.push([item.key, item.value])
				return sum
			}, []))
		}
		return entriesArr
	}
}
const pato = new HashMap(1)
pato.set('miguel', 'prueba miguel')
pato.set('marcela', 'prueba manuel')
pato.set('maria', 'Prueba mario')
console.log(JSON.stringify(pato, null, 2))
console.log(pato.length)
console.log(pato.keys)
console.log(pato.values)
console.log(pato.entries)
// console.log(JSON.stringify(pato, null, 2))
// console.log(pato.get('miguel'))
// console.log(pato.has('manuel'))
// console.log(pato.has('vic'))
//
