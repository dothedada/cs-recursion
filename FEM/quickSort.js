const quickSort = (array) => {
    if (!array.length) return [];
    const pivot = Math.floor(Math.random() * array.length);
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivot) continue;
        if (array[i] <= array[pivot]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), array[pivot], ...quickSort(right)];
};

const arr = [9,3,7,4,69,420,42]

console.log(quickSort(arr), arr)
