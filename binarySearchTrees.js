class bstNode {
	constructor(value = undefined, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}


const bsTreeBuilder = list => {
	if (!list.length) return []
	const midPoint = Math.floor((list.length - 1) / 2)
	const root = list[midPoint]
	const left = list.slice(0, midPoint)
	const right = list.slice(midPoint + 1)

	return [root, ...bsTreeBuilder(left), ...bsTreeBuilder(right)]



}

console.log(bsTreeBuilder([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(bsTreeBuilder([1, 2, 3, 4, 5, 6, 7]))
console.log(bsTreeBuilder([1, 2, 3, 4]))
