const grupoA = new Set(['a', 'b', 'c', 'd'])
const grupoB = new Set(['b', 'd', 'e', 'f'])

const union = (setA, setB) => new Set([...setA, ...setB])

const instersect = (setA, setB) => {
    return new Set([...setA].filter(element => setB.has(element)))
}

const symetricDifference = (setA, setB) => {
    const differenceA = new Set([...setA].filter(element => !setB.has(element)))
    const differenceB = new Set([...setB].filter(element => !setA.has(element)))
    return new Set([...differenceA, ...differenceB])
}
console.log(union(grupoA, grupoB))
console.log(instersect(grupoA, grupoB))
console.log(symetricDifference(grupoA, grupoB))
