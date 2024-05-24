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
		const tree = this.buildTree(this.#clearInput(arr))
		this.value = tree.value
		this.left = tree.left
		this.right = tree.right
	}

	#clearInput(arr) {
		return quickSort(arr.filter((value, i) => i === arr.indexOf(value)))
	}

	#getParent(value, arr) {
		if (arr.left.value === value || arr.right.value === value) return arr
		if (arr.value < value) return this.#getParent(value, arr.right)
		if (arr.value > value) return this.#getParent(value, arr.left)
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
		return this.#getParent(value, this)

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
prettyPrint(pato)
console.log(pato.deleteItem(1))


