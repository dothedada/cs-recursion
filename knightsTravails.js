// movimientos posibles del caballo
// KnightMoves (ubicacion actual)
// crea el array que va a contener los movimientos posibles
// 
// crea el pivote de donde parten todos los movimientos
// crea los destinos posibles en x
//		pivote - 2, pivote - 1, pivote + 1, pivote + 2
//		convierte en false todos los menores a 0 y mayores 7
// crea los destinos posibles en y
//		pivote - 2, pivote - 1, pivote + 1, pivote + 2
//		convierte en false todos los menores a 0 y mayores 7
// 
// crea un array de duplas por cada x con cada y
// del array[0] y array[3] empuja [1] y [2] al array de movimientos posibles
// del array[1] y array[2] empuja [0] y [3] al array de movimientos posibles
// filtra los que notienen falso
// comprueba con el array de visitados los que estan displonibles y elimina los que no
// retorna el array de movimientos posibles
// 
//
// toma el punto de partida y establece sus movimientos
// Horizontales si el resultado es mayor que 0 y menor que 7
//		añade 2 y reduce 2 al su ancho, suma y resta 1 a su altura
// Verticales si el resultado es mayor que 0 y menor que 7
//		añade 2 y reduce 2 al su alto, suma y resta 1 a su ancho
// elimina los lugares que ya ha visitado
// retorna el listado
//
// Puntos visitados es un array de 8 x 8, donde 0 son sin visitar y 1 los ya visitados

const board = (() => {
	const createBoard = []
	for (let i = 0; i < 8; i++) {
		createBoard[i] = []
		for (let j = 0; j < 8; j++) {
			createBoard[i].push(undefined)
		}
	}
	return createBoard
})()

board[5][4] = true

const knightMoves = (arr) => {
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
		if (!board[move[0]][move[1]]) allowedMoves.push(move)
	}

	return allowedMoves
}

console.log(knightMoves([4, 6]))