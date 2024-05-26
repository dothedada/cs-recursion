const board = (() => {
	const createBoard = []
	for (let i = 0; i < 8; i++) {
		createBoard[i] = []
		for (let j = 0; j < 8; j++) {
			createBoard[i].push('')
		}
	}
	return createBoard
})()

const posibleNextMoves = (arr) => {
	const [knightX, knightY] = [...arr]
	const moves = [
		[1, 2], [1, -2], [-1, 2], [-1, -2],
		[2, 1], [2, -1], [-2, 1], [-2, -1],
	]

	const posibleMoves = moves
		.map(([x, y]) => [knightX + x, knightY + y])
		.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8)

	const allowedMoves = []

	for (const move of posibleMoves) {
		if (!board[move[0]][move[1]] || board[move[0]][move[1]] === 'end') {
			allowedMoves.push(move)
		}
	}

	return allowedMoves
}

const knightMoves = (start, end) => {
	const [startX, startY] = [...start]
	const [endX, endY] = [...end]

	board[endX][endY] = 'end'

	const queue = [[startX, startY]]

	while (queue.length) {
		const [qX, qY] = [...queue.shift()]
		console.log('queue: ', qX, qY)
		if (board[qX][qY] === 'end') return 'llegó'

		board[qX][qY] = 'visited'
		queue.push(...posibleNextMoves([qX, qY]))
	}

}

knightMoves([4, 6], [6, 7])
