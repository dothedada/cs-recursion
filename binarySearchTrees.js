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
		return [null,null]
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

		const [parentNode, childNode] = [...parentChild]
		if (childNode.left && childNode.right) {
			let substitutionValue
			let currentNode = childNode.right
			while (currentNode) {
				substitutionValue = currentNode.value
				currentNode = currentNode.left
			}
			this.deleteItem(substitutionValue)
			childNode.value = substitutionValue
		} else {
			const newNode = childNode.left ? childNode.left : childNode.right
			if (parentNode.value < childNode.value) parentNode.right = newNode
			if (parentNode.value > childNode.value) parentNode.left = newNode
		}
	}

	find(value) {
		const [, childNode] = this.#getParentChild(value, this)
		if (!childNode) return null
		return childNode
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

	height(node) {
		const [, childNode] = this.#getParentChild(node, this)
		if (!childNode) return null
		const getHeight = (node = childNode) => {
			if (!node) return 1
			let left = 0
			let right = 0
			if (node.left) left = 1 + getHeight(node.left)
			if (node.right) right = 1 + getHeight(node.right)

			return left > right ? left : right
		}
		return getHeight()

	}

	deep(node) {
		const getNodeDeep = (current = this) => {
			if (!current) return undefined
			if (current.value === node) return 0 
			if (current.value < node) return 1 + getNodeDeep(current.right)
			if (current.value > node) return 1 + getNodeDeep(current.left)
		}
		return getNodeDeep() || null

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

const createArr = lngt => {
	const tmpArr = []
	for (let i = 0; i < lngt; i++) {
		tmpArr.push(i)
	}
	tmpArr.sort(() => Math.random()*2 -1)
	return tmpArr
}

const miArr = createArr(22)

const pato = new BSTtree(miArr)
// const pato = new BSTtree([1, 324])
// prettyPrint(pato)
// pato.insert(6)
// console.log(pato.deleteItem(5))
// console.log(pato.deleteItem(4))
const squareOf = value => value * value
const halfOf = value => value / 2
console.log(pato.deep(31))
console.log(pato.height(31))

// console.log(pato.find(4))
prettyPrint(pato)


