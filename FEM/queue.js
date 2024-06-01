class Node {
    constructor(value = undefined, next = null) {
        this.value = value
        this.next = next
    }
}
class Queue {

    constructor() {
        this.head = undefined
        this.tail = undefined
        this.lenght = 0
    }

    enqueue(item) {
        const node = new Node(item)

        this.lenght++
        if (!this.tail) {
            this.tail = node
            this.head = this.tail
            return
        }

        this.tail.next = node
        this.tail = node
    }

    dequeue() {
        if (!this.head) return undefined

        this.lenght--

        const head = this.head
        this.head = this.head.next

        return head.value

    }

    peek() {
        return this.head?.value
    }
}

const pato = new Queue()

pato.enqueue('a')
pato.enqueue('b')
pato.enqueue('c')
pato.enqueue('d')

console.log(pato)

pato.dequeue()
pato.enqueue('z')
console.log(pato.peek())
pato.dequeue()
pato.dequeue()
pato.dequeue()

console.log(pato)
