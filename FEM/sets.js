class MySet extends Set {
    union(setB) {
        return new MySet([...this, ...setB]);
    }

    interseccion(setB) {
        return new MySet([...this].filter((e) => setB.has(e)));
    }

    difference(setB) {
        return new MySet([...this].filter((e) => !setB.has(e)));
    }

    symetricDifference(setB) {
        return new MySet(
            [...this, ...setB].filter((e) => !this.interseccion(setB).has(e)),
        );
    }

    isSubset(setB){
        const set = [...this]

        while (set.length) {
            if (!setB.has(set.pop())) return false
        }
        return true
    }

    isSuperset(setB){
        const set = [...setB]
        while (set.length) {
            if (!this.has(set.pop())) return false
        }
        return true
    }
}
