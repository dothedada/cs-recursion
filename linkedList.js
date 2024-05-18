class Node {
	constructor(value = null, next = null) {
		this.value = value
		this.next = next
	}
}

class LinkedList extends Node {
	constructor(head, ...values) {
		super(head)
		this.append(...values)
		// values.forEach(value => this.append(value))
	}

	append(...values) {
		const tmpValues = values
		let tmpNodes

		while (tmpValues.length) {
			tmpNodes = new Node(tmpValues.pop(), tmpNodes)
		}

		this.tail.next = tmpNodes
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
		let tmpNode = this
		
		while (tmpNode.next) tmpNode = tmpNode.next
		
		return tmpNode
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
		
		return tmpNode
	}
}

// const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(JSON.stringify(list, null, 2))
// console.log(list.value, list.next)
// list.prepend(0)
// console.log(JSON.stringify(list, null, 2))
const mini = new LinkedList('a', 'b', 'c')
// console.log('size:', mini.size, 'head:', mini.head, 'tail:', mini.tail)
console.log(mini.at(-3))
mini.prepend('z')
console.log(mini.at(3))
// console.log(mini)
// console.log(JSON.stringify(mini, null, 2))

