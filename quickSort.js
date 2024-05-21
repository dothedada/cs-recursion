const quickSort = list => {
	if (list.length <= 1) return list
	const tmpArr = [...list]
	const pivot = tmpArr.pop()
	const left = []
	const right = []
	while (tmpArr.length) {
		const current = tmpArr.pop()
		if (current <= pivot) {
			left.push(current)
		} else {
			right.push(current)
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}

const arrCreator = itemsAmount => {
	const arr = []
	for (let i = 0; i < itemsAmount; i++) arr.push(i)
	arr.sort(() => Math.random()*2-1)
	return arr
}
const miArr = arrCreator(100)
const arrangedList = quickSort(miArr)
console.log(miArr)
console.log(arrangedList)
