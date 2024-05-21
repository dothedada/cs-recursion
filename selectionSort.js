// Iteración
const getHigherValueIndex = arr => {
	let index = 0
	let pointer = index + 1

	while (pointer < arr.length) {
		if (arr[index] <= arr[pointer]) index = pointer
		pointer++
	}

	return index
}

const seleccionSortIterative = arr => {
	const tmpArr = [...arr]
	const sorted = []

	while (tmpArr.length) {
		sorted.push(...tmpArr.splice(getHigherValueIndex(tmpArr), 1))
	}
	return sorted
}

// Recursión
const selectionSortRecursion = (arr) => {
	if (arr.length === 1) return arr

	// create a copy of the array, the container of the sorted array and indexes
	const tmpArr = [...arr]
	let index = 0

	// get the index of the higher value
	for (let i = 0; i < tmpArr.length; i++) {
		if (tmpArr[index] >= tmpArr[i]) index = i
	}

	return [...tmpArr.splice(index, 1), ...selectionSortRecursion(tmpArr)]
}
