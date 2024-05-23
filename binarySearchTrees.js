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

	#clearInput (arr) {
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

const removeDuplicates = arr => {
	return arr.filter((value, i) => i === arr.indexOf(value))
}

const pato = new BSTtree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// const pato = new BSTtree([1, 324])
console.log(pato.root)


const bsTreeBuilder = list => {
	if (!list.length) return []
	const midPoint = Math.floor((list.length - 1) / 2)
	const root = list[midPoint]
	const left = list.slice(0, midPoint)
	const right = list.slice(midPoint + 1)

	return [root, ...bsTreeBuilder(left), ...bsTreeBuilder(right)]



}
