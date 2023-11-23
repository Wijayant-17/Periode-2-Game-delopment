function moveDiv() {
    const movingDiv = document.getElementById('movingDiv');
    const currentPosition = parseInt(movingDiv.style.left) || 0;
    const newPosition = currentPosition + 1;
    movingDiv.style.left = newPosition + 'px';

    const screenWidth = window.innerWidth;
    if (newPosition + 50 > screenWidth) {
     clearInterval(intervalId);
    }
}

const intervalId = setInterval(moveDiv, 1);

