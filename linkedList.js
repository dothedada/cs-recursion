class Node {
	constructor(value = undefined, next = null) {
		this.value = value
		this.next = next 
	}
}

class LinkedList extends Node {
	constructor(head, ...values) {
		super(head)
		if (values.length) this.append(...values)
	}

	get lastNode() {
		let tmpNode = this

		while (tmpNode.next) tmpNode = tmpNode.next

		return tmpNode
	}

	append(...values) {
		const tmpValues = values
		let tmpNodes

		while (tmpValues.length) {
			tmpNodes = new Node(tmpValues.pop(), tmpNodes)
		}
		this.lastNode.next = tmpNodes
	}

	prepend(value) {
		this.next = { ...this }
		this.value = value
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
		return this.lastNode.value
	}


	at(index) {
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

		return -1
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
		if (!index || index < 0) {
			this.prepend(value)
			return
		}

		let current = this
		let count = 0

		while (count < index) {
			if (!current.next) break
			current = current.next
			count++
		}

		console.log('index:', index ,'| count:', count, '| values:', current.value, current.next)
		// if (current.next) {
		if (count === index) {
			current.next = new Node(current.value, current.next ? {...current.next} : null)
			current.value = value
		} else {
			current.next = new Node(value)
		}
	}
}

const list = new LinkedList(0, 1, 2, 3, 4)
console.log(list.toString())
list.insertAt(5, 'zzz')
console.log(list.toString())
list.insertAt(6, 'baaa')
console.log(list.toString())
