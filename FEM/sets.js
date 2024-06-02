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
    const union = new Set([...setA, ...setB]);
    const intersection = new Set([...setA].filter((e) => setB.has(e)));
    return new Set([...union].filter((e) => !intersection.has(e)));
};

const grupoC = new Set([2, 4, 6, 8, 10, 12, 14]);
const grupoD = new Set([4, 8, 12]);

const isSubSet = (setA, ofSetB) => {
    let isSubset = true;
    setA.forEach((e) => {
        if (!ofSetB.has(e)) isSubset = false;
    });
    return isSubset
};

console.log(union(grupoA, grupoB));
console.log(instersect(grupoA, grupoB));
console.log(symetricDifference(grupoA, grupoB));
console.log(symetricDifferenceB(grupoA, grupoB));

console.log(isSubSet(grupoC, grupoD))
console.log(isSubSet(grupoD, grupoC))
