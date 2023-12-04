const movingDiv = document.getElementById('movingDiv');
const screenWidth = window.innerWidth;
const divWidth = 50;

const speed = 2;
let moveRight = true;

function moveDiv() {
    const currentPositionX = parseInt(movingDiv.style.left) || 0;
    if (currentPositionX < 0 || currentPositionX > screenWidth - divWidth) {
        moveRight = !moveRight;
    }

    const newPositionX = currentPositionX + (moveRight ? speed : -speed);
    movingDiv.style.left = newPositionX + 'px';
}

setInterval(moveDiv, 16);