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
const selectionSortRecursion = (arr, sorted = []) => {
	if (!arr.length) return sorted

	const tmpArr = [...arr]
	const sortedArr = sorted
	let index = 0
	let pointer = index + 1

	while (pointer < tmpArr.length) {
		if (tmpArr[index] <= tmpArr[pointer]) index = pointer
		pointer++
	}
	sortedArr.push(...tmpArr.splice(index, 1))

	return selectionSortRecursion(tmpArr, sortedArr)
}

