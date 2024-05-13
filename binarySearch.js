const binarySearch = (arr, item, index = 0) => {
	const mid = Math.floor(arr.length / 2)
	if (arr[mid] === item) return `índice ${index + mid}, ${item}.`
	if (arr[mid] > item) return binarySearch(arr.slice(0, mid), item, index)
	if (arr[mid] < item) return binarySearch(arr.slice(mid), item, mid + index)
	return `No se encontró ${item}`
}

// two pointer solution
const binarySearchIterative = (arr, element) => {
	let low = 0 // establece la base
	let high = arr.length - 1 // establece el techo

	while (low <= high) { // mientas lo inferior siga estando en debajo
		let midPoint = Math.round((low + high) / 2) // encontrar la mitad
		let guess = arr[midPoint] // obtener el valor de la mitad

		if (guess === element) return midPoint // si es igual, retornar el indice
		if (guess > element) {
			high = midPoint - 1 // si es menor, bajar el techo a la mitad
		} else { 
			// la adicion o sustracción del 1 es para garantizar que se sobrepasen 
			// en caso de no encontrarse el valor buscado
			low = midPoint + 1 // si es mayor, subir la base
		}
	}
	return `No se encontró ${element}`
}

// test array
const arrCreator = itemsAmount => {
	const arr = []
	for (let i = 0; i < itemsAmount; i++) arr.push(i * i)
	return arr
}
const miArr = arrCreator(100000)

console.time('recursive')
console.log(binarySearch(miArr, 36))
console.timeEnd('recursive')
console.time('iterative')
console.log('iterative ', binarySearchIterative(miArr, 36))
console.timeEnd('iterative')
