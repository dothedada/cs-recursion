import { quickSort } from "./quickSort.js"

class BSTnode {
	constructor(value = undefined, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}

class BSTtree extends BSTnode {
	constructor(arr) {
		super()
		const tree = this.buildTree(this.#sortAndClean(arr))
		this.value = tree.value
		this.left = tree.left
		this.right = tree.right
	}

	#sortAndClean(arr) {
		return quickSort(arr.filter((value, i) => i === arr.indexOf(value)))
	}

	#getParentChild(value, arr) {
		if (arr?.value === value) return [undefined, arr]
		if (arr?.left?.value === value) return [arr, arr.left]
		if (arr?.right?.value === value) return [arr, arr.right]
		if (arr?.value < value) return this.#getParentChild(value, arr.right)
		if (arr?.value > value) return this.#getParentChild(value, arr.left)
		return null
	}

	buildTree(arr) {
		if (!arr.length) return
		const mid = Math.floor((arr.length - 1) / 2)
		const root = arr[mid]
		const left = arr.slice(0, mid)
		const right = arr.slice(mid + 1)

		return new BSTnode(root, this.buildTree(left), this.buildTree(right))
	}

	insert(value) {
		const findParent = (arr) => {
			if (value === arr.value) return
			if (value < arr.value)
				return !arr.left ? arr.left = new BSTnode(value) : findParent(arr.left)
			if (value > arr.value)
				return !arr.right ? arr.right = new BSTnode(value) : findParent(arr.right)
		}
		findParent(this)
	}

	deleteItem(value) {
		const parentChild = this.#getParentChild(value, this)
		if (!parentChild) throw new Error(`The node value ${value} don't exist`)

		const [parent, child] = [...parentChild]
		if (child.left && child.right) {
			let substitutionValue
			let currentNode = child.right
			while (currentNode) {
				substitutionValue = currentNode.value
				currentNode = currentNode.left
			}
			this.deleteItem(substitutionValue)
			child.value = substitutionValue
		} else {
			const substitutionNode = child.left ? child.left : child.right
			if (parent.value < child.value) parent.right = substitutionNode
			if (parent.value > child.value) parent.left = substitutionNode
		}
	}

	find(value) {
		const [, child] = this.#getParentChild(value, this)
		if (!child) return null
		return child
	}

	levelOrder(callback) {
		let currentNode = this
		const queueNodes = []
		const results = []

		while (currentNode) {
			results.push(callback(currentNode.value))
			currentNode.value = callback(currentNode.value)
			if (currentNode.left) queueNodes.push(currentNode.left)
			if (currentNode.right) queueNodes.push(currentNode.right)
			currentNode = queueNodes.shift()
		}

		return results
	}

	levelOrderRecursion(callback) {
		const results = []

		const newNodeValue = (arr) => {
			if (!arr) return
			results.push(callback(arr.value))
			if (arr.left) newNodeValue(arr.left)
			if (arr.right) newNodeValue(arr.right)
		}

		newNodeValue(this)
		return results
	}

}

const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};
const pato = new BSTtree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// const pato = new BSTtree([1, 324])
// prettyPrint(pato)
// pato.insert(6)
// console.log(pato.deleteItem(5))
// console.log(pato.deleteItem(4))
const squareOf = value => value * value
const halfOf = value => value / 2
console.log(pato.levelOrder(squareOf))
console.log(pato.levelOrderRecursion(halfOf))
// console.log(pato.find(4))
prettyPrint(pato)


