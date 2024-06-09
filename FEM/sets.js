const union = (setA, setB) => new Set([...setA, ...setB]);

const intersection = (setA, setB) => {
    return new Set([...setA].filter((e) => setB.has(e)));
};

const difference = (setA, setB) => {
    return new Set([...setA].filter((e) => !setB.has(e)));
};

const symetricDifference = (setA, setB) => {
    const union = new Set([...setA, ...setB]);
    const intersection = new Set([...setA].filter((e) => setB.has(e)));
    return new Set([...union].filter((e) => !intersection.has(e)));
};

const isSubSet = (setA, ofSetB) => {
    const set = [...setA]
    while (set.length) {
        if(!ofSetB.has(set.pop())) return false
    }
    return true
};

const isSuperSet = (setA, ofSetB) => {
    const ofSet = [...ofSetB]
    while (ofSet.length) {
        if(!setA.has(ofSet.pop())) return false
    }
    return true
};

// FUNCIONA, pero no es práctica recomendada, 
// es mejor crear una clase derivada
// 
// Set.prototype.intersection = function (setB) {
//     return new Set([...this].filter(e => setB.has(e)))
// }

class MySet extends Set {
    union (setB) {
        return new MySet([...this, ...setB])
    } 

    interseccion (setB) {
        return new MySet([...this].filter(e => setB.has(e)))
    }
}

const setA = new MySet([1,2,3,4,5])
const setB = new Set([2,4,6,8])

// setA.intersection(setB)
console.log('Interseccion: ', setA.interseccion(setB))
console.log('Union: ', setA.union(setB))
console.log('Set a: ', setA, 'Set b: ', setB)
