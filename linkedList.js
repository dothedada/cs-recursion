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
}

const list = new LinkedList('a', 'b', 'c')
list.prepend('z')
list.prepend('y')
list.prepend('x')
const nano = new LinkedList(1,2,3,4)
console.log(nano.contains('a'))
console.log(nano.contains(2))
nano.pop()
console.log(nano.contains(4))
list.pop()
// console.log(JSON.stringify(list, null, 2))
