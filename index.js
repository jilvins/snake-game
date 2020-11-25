const gameGrid = document.querySelector('.snake-grid');
const startButton = document.querySelector('.start')
const score = document.getElementById('score')
let squares = []
let newSnake = [2, 1, 0]
let movementDirection = 1

function createGrid () {
    for (let i = 0; i<100; i++) {
        const square = document.createElement('div')
        square.classList.add('div')
        gameGrid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

newSnake.forEach(part => squares[part].classList.add('snake'))

function move () {
    let tail = newSnake.pop()
    squares[tail].classList.remove('snake')
    newSnake.unshift(newSnake[0]+movementDirection)
    squares[newSnake[0]].classList.add('snake')
    console.log(newSnake)
}
move()

let movementSpeed = setInterval(move, 1000)

function keyControl (e) {
    if (e.keyCode === 39) {
        movementDirection = 1
    } else if (e.keyCode === 38) {
        movementDirection = -10
    } else if (e.keyCode === 37) {
        movementDirection = -1
    } else if (e.keyCode === 40) {
        movementDirection = +10
    }
}

document.addEventListener('keyup', keyControl)