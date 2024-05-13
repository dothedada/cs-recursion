// Fibonacci iterative
const fiboIterative = num => {
	const secuence = [0, 1]
	if (num > 1) {
		for (let i = 2; i < num; i++) {
			secuence.push(secuence[i - 1] + secuence[i - 2])
		}
	}
	return secuence
}

// Fibonacci recursive
const fiboRecursion = num => {
	if (num < 3) return [0,1]
	const secuence = fiboRecursion(num - 1)
	return secuence.concat(secuence[num - 2] + secuence[num -3])
}

console.log('Iterative', fiboIterative(1000)) //8.097ms
console.log('Recursionfast', fiboRecursion(1000)) //6.382ms
