let game;

function setup() {
    createCanvas(630, 630);
    background(255);

    game = new Game(630,630);

}

function draw() {
    game.draw();
}



function keyPressed() {

    if (keyCode === UP_ARROW) {
        game.activeShape.moveUp();
    } else if (keyCode === DOWN_ARROW) {
        game.activeShape.moveDown();
    }
    if (keyCode === LEFT_ARROW) {
        game.activeShape.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        game.activeShape.moveRight();
    }
    if (key === " ") {
        game.activeShape.place(game.grid, game.cellSize);
    }

}
