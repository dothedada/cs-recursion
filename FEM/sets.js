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
