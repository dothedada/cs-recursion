class Node {
	constructor(value = null, next = null) {
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

	// pop() {
	// 	let beforeLast = this
	// 	if (!beforeLast.next) beforeLast.value = null
	// 	console.log('blablabla', beforeLast.value, beforeLast.next)
	// 	while (beforeLast.next.next) {
	// 		beforeLast = beforeLast.next
	// 	}
	// 	beforeLast.next = null
	// }
}

const list = new LinkedList('a', 'b', 'c')
console.log(JSON.stringify(list, null, 2))
list.prepend('z')
list.prepend('y')
list.prepend('x')
console.log(list.at(3))
console.log(list.head)
// list.pop()
console.log(JSON.stringify(list, null, 2))
