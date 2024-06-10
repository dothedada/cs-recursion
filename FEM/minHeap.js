class MinHeap {
    constructor() {
        this.data = [];
        this.length = 0;
        //
    }

    insert(value) {
        this.data[this.length] = value
        this.#heapifyUp(this.length)
        this.length++
    }

    pop() {
        if (!this.length) return undefined
        this.length--

        const value = this.data[0]

        if (this.length === 0) {
            this.data = []
            return value
        }

        this.data[0] = this.data[this.length]
        this.#heapifyDown(0)

        return value
    }

    #heapifyDown(index) {
        const leftIndex = this.#leftChild(index);
        const rightIndex = this.#rightChild(index);

        if (index >= this.length || leftIndex >= this.length) return;

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const value = this.data[index];

        if (leftValue > rightValue && value > rightValue) {
            this.data[index] = rightValue;
            this.data[rightIndex] = value;

            this.#heapifyDown(rightIndex);
        } else if (leftValue < rightValue && leftValue < value) {
            this.data[index] = leftValue;
            this.data[leftIndex] = value;

            this.#heapifyDown(leftIndex);
        }
    }

    #heapifyUp(index) {
        if (index === 0) return;

        const parent = this.#parent(index);
        const parentValue = this.data[parent];
        const value = this.data[index];

        if (parentValue > value) {
            this.data[parent] = value;
            this.data[index] = parentValue;
            this.#heapifyUp(parent);
        }
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #leftChild(index) {
        return index * 2 + 1;
    }

    #rightChild(index) {
        return index * 2 + 2;
    }
}

const heap = new MinHeap()
heap.insert(3)
console.log(heap.data)
heap.insert(7)
console.log(heap.data)
heap.insert(2)
console.log(heap.data)
heap.insert(1)
console.log(heap.data)
