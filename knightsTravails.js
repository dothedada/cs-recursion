const board = (() => new Array(8).fill(null).map(() => new Array(8).fill(0)))();

const getMoves = (position) => {
    const [knightX, knightY] = [...position];
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2],
    ];

    const movesInBoard = knightMoves
        .map(([x, y]) => [knightX + x, knightY + y])
        .filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);

    const allowedMoves = [];
    for (const move of movesInBoard) {
        if (board[move[0]][move[1]] === 0) allowedMoves.push(move);
    }

    return allowedMoves;
};

const setMovesOnBoard = (from, moves) => {
    moves.forEach(([mX, mY]) => (board[mX][mY] = from));
};

const recallMoves = (step, end) => {
    if (step[0] === end[0] && step[1] === end[1]) return [];
    return [[step[0], step[1]], ...recallMoves(board[step[0]][step[1]], end)];
};

const endMessage = (moves) => {
    const stepsTaken = () => {
        if (moves.length === 1) return `[${moves.pop()}].`;
        return `[${moves.pop()}], ` + stepsTaken();
    };
    console.log(`Done in ${moves.length} moves!`);
    console.log(`This was the path: ${stepsTaken()}`);
};

const knightMoves = (start, end) => {
    const [startX, startY] = [...start];
    const queue = [[startX, startY]];

    while (queue.length) {
        const [evalX, evalY] = [...queue.shift()];
        if (evalX === end[0] && evalY === end[1]) break;

        const moves = getMoves([evalX, evalY]);
        setMovesOnBoard([evalX, evalY], moves);
        queue.push(...moves);
    }
    endMessage(recallMoves(end, start));
};

knightMoves([0, 0], [7, 7]);
