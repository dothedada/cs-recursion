class node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
const first = new node('pato')
console.log(first)
first.next = new node('carajo')

first.next.next = new node('nanananananan')

console.log(JSON.stringify(first, null, 2))
