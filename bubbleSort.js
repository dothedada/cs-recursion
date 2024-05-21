const bubbleSort = list => {
	if (list.length === 1) return list
	let left = 0
	let rigth = 1
	for (let i = 0; i < list.length -1; i++) {
		if (list[i] <= list[i+1]) {
			[list[i], list[i+1]] = [list[i+1], list[i]];
		}
	}
	// while (rigth < list.length) {
	// 	if (list[rigth] >= list[left]) {
	// 		[list[left], list[rigth]] = [list[rigth], list[left]];
	// 	}
	// 	left++
	// 	rigth++
	// }
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
