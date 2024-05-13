// encontrar la mitad
// Si el numero es la mitad, retornar la posicion, o el objeto?
// evaluar si el numero es mayor
// descartar la mitad inferior y busca en la mitad restante
// si el numero es menor 
// descartar la mitad mayor y busca en la mitad restante
// si no lo encuentra retorna null

const binarySearch = (arr, element, index = 0) => {
	const midPoint = Math.floor(arr.length / 2)
	if (arr[midPoint] > element) return binarySearch(arr.slice(0, midPoint), element, index)
	if (arr[midPoint] < element) return binarySearch(arr.slice(midPoint), element, midPoint + index)
	if (arr[midPoint] === element) return `índice ${index + midPoint}, ${element}.`
	return `No se encontró ${element}`
}

const binarySearchIterative = (arr, element) => {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		let midPoint = Math.round((low + high) / 2)
		let guess = arr[midPoint]

		if (guess === element) return midPoint
		if (guess > element) {
			high = midPoint - 1
		} else {
			low = midPoint + 1
		}
	}
	return `No se encontró ${element}`
}

const arrCreator = itemsAmount => {
	const arr = []
	for (let i = 0; i < itemsAmount; i++) arr.push(i * i)
	// arr.sort(() => Math.random()*2-1)
	return arr
}

const miArr = arrCreator(100000)
console.log(miArr)
console.time('recursive')
console.log(binarySearch(miArr, 36))
console.log(binarySearch(miArr, 2401))
console.log(binarySearch(miArr, 8649))
console.timeEnd('recursive')
console.time('iterative')
console.log('iterative ', binarySearchIterative(miArr, 36))
console.log('iterative ', binarySearchIterative(miArr, 2401))
console.log('iterative ', binarySearchIterative(miArr, 8649))
console.timeEnd('iterative')
