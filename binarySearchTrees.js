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
		return [null, null]
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
		if (!childNode) throw new Error(`The node value ${value} don't exist`)
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
		const getValues = (node) => {
			if (!node) return []
			node.value = callback(node.value)
			return [...getValues(node.left), node.value, ...getValues(node.right)]
		}

		return getValues(this)
	}

	preOrder(callback = value => value) {
		const getValues = (node) => {
			if (!node) return []
			node.value = callback(node.value)
			return [node.value, ...getValues(node.left), ...getValues(node.right)]
		}

		return getValues(this)
	}

	postOrder(callback = value => value) {
		const getValues = (node) => {
			if (!node) return []
			node.value = callback(node.value)
			return [...getValues(node.left), ...getValues(node.right), node.value]
		}

		return getValues(this)
	}

	height(node) {
		const getHeight = (nodeHeight) => {
			if (!nodeHeight) return 1
			const left = nodeHeight.left ? 1 + getHeight(nodeHeight.left) : 0
			const right = nodeHeight.right ? 1 + getHeight(nodeHeight.right) : 0

			return Math.max(left, right)
		}
		return getHeight(this.find(node))

	}

	deep(node) {
		const getNodeDeep = (current) => {
			if (!current) return undefined
			if (current.value === node) return 0
			if (current.value < node) return 1 + getNodeDeep(current.right)
			if (current.value > node) return 1 + getNodeDeep(current.left)
		}
		return getNodeDeep(this) || null
	}

	isBalanced() {
		const checkBalance = (node = this) => {
			if (!node) return 0
			const left = node.left ? checkBalance(node.left) : 0
			const right = node.right ? checkBalance(node.right) : 0

			if (Math.abs(left - right) > 1
				|| left === false 
				|| right === false) return false

			return 1 + Math.max(left,right)
		}
		return checkBalance(this)
	}

	rebalance() {
		const treeValues = this.inOrder()
		const newTree = this.buildTree(treeValues)
		this.value = newTree.value
		this.left = newTree.left
		this.right = newTree.right
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
		tmpArr.push(i * 2)
	}
	tmpArr.sort(() => Math.random() * 2 - 1)
	return tmpArr
}

const miArr = createArr(100)
const pato = new BSTtree(miArr)
prettyPrint(pato)
prettyPrint(pato)


