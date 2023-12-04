//we maken een canvas met 800x600 en voegen het toe aan de html pagina

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
ctx.fillStyle = '#FF0000';
document.body.appendChild(canvas);

//variabelen voor de positie en snelheid van de cirkel
let x = 50; //startpositie x
let y = 50; //startpositie y
let dx = 2; //snelheid x
let dy = 2; //snelheid y
let radius = 20; // radius an de cirkle

//functie om een cirkle te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FEFEFE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle();

    //verander de positie van de cirkle
    x += dx;
    y += dy;

    //laat de cirkel stuiteren wanneer hij de randen raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy;
}

requestAnimationFrame(update); //roept update weer aan voor
}

//start de animatieloop
update();