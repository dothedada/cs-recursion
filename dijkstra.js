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

const dijkstra = (graph = [], startPoint, endPoint) => {
    const cost = []; // node, cost
    const parents = {}; // node, parent
    for (const node in graph) {
        parents[node] = Infinity
    }
    parents[startPoint] = 0
    console.log(parents)
};

const nuGraph = {
    book: {
        LP: 5,
        Poster: 0,
    },
    LP: {
        Guitar: 15,
        Drum: 20,
    },
    Poster: {
        Guitar: 30,
        Drum: 35,
    },
    Guitar: {
        Piano: 20,
    },
    Durm: {
        Piano: 10,
    },
    Piano: {},
};

dijkstra(nuGraph, 'book');
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

