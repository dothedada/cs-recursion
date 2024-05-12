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
// with the creation of a variable that contains the fibonacci secuense before 
// the last number to calculate, besides helping with the readability 
// of de code, it only has to calculate the recursive function once, 
// this tini change had a surprinsing performance boost... 
// below num = 1000 the recursive function tends to be faster than the
// iterative counterpart
// (node v. 20 in old macbook pro late 2013)
const fiboRecursion = num => {
	if (num < 3) return [0,1]
	const secuence = fiboRecursion(num - 1)
	return secuence.concat(secuence[num - 2] + secuence[num -3])
}

console.log('Iterative', fiboIterative(1000)) //8.097ms
console.log('Recursionfast', fiboRecursion(1000)) //6.382ms
