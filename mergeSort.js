const mergeSort = list => {
	if (list.length <= 1) return list

	// Divide the array and introduce the recursive function
	const midPoint = Math.ceil(list.length / 2)
	const left = mergeSort(list.slice(0, midPoint))
	const right = mergeSort(list.slice(midPoint))

	// loop over the parts values to create the new array sorted
	const sortedArray = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sortedArray.push(left.shift())
		} else {
			sortedArray.push(right.shift())
		}
	}
	// and push any remaining value in the left o rigth array
	sortedArray.push(...left, ...right)

	return sortedArray
}

// testing array generator
const arrCreator = itemsAmount => {
	const arr = []
	for (let i = 0; i < itemsAmount; i++) arr.push(i)
	arr.sort(() => Math.random()*2-1)
	return arr
}
const miArr = arrCreator(100)

console.log(mergeSort(miArr))
