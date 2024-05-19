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
		const last = (list) => {
			if (!list.next) return list
			return last(list.next)
		}
		return last(this)
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
		this.#lastNode.next = oldList
	}

	get size() {
		let listSize = (list, count = 1) => {
			if (!list.next) return count
			return listSize(list.next, count + 1)
		}
		return listSize(this)
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
		const getValue = (list, current = 0) => {
			if (current === index) return list.value
			if (!list.next) return null
			return getValue(list.next, current + 1)
		}
		return getValue(this)
	}

	pop() {
		let popValue = this.value
		if (!this.next) {
			this.value = undefined
		} else {
			const getBeforeLast = list => {
				if (!list.next.next) return list
				return getBeforeLast(list.next)
			}
			const tmpList = getBeforeLast(this)
			popValue = tmpList.next.value
			tmpList.next = null
		}
		return popValue
	}

	contains(searchValue) {
		const evalNodes = list => {
			if (list.value === searchValue) return true
			if (!list.next) return false
			return evalNodes(list.next)
		}
		return evalNodes(this)
	}

	find(searchValue) {
		const evalNodes = (list, count = 0) => {
			if (list.value === searchValue) return count
			if (!list.next) return -1
			return evalNodes(list.next, count + 1)
		}
		return evalNodes(this)
	}

	toString() {
		const composeString = list => {
			if (!list.next) return `( ${list.value} ) -> null`
			return `( ${list.value} ) -> ${composeString(list.next)}`
		}
		return composeString(this)
	}

	insertAt(index, ...values) {
		if (typeof index !== 'number') throw new Error('Index must be a number')
		if (!values.length) throw new Error('Must introduce at least one value')
		if (!Math.round(Math.abs(index))) {
			this.prepend(...values)
			return
		}

		const getPreviousNode = (list, count = Math.round(Math.abs(index))) => {
			if (!list.next || count <= 1) return list
			return getPreviousNode(list.next, count - 1)
		}
		const insertionPoint = getPreviousNode(this)
		const tmpNext = insertionPoint.next ?? null
		insertionPoint.next = this.#spreadNodes(values)
		this.#lastNode.next = tmpNext
	}

	removeAt(index = 0) {
		if (typeof index !== 'number') throw new Error('Index must be a number')
		if (index < 0) throw new Error('Index must be a positive integer')
		if (!index) {
			this.value = this.next ? this.next.value : undefined
			this.next = this.next ? this.next.next : null
			return
		}

		const getPreviousNode = (list, count = index) => {
			if (count <=1 ) return list
			if (!list.next) return undefined
			return getPreviousNode(list.next, count -= 1)
		}

		const removePoint = getPreviousNode(this)
		removePoint.next = removePoint.next ? removePoint.next.next : null



		// const ind = !index || index < 0 ? 0 : index
		// let current = this
		// let count = 0
		// let previous
		//
		// while (count < ind) {
		// 	if (!current.next) return undefined
		// 	previous = current
		// 	current = current.next
		// 	count++
		// }
		// if (current.next) {
		// 	current.value = current.next.value
		// 	current.next = current.next.next
		// } else {
		// 	previous.next = null
		// }
	}
}

const list = new LinkedList(0, 1, 2, 3)
console.log(list.toString())
list.removeAt(1)
console.log(list.toString())
list.removeAt(0)
list.removeAt(0)
list.removeAt(0)
list.removeAt(0)
list.removeAt(0)
console.log(list.toString())
