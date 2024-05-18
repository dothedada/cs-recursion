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

	head() {
		return this.value
	}

	get tail() {
		let tmpNode = this
		while (tmpNode.next) tmpNode = tmpNode.next
		return tmpNode
	}


}

// const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(JSON.stringify(list, null, 2))
// console.log(list.value, list.next)
// list.prepend(0)
// console.log(JSON.stringify(list, null, 2))
const mini = new LinkedList('a', 1,2,5,4,56,3)
mini.append('x','b','c')
console.log(JSON.stringify(mini, null, 2))
