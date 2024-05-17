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
}

const list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
console.log(JSON.stringify(list,null, 2))
