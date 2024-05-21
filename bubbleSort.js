const bubbleSort = list => {
	if (list.length === 1) return list

	let left = 0
	let rigth = 1

	while (rigth < list.length) {
		if (list[rigth] >= list[left]) {
			[list[left], list[rigth]] = [list[rigth], list[left]];
		}
		left++
		rigth++
	}

	return [list.pop(), ...bubbleSort(list)]
}
