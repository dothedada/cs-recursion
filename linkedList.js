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

	append(value) {
		if (!this.next) this.next = node(value)
	}
}

const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
const mini = new LinkedList('a')
mini.append('b')
console.log(mini)
console.log(JSON.stringify(list, null, 2))
