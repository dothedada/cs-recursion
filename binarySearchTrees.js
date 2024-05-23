import { quickSort } from "./quickSort.js"

class BSTnode {
	constructor(value = undefined, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}

class BSTtree {
	constructor(arr) {
		this.root = this.buildTree(this.#clearInput(arr))
	}

	#clearInput(arr) {
		return quickSort(arr.filter((value, i) => i === arr.indexOf(value)))
	}

	buildTree(arr) {
		if (!arr.length) return
		const mid = Math.floor((arr.length - 1) / 2)
		const root = arr[mid]
		const left = arr.slice(0, mid)
		const right = arr.slice(mid + 1)

		return new BSTnode(root, this.buildTree(left), this.buildTree(right))
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
prettyPrint(pato.root)
console.log(pato.root)


