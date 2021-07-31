let game;

function setup() {
    createCanvas(630, 630);
    background(100);

    game = new Game(630,630);

}

function draw() {
    game.draw();
}