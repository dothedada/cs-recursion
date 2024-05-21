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
const miArr = arrCreator(10000)

// console.log(mergeSort(miArr))
console.log(miArr)
console.time('quick')
quickSort(miArr)
console.timeEnd('quick')
console.time('merge')
mergeSort(miArr)
console.timeEnd('merge')
