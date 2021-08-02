let game;

function setup() {
    window.canvas = createCanvas(450, 700);
    window.canvas.parent("canvas");
    background(255);

    game = new Game(0, 70, canvas.width);

}

function draw() {

    push();
    fill(255);
    //noStroke();
    stroke(150);
    rect(0, 0, canvas.width-1, canvas.height-1);

    game.draw();
    drawScore();
    pop();

}

function drawScore() {
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    noStroke();
    let scoreText = "Score: " + game.score;
    let scoreTextSize= 30;
    textSize(scoreTextSize);
    text(scoreText, canvas.width/2, game.position.y/2);
    pop();
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
