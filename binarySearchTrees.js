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

	levelOrder(callback = value => value) {
		const results = []
		const queueNodes = [this]

		while (queueNodes.length) {
			const currentNode = queueNodes.shift()
			const newNodeValue = callback(currentNode.value)
			results.push(newNodeValue)
			currentNode.value = newNodeValue

			if (currentNode.left) queueNodes.push(currentNode.left)
			if (currentNode.right) queueNodes.push(currentNode.right)
		}

		return results
	}

	levelOrderRecursion(callback = value => value) {
		const getValues = (queueNodes = [this], results = []) => {
			if (!queueNodes.length) return results

			const queue = queueNodes
			const currentNode = queue.shift()
			const resultArr = results
			currentNode.value = callback(currentNode.value)
			resultArr.push(currentNode.value)
			if (currentNode.left) queue.push(currentNode.left)
			if (currentNode.right) queue.push(currentNode.right)

			return getValues(queue, resultArr)
		}
		return getValues()
	}

	inOrder(callback = value => value) {
		const getValues = (node = this) => {
			if (!node) return []
			node.value = callback(node.value)
			return [...getValues(node.left), node.value, ...getValues(node.right)]
		}

		return getValues()
	}

	preOrder(callback = value => value) {
		const getValues = (node = this) => {
			if (!node) return []
			node.value = callback(node.value)
			return [node.value, ...getValues(node.left), ...getValues(node.right)]
		}

		return getValues()
	}

	postOrder(callback = value => value) {
		const getValues = (node = this) => {
			if (!node) return []
			node.value = callback(node.value)
			return [...getValues(node.left), ...getValues(node.right), node.value]
		}

		return getValues()
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
const pato = new BSTtree([1, 7, 4, 8, 9, 4, 3, 5, 7])
// const pato = new BSTtree([1, 324])
// prettyPrint(pato)
// pato.insert(6)
// console.log(pato.deleteItem(5))
// console.log(pato.deleteItem(4))
const squareOf = value => value * value
const halfOf = value => value / 2
console.log(pato.inOrder())
console.log(pato.preOrder())
console.log(pato.postOrder())
// console.log(pato.find(4))
prettyPrint(pato)


