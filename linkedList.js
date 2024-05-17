const node = (value, next = null) => {
	return { value, next }
}

class LinkedList {
	constructor(...values) {
		const tmpValues = values
		let links = null

		while (tmpValues.length > 1) {
			links = node(tmpValues.pop(), links)
		}

		this.value = tmpValues.pop()
		this.next = links
	}
	head() {
		this.next = null
		return this
	}
	tail() {
		let tmpNode = this
		while (tmpNode.next) tmpNode = tmpNode.next
		return tmpNode
	}
	append(value) {
	
		// if (!this.next) {
		// 	this.next = node(value)
		// } else {
		// 	let next = this
		// 	while (next.next) {
		// 		next = next.next
		// 	}
		// 	next = node(value)
		// }

	}
}

const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
const mini = new LinkedList('a')
mini.append('b')
mini.append('c')
console.log(JSON.stringify(mini, null, 2))
console.log(JSON.stringify(mini.tail(), null, 2))
console.log(JSON.stringify(list.head(), null, 2))
// console.log(JSON.stringify(list, null, 2))
