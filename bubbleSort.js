const bubbleSort = arr => {
	const list = [...arr]
	if (list.length === 1) return list

	for (let i = 0; i < list.length -1; i++) {
		if (list[i] <= list[i+1]) {
			[list[i], list[i+1]] = [list[i+1], list[i]];
		}
	}
	return [list.pop(), ...bubbleSort(list)]
}

const miArr = (() => {
	const arr = []
	for (let i = 0; i <100 ; i++){
		arr.push(Math.round(Math.random()* 100))
	}
	return arr

})()
console.log(bubbleSort(miArr))
