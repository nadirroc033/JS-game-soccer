const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");

const canvasWidth = 1536;
const canvasHeight = 710;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const square = {
    x: 100,
    y: 280,
    width: 150,
    height: 200,
    speed: 2,
};

const bounceRegionStart = 514;
const bounceRegionEnd = 1021;

const goalkeeperImg = new Image();
goalkeeperImg.src = "goalkeeper.png";

function drawBackground() {
    const backgroundImg = new Image();
    backgroundImg.src = "goal2.jpg";

    backgroundImg.onload = function () {
        ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);

        drawTransparentRectangle();
        drawSquare();
    };
}

function drawTransparentRectangle() {
    ctx.globalAlpha = 0.5;

    ctx.fillStyle = "transperant";
    ctx.fillRect(bounceRegionStart, 255, bounceRegionEnd - bounceRegionStart, 212);

    ctx.globalAlpha = 1.0;
}

function drawSquare() {
    ctx.drawImage(goalkeeperImg, square.x, square.y, square.width, square.height);
}

function updateSquare() {
    square.x += square.speed;

    if (square.x + square.width > bounceRegionEnd) {
        square.x = bounceRegionEnd - square.width;
        square.speed = -square.speed;
    }

    if (square.x < bounceRegionStart) {
        square.x = bounceRegionStart;
        square.speed = -square.speed;
    }
}

function animate() {
    updateSquare();
    drawBackground();
    requestAnimationFrame(animate);
}

animate();
