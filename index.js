const gameGrid = document.querySelector('.snake-grid');
const startButton = document.querySelector('.start');
const score = document.getElementById('current-score');
let lost = document.querySelector('.lost');
let squares = []
let newSnake = [2, 1, 0]
let movementDirection = 1
let gridWidth = 10
let appleIndex = 0
let bombIndex = 0
let begginingScore = 0
let begginingTime = 1000
let speed = 0.9
let movementSpeed = 0

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

    if (
        newSnake[0] + gridWidth >= gridWidth*gridWidth && movementDirection === gridWidth ||
        newSnake[0] % gridWidth == gridWidth-1 && movementDirection === 1 ||
        newSnake[0] % gridWidth == 0 && movementDirection === -1 ||
        newSnake[0] - gridWidth < 0 && movementDirection === -gridWidth ||
        squares[newSnake[0] + movementDirection].classList.contains('snake') ||
        squares[newSnake[0] + movementDirection].classList.contains('bomb')
    ) 
    return clearInterval(movementSpeed), lost.classList.remove('lost')
    

    let tail = newSnake.pop()
    squares[tail].classList.remove('snake')
    newSnake.unshift(newSnake[0]+movementDirection)

        if (squares[newSnake[0]].classList.contains('apple')){
            squares[newSnake[0]].classList.remove('apple')
            squares[bombIndex].classList.remove('bomb')
            squares[tail].classList.add('snake')
            newSnake.push(tail)
            createApple()
            begginingScore++
            score.textContent = begginingScore
            clearInterval(movementSpeed)   
            begginingTime = begginingTime * speed
            if (begginingScore>1){
                createBomb()
            }
            if (begginingScore === 1) {
                score.classList.add("one")
            }else if (begginingScore === 2) {
                score.classList.add("two")
            }else if (begginingScore === 3) {
                score.classList.add("three")
            }else if (begginingScore === 4) {
                score.classList.add("four")
            }else if (begginingScore === 5) {
                score.classList.add("five")
            }else if (begginingScore === 6) {
                score.classList.add("six")
            }else if (begginingScore === 7) {
                score.classList.add("seven")
            }else if (begginingScore === 8) {
                score.classList.add("eight")
            }else if (begginingScore === 9) {
                score.classList.add("nine")
            }else if (begginingScore === 10) {
                score.classList.add("ten")
            }
            movementSpeed = setInterval(move, begginingTime)
        }



    squares[newSnake[0]].classList.add('snake')
    
}
function startGame () {
    newSnake.forEach(part => squares[part].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    squares[bombIndex].classList.remove('bomb')
    clearInterval(movementSpeed)
    newSnake = [2, 1, 0]
    begginingScore = 0
    lost.classList.add('lost')
    score.textContent = begginingScore
    movementDirection = 1
    begginingTime = 1000
    newSnake.forEach(part => squares[part].classList.add('snake'))
    createApple()
    movementSpeed = setInterval(move, begginingTime)
}



function keyControl (e) {
    if (e.keyCode === 39) {
        movementDirection = 1
    } else if (e.keyCode === 38) {
        movementDirection = - gridWidth
    } else if (e.keyCode === 37) {
        movementDirection = -1
    } else if (e.keyCode === 40) {
        movementDirection = + gridWidth
    } else if (e.keyCode === 13) {
        e.preventDefault();
        startButton.click();
    } else if (e.keyCode === 49) {

    }
}

function startBybotten (e) {
    startButton
}

function createApple () {
    do {
        appleIndex = Math.floor(Math.random()*squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
createApple()

function createBomb () {
    do {
        bombIndex = Math.floor(Math.random()*squares.length)
    } while (squares[bombIndex].classList.contains('snake'))
     (squares[bombIndex].classList.contains('apple'))
    squares[bombIndex].classList.add('bomb')
}






document.addEventListener('keyup', keyControl)
startButton.addEventListener('click', startGame)
