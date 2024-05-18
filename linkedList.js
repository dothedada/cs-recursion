class Node {
	constructor(value = null, next = null) {
		this.value = value
		this.next = next
	}
}

class LinkedList extends Node {
	constructor(head, ...values) {
		super(head)
		values.forEach(value => this.append(value))
	}

	get head() {
		return this.value
	}

	tail() {
		let tmpNode = this
		while (tmpNode.next) tmpNode = tmpNode.next
		return tmpNode
	}
	//
	// get size() {
	// 	let tmpNode = this
	// 	let listSize = 0
	// 	while (tmpNode.next) {
	// 		listSize += 1
	// 		tmpNode = tmpNode.next
	// 	}
	// 	return listSize + 1
	// }
	//
	append(value) {

		this.tail().next = new Node(value)
	}
	//
	prepend(value) {
		this.next = { ...this }
		this.value = value
	}
}

const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
console.log(JSON.stringify(list, null, 2))
console.log(list.value, list.next)
list.prepend(0)
console.log(JSON.stringify(list, null, 2))
const mini = new LinkedList('a')
