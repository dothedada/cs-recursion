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

	#previousNode (index, list) {
		if (typeof index !== 'number') throw new Error('Index must be a number')
		if (index < 0) throw new Error('Index must be a positive integer')
		const ind = Math.round(index)

		if (!list.next || ind <= 1) return list
		return this.#previousNode(ind -1, list.next)
	}

	#spreadNodes(values, last = null) {
		if (!values.length) return last
		return new Node(values[0], this.#spreadNodes(values.slice(1), last))
	}

	append(...values) {
		this.#lastNode.next = this.#spreadNodes(values)
	}

	prepend(...values) {
		const tmpList = { ...this }
		this.value = values[0]
		this.next = this.#spreadNodes(values.slice(1), tmpList ) 
	}

	get size() {
		let listSize = (list) => {
			if (!list.next) return 1 
			return 1 + listSize(list.next)
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
		if (typeof index === "number" && index === 0) return this.value
		const previousNode = this.#previousNode(index, this)
		return previousNode.next ? previousNode.next.value : undefined
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

	get toString() {
		const composeString = list => {
			if (!list.next) return `( ${list.value} ) -> null`
			return `( ${list.value} ) -> ${composeString(list.next)}`
		}
		return composeString(this)
	}

	insertAt(index, ...values) {
		if (!values.length) throw new Error('Must introduce at least one value')
		if (!Math.round(Math.abs(index))) {
			this.prepend(...values)
			return
		}
		const insertionPoint = this.#previousNode(index, this) 
		insertionPoint.next = this.#spreadNodes(values, insertionPoint.next)
	}

	removeAt(index = 0) {
		if (!index) {
			this.value = this.next ? this.next.value : undefined
			this.next = this.next ? this.next.next : null
			return
		}
		const removePoint = this.#previousNode(index, this)
		removePoint.next = removePoint.next ? removePoint.next.next : null
	}
}

const list = new LinkedList(0,1,2,3,4,5)
console.log(list.size)
