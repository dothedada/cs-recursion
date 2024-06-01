const bubbleSort = (arr) => {
    let sorted = []
    let pointer = 0

    while (arr.length) {
        console.log(arr.length)
        if (arr[pointer] < arr[pointer + 1]) {
            ;[arr[pointer], arr[pointer + 1]] = [arr[pointer + 1], arr[pointer]]
        }
        pointer++
        if (pointer === arr.length) {
            pointer = 0
            sorted.push(arr.pop())
        }
    }

    return sorted
}

const bubbleSort2 = arr => {
    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            console.log(arr[j])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

const bubbleSortRecursion = arr => {
    if (!arr.length) return []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }

    return [arr.pop(), ...bubbleSortRecursion(arr)]
}

console.log(bubbleSort2([1, 3, 4, 5, 2, 3, 1, 4]))
// console.log(bubbleSortRecursion([1, 3, 4, 5, 2, 3, 1, 4]))
