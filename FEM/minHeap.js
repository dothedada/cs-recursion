class MinHeap {
    constructor() {
        this.data = []; // crea el array
        this.length = 0; // inicializa la longitud
    }

    // Inserta un valor en el heap
    insert(value) {
        this.data[this.length] = value; // inserta el valor al final de array
        this.#heapifyUp(this.length); // cambia su ubicaión si es menor
        this.length++; // actualiza la longitud
    }

    // Extrae el primer valor del heap
    pop() {
        if (!this.length) return undefined; // si no hay datos
        this.length--; // disminuye la longitud

        const value = this.data[0]; // toma el valor de 0

        if (this.length === 0) { // si era el ultimo dato
            this.data = []; // limpia el array
            return value; // retorna el valor
        }

        this.data[0] = this.data.pop(); // pone el ultimo valor al inicio
        // this.data[0] = this.data[this.length]; // Version FEM
        this.#heapifyDown(0); // cambia su ubicacion si es mayor

        return value; // retorna el valor
    }

    // mueve hacia abajo el valor que se encuentra en ese indice 
    // si el valor en el indice de alguno de sus hijos es menor (se invierte si el heap debe ser Max) 
    #heapifyDown(index) {
        const leftIndex = this.#leftChild(index); // calcula el indice del hijo de la izquierda
        const rightIndex = this.#rightChild(index); // calcula el indice del hijo de la derecha

        if (index >= this.length || leftIndex >= this.length) return; // si el indice es mayor que la longitud 

        const leftValue = this.data[leftIndex]; // toma el valor del hijo de la izquierda
        const rightValue = this.data[rightIndex]; // toma el valor del hijo de la derecha
        const value = this.data[index]; // toma el valor del indice actual

        if (leftValue > rightValue && value > rightValue) {
            // Si el valor hijo izquierda es mayor que valor hijo derecha
            // y valor del del inidice actual es mayor que el hijo de la derecha
            this.data[index] = rightValue; // el indice actual toma el valor del hijo derecha
            this.data[rightIndex] = value; // el indice hijo derecha toma el valor actual

            this.#heapifyDown(rightIndex); // repite la funcion partiendo del hijo derecha
        } else if (leftValue < rightValue && leftValue < value) {
            // Si el valor hijo derecha es mayor que valor hijo izquierda
            // y valor del del inidice actual es mayor que el hijo de la izquierda
            this.data[index] = leftValue; // el indice actual toma el valor del hijo izquierda
            this.data[leftIndex] = value; // el indice izquierda toma el valor actual

            this.#heapifyDown(leftIndex); // repite la funcion partiendo del hijo izquierda
        }
    }

    // mueve hacia arriba un valor que se encuentra en este indice
    // si el valor del nodo padre es mayor que el valor del nodo evaluado (se invierte si el heap debe ser max)
    #heapifyUp(index) {
        if (index === 0) return; // se detiene si es el primer nodo

        const parent = this.#parent(index); // calcula el indice del padre
        const parentValue = this.data[parent]; // toma el valor en el indice del padre
        const value = this.data[index]; // toma el valor en su indice

        if (parentValue > value) { // si el valor en el indice de su padre es mayor...
            this.data[parent] = value; // su valor pasa a ser el valor del nodo padre
            this.data[index] = parentValue; // el indice actual pasa a tener el valor del nodo padre
            this.#heapifyUp(parent); // repite la operacion en el nodo padre
        }
    }

    // Calcula el indice dentro del array del nodo padre
    #parent(index) {
        return Math.floor((index - 1) / 2); // de acuerdo a la explicacón de abajo
    }

    // Calcula el indice dentro del array del hijo de la izquierda
    #leftChild(index) {
        return index * 2 + 1; // de acuerdo a la explicacón de abajo
    }

    // Calcula el indice dentro del array del hijo de la derecha
    #rightChild(index) {
        return index * 2 + 2; // de acuerdo a la explicacón de abajo
    }
}

/*
 * ÁRBOL HEAP:
 * es un árbol balanceado y completo en el cual los valores están ubicados de
 * acuerdo a un órden débil. Este orden puede ser que el nodo padre simpre 
 * será menor o igual que sus hijos o viceverza. Este órden débil se implementa
 * también en los subárboles. no es necesaria una interfase de acceso a los
 * nodos diferentes a la raíz.
 *
 * Es necesario mantener la estructura del árbol para mantener su complejidad
 * en el tiempo igual o menor a O(log n). 
 *
 * > Sacar valores: Sólo se sacan valores de la raíz del
 * árbol y para llenar ese hueco, se toma el último valor del árbol, se ubica
 * en la raíz, y se compara con 
 *
 * PASO DE ÁRBOL A ARRAY:
 * Dado que sólo necesitamos acceder al root del árbol, que en este caso
 * siempre debe tener el menor valor (minHeap, caso contrario en maxHeao),
 * una condicion que se replica en los subárboles, y que este árbol es completo, 
 * binario y balanceado, sin huecos ni nada por el estilo, 
 * podemos transferir los nodos a un array, y mantener la relacion entre los nodos
 * accediendo al padre o a los hijos a través de una función.
 *
 * ESQUEMA PARA CONVERTIR UN ARBOL BALANCEADO EN UN ARRAY
 *
 * [parent, INDEX, left child, right child]
 *
 *              parent
 *                |
 *          (index - 1) / 2 
 *                |
 *             --------
 *            | INDEX |
 *            --------
 *             /     \
 * index * 2 + 1     index * 2 + 2
 *          /          \    
 *  left child          right child
 *              4
 *          5       7
 *      8   9       13  9
 * 10  11  12
 *
 * 4, 5, 7, 8, 9, 13, 9, 10, 11, 12
 * 0  1  2  3  4  5   6  7   8   9
 */

const heap = new MinHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.pop()
heap.pop()
heap.pop()
console.log(heap.data);
