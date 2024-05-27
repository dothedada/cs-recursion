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
        if (!board[move[0]][move[1]]) allowedMoves.push(move);
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

const endMessage = (moves, end) => {
	const stepsTaken = () => {
		if (!moves.length) return `[${end}].`
		return `[${moves.pop()}], ` + stepsTaken()
	}
    console.log(`Done in ${moves.length} moves!`);
    console.log(`This was the path: ${stepsTaken()}`);
};

const knightMoves = (start, end) => {
    const [endX, endY] = [...end];

    const [startX, startY] = [...start];
    const moves = new MovesHistory([startX, startY]);

    const queue = [[startX, startY]];
    while (queue.length) {
        const [evalX, evalY] = [...queue.shift()];

        moves.add([evalX, evalY], posibleNextMoves([evalX, evalY]));
        if (evalX === endX && evalY === endY) break;

        board[evalX][evalY] = 'visited';
        queue.push(...posibleNextMoves([evalX, evalY]));
    }

	endMessage(moves[end], end)
};

knightMoves([3, 2], [7, 6]);
