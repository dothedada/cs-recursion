const board = (() => {
    return new Array(8).fill(null).map(() => new Array(8).fill(0));
})();

const getMoves = (position) => {
    const [knightX, knightY] = [...position];
    const knightMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
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

const setMovesOnBoard = ([fromX, fromY], moves) => {
    moves.forEach(([moveX, moveY]) => (board[moveX][moveY] = [fromX, fromY]));
};

const recallMoves = (current, end) => {
    const [curX, curY] = [...current];
    const [endX, endY] = [...end];
    if (curX === endX && curY === endY) return [[curX, curY]];
    const moves = [[curX, curY], ...recallMoves(board[curX][curY], end)];

    console.log(moves)
};

const knightMoves = (start, end) => {
    const [startX, startY] = [...start];
    const queue = [[startX, startY]];
    const [endX, endY] = [...end];

    while (queue.length) {
        const [evalX, evalY] = [...queue.shift()];

        if (evalX === endX && evalY === endY) break;

        const moves = getMoves([evalX, evalY]);
        setMovesOnBoard([evalX, evalY], moves);
        queue.push(...moves);
    }

    console.log(recallMoves(end, start));
};

knightMoves([0, 3], [0, 0]);
// console.log(board);
