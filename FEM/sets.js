const grupoA = new Set(['a', 'b', 'c', 'd']);
const grupoB = new Set(['b', 'd', 'e', 'f']);

const union = (setA, setB) => new Set([...setA, ...setB]);

const instersect = (setA, setB) => {
    return new Set([...setA].filter((element) => setB.has(element)));
};

const difference = (setA, setB) => {
    return new Set([...setA].filter((element) => !setB.has(element)));
};

const symetricDifference = (setA, setB) => {
    return new Set([
        ...[...setA]
            .filter((element) => !setB.has(element))
            .concat([...setB].filter((element) => !setA.has(element))),
    ]);
};

const symetricDifferenceB = (setA, setB) => {
    const union = new Set([...setA, ...setB])
    const intersection = new Set([...setA].filter(e => setB.has(e)))
    return new Set([...union].filter(e => !intersection.has(e)))
}


console.time('bla')
console.log(union(grupoA, grupoB));
console.log(instersect(grupoA, grupoB));
console.timeEnd('bla')
console.time('destruct')
console.log(symetricDifference(grupoA, grupoB));
console.timeEnd('destruct')
console.time('group')
console.log(symetricDifferenceB(grupoA, grupoB));
console.timeEnd('group')
