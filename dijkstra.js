const dijkstra = (graph, startPoint, endPoint) => {
    const route = {}; // node: [cost from startPoint, parent]
    for (const node in graph) {
        route[node] = node !== startPoint ? [Infinity, undefined] : [0, null];
    }

    let queue = [startPoint]; 
    const closedNodes = new Set(); // For fast access to resolved nodes 

    while (queue.length) {
        queue = [...new Set(queue)]; 
        queue.sort((a, b) => route[a][0] - route[b][0]); // arrange the cheapest available node
        const current = queue.shift();

        if (current === endPoint) break

        // Update the route values
        for (const neighbor of Object.keys(graph[current])) {
            const currentCost = route[current][0] + graph[current][neighbor];

            if (route[neighbor][0] > currentCost) {
                route[neighbor] = [currentCost, current];
            }

            if (!closedNodes.has(neighbor)) queue.push(neighbor);
        }
        closedNodes.add(current);
    }

    const renderRoute = (current) => {
        if (route[current][1] === null) return `( ${current} )`;
        return `${renderRoute(route[current][1])} -> ( ${current} )`;
    };
    console.log(renderRoute(endPoint));
};


const test1 = {
    a: { b: 5, c: 2 },
    b: { a: 5, c: 7, d: 8 },
    c: { a: 2, b: 7, d: 4, e: 8 },
    d: { b: 8, c: 4, e: 6, f: 4 },
    e: { c: 8, d: 6, f: 3 },
    f: { e: 3, d: 4 },
};

const test2 = {
    ini: { a: 6, b: 2 },
    a: { fin: 1 },
    b: { a: 3, fin: 5 },
    fin: {},
};

const test3 = {
    book: { LP: 5, Poster: 0 },
    LP: { Guitar: 15, Drums: 20 },
    Poster: { Guitar: 30, Drums: 35 },
    Guitar: { Piano: 20 },
    Drums: { Piano: 10 },
    Piano: {},
};

dijkstra(test1, 'a', 'f');
dijkstra(test2, 'ini', 'fin');
dijkstra(test3, 'book', 'Piano');
