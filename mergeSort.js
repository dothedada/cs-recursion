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

const arr = [3, 2, 14, 13, 8, 5, 1, 0]
const arr2 = [105, 79, 100, 110, 12, 23498, 123]
console.log(mergeSort(arr))
console.log(mergeSort(arr2))
