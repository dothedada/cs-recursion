// encuentra el valor mas alto
//     toma el valor actual y lo compara con el siguiente
//     se queda con el mas alto
//     y lo compara con el siguiente
//     hasta llegar al final del array
//
// lo inserta en el nuevo array
// lo elimina del array base
//
// repite la operacieon hasta que el length del array base es 0

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

const arrGen = length => {
	const nuArr = []
	for (let i = 0; i< length ; i++) {
		nuArr.push(Math.round(Math.random()*length))
	}
	return nuArr
}


// const miArr = [1, 32, 53, 12, 45, 67, 53, 234, 6, 2, 6789, 3, 24, 9, 12]
const miArr = arrGen(1000)
console.time('iterative')
console.log(seleccionSortIterative(miArr))
console.timeEnd('iterative')
console.time('recursion')
console.log(selectionSortRecursion(miArr))
console.timeEnd('recursion')
console.time('sort method')
console.log(miArr.sort((a,b) => b-a))
console.timeEnd('sort method')
