// crea una hash
//     nodo: { costo, deDondeViene }
// con los objetos que se tiene conocimiento
//     salida: { costo: 0, deDondeViene: undefined }
//     llegada: { costo: infinite, deDondeViene: undefined }
// cierro el nodo de menor costo (evaluo los nodos que salen de este y los añado al hash)
// actualizo sus valores si son menores y el nodo del que vienen
//     nodoX: { costo: costoAcumuladoNodoAnterior + costoNodoActual, deDondeViene: salida }
// voy al nodo de menor costo que aún esté abierto y repito desde el 4
// hasta resolver llegada,
// tomo deDondeViene del ultimo nodo y realizo el seguimiento hasta el inicio
// publico tiempo y ruta
//
//
// Mientras tenga nodos por procesar,
// tomo el nodo de menor costo
// actualizo el valor de sus nodos vecinos
// si el valor de un vecino se actualiza,
//     tambiebn actualizo el de los nodos que le son vecinos
// marco este nodo como procesado
//

const dijkstra = (graph = {}, startPoint, endPoint) => {
    const route = {}; // node: [cost from startPoint, parent]
    for (const node in graph) {
        route[node] = node !== startPoint ? [Infinity, undefined] : [0, null];
    }

    const queue = [startPoint]; // init the queue
    const closedNodes = new Set();

    while (queue.length) {
        queue.sort((a,b) => route[a][0] - route[b][0])
        const current = queue.shift();

        const currentNode = graph[current];
        const neighbors = Object.keys(currentNode);

        if (current === endPoint) break;

        for (const neighbor of neighbors) {
            if (
                route[neighbor][0] >
                route[current][0] + graph[current][neighbor]
            ) {
                route[neighbor] = [
                    route[current][0] + graph[current][neighbor],
                    current,
                ];
            }

            if (!closedNodes.has(neighbor)) queue.push(neighbor);
        }

        closedNodes.add(current);
    }

    const renderRoute = (current) => {
        if (route[current][1] === null) return current
        return `${renderRoute(route[current][1])} ${current}`
    }
    console.log(renderRoute(endPoint));
};

const graph2 = {
  A: { B: 4, C: 2, D: 3 },
  B: { E: 2, F: 1 },
  C: { F: 4, G: 3 },
  D: { H: 1, I: 5 },
  E: { I: 2 },
  F: { J: 6 },
  G: { K: 7 },
  H: { L: 4 },
  I: { L: 1, M: 8 },
  J: { N: 2 },
  K: { O: 5 },
  L: { O: 3 },
  M: { O: 1 },
  // Unnecessary edges (not on the shortest path from A to O)
  N: { P: 10 },
  O: {},
  P: { Q: 1 },
  Q: {}
};

const graph = {
    a: { b: 5, c: 2 },
    b: { a: 5, c: 7, d: 8 },
    c: { a: 2, b: 7, d: 4, e: 8 },
    d: { b: 8, c: 4, e: 6, f: 4 },
    e: { c: 8, d: 6, f: 3 },
    f: { e: 3, d: 4 },
};

const gr = {
    ini: {
        a: 6,
        b: 2,
    },
    a: { fin: 1 },
    b: { a: 3, fin: 5 },
    fin: {},
};

const nuGraph = {
    book: {
        LP: 5,
        Poster: 0,
    },
    LP: {
        Guitar: 15,
        Drums: 20,
    },
    Poster: {
        Guitar: 30,
        Drums: 35,
    },
    Guitar: {
        Piano: 20,
    },
    Drums: {
        Piano: 10,
    },
    Piano: {},
};

dijkstra(nuGraph, 'book', 'Piano');
dijkstra(gr, 'ini', 'fin');
dijkstra(graph, 'a', 'f');
dijkstra(graph2, 'A', 'O');
// const graph = [
//     {
//         value: 'book',
//         connectedTo: [
//             { value: 'LP', distance: 5 },
//             { value: 'Poster', distance: 0 },
//         ],
//     },
//     {
//         value: 'LP',
//         connectedTo: [
//             { value: 'Guitar', distance: 15 },
//             { value: 'Drum', distance: 20 },
//         ],
//     },
//     {
//         value: 'Poster',
//         connectedTo: [
//             { value: 'Guitar', distance: 30 },
//             { value: 'Drum', distance: 35 },
//         ],
//     },
//     {
//         value: 'Guitar',
//         connectedTo: [{ value: 'Piano', distance: 20 }],
//     },
//     {
//         value: 'Drum',
//         connectedTo: [{ value: 'Piano', distance: 10 }],
//     },
//     {
//         value: 'Piano',
//         connectedTo: [],
//     },
// ];
