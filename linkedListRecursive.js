class Node {
	constructor(value = undefined, next = null) {
		this.value = value
		this.next = next
	}
}

class LinkedList extends Node {
	constructor(head, ...values) {
		super(head)
		if (values.length) this.next = this.#spreadNodes(values)
	}

	get #lastNode() {
		if (!this.next) return this
		return current(this.next)
	}

	#spreadNodes(values) {
		if (!values.length) return null
		return new Node(values[0], this.#spreadNodes(values.slice(1)))
	}

	append(...values) {
		this.#lastNode.next = this.#spreadNodes(values)
	}

	prepend(...values) {
		const oldList = { ...this }
		this.value = values[0]
		this.next = this.#spreadNodes(values.slice(1))
		this.#lastNode = oldList
	}

	get size() {
		let tmpNode = this
		let listSize = 0

		while (tmpNode.next) {
			listSize += 1
			tmpNode = tmpNode.next
		}
		return listSize + 1
	}

	get head() {
		return this.value
	}

	get tail() {
		return this.#lastNode.value
	}

	at(index) {
		if (typeof index !== 'number') throw new Error('Index must be a number')
		if (index < 0) return null
		let current = 0
		let tmpNode = this

		while (current < index) {
			tmpNode = tmpNode.next
			if (!tmpNode) return null
			current++
		}
		return tmpNode.value
	}

	pop() {
		let nodeValue = this.value

		if (!this.next) {
			this.value = undefined
		} else {
			let nodeBeforeLast = this

			while (nodeBeforeLast.next.next) {
				nodeBeforeLast = nodeBeforeLast.next
			}
			nodeValue = nodeBeforeLast.next.value
			nodeBeforeLast.next = null
		}
		return nodeValue
	}

	contains(searchValue) {
		let current = this

		while (current) {
			if (current.value === searchValue) return true
			current = current.next
		}
		return false
	}

	find(searValue) {
		let current = this
		let index = 0

		while (current) {
			if (current.value === searValue) return index
			current = current.next
			index++
		}
		return -1 // if the value doesn't exist return index -1
	}

	toString() {
		let listStr = ''
		let current = this

		while (current) {
			listStr += `( ${current.value} ) -> `
			if (!current.next) listStr += 'null'
			current = current.next
		}
		return listStr
	}

	insertAt(index = 0, value = undefined) {
		if (typeof index !== 'number') throw new Error('Index must be a number')

		const ind = !index || index < 0 ? 0 : index
		let current = this
		let count = 0

		while (current.next && count < ind) {
			current = current.next
			count++
		}
		if (count === ind) { // if index is bigger than the list create a new node at the end
			current.next = new Node(
				current.value,
				current.next ? { ...current.next } : null
			)
			current.value = value
		} else {
			current.next = new Node(value)
		}
	}

	removeAt(index = 0) {
		if (typeof index !== 'number') throw new Error('Index must be a number')

		const ind = !index || index < 0 ? 0 : index
		let current = this
		let count = 0
		let previous

		while (count < ind) {
			if (!current.next) return undefined
			previous = current
			current = current.next
			count++
		}
		if (current.next) {
			current.value = current.next.value
			current.next = current.next.next
		} else {
			previous.next = null
		}
	}
}

const list = new LinkedList(0, 1, 2, 3)
list.prepend('a')
console.log(list.toString())
