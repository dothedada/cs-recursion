const board = (() => {
    return new Array(8).fill(null).map(() => new Array(8).fill(''));
})();

const posibleNextMoves = (arr) => {
    const [knightX, knightY] = [...arr];
    const moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    const posibleMoves = moves
        .map(([x, y]) => [knightX + x, knightY + y])
        .filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);

    const allowedMoves = [];

    for (const move of posibleMoves) {
        if (!board[move[0]][move[1]] || board[move[0]][move[1]] === 'end') {
            allowedMoves.push(move);
        }
    }

    return allowedMoves;
};

class MovesHistory {
    constructor(root = []) {
        this[root] = [];
    }

    add(parent, children = []) {
        children.forEach((child) => (this[child] = [parent, ...this[parent]]));
    }
}

const knightMoves = (start, end) => {
    const [endX, endY] = [...end];
    board[endX][endY] = 'end';

    const [startX, startY] = [...start];
    const moves = new MovesHistory([startX, startY]);

    const queue = [[startX, startY]];
    while (queue.length) {
        const [evalX, evalY] = [...queue.shift()];

        moves.add([evalX, evalY], posibleNextMoves([evalX, evalY]));
        if (board[evalX][evalY] === 'end') break;

        board[evalX][evalY] = 'visited';
        queue.push(...posibleNextMoves([evalX, evalY]));
    }

    const result = moves[end].reverse();

    console.log(`Done in ${result.length} moves!`);
    console.log(`This was the path:`);
    for (let i = 1; i <= result.length; i++) {
        if (i === result.length) {
            console.log(end);
        } else {
            console.log(result[i]);
        }
    }
};

knightMoves([0, 0], [7, 7]);
