class Node {
    constructor(value = undefined, prev = null) {
        this.value = value
        this.prev = prev
    }
}

class Stack {
    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item) {
        this.length++

        if (!this.head) {
            this.head = new Node(item)
            return
        }

        this.head = new Node(item, this.head)
    }

    pop() {
        if (!this.head) return undefined

        const temp = this.head
        this.head = this.head.prev
        this.length--

        return temp.value
    }

    peek() {
        return this.head?.value
    }
}

const mmm = new Stack()
mmm.push('a')
console.log(mmm)
mmm.pop()
mmm.pop()
mmm.pop()
console.log(mmm)
