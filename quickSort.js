const quickSort = list => {
	if (list.length <= 1) return list

	// create a tmp copy of the array, select a pivot and make the left and right containing arrays 
	const tmpArr = [...list]
	const pivot = tmpArr.pop()
	const left = []
	const right = []

	// Loop over the temp array and put the elements in the containing arrays
	while (tmpArr.length) {
		const current = tmpArr.pop()
		if (current <= pivot) {
			left.push(current)
		} else {
			right.push(current)
		}
	}

	// merge the sorted arrays, could use destructuring arg, but concat seems more performant
	return quickSort(left).concat(pivot, ...quickSort(right))
}
