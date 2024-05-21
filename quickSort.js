const quickSort = list => {
	if (list.length <= 1) return list

	// create a tmp copy of the array, select a pivot and make the left and right containing arrays 
	const pivotIndex = Math.floor(Math.random() * list.length)
	const pivot = list[pivotIndex]
	const left = []
	const right = []

	// Loop over the temp array and put the elements in the containing arrays
	for (let i = 0; i < list.length; i++) {
		if (i === pivotIndex) continue
		if (list[i] <= pivot) {
			left.push(list[i])
		} else {
			right.push(list[i])
		}
	}

	// merge the sorted arrays
	return quickSort(left).concat(pivot, ...quickSort(right))
}
