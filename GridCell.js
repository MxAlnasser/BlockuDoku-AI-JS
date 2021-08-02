class GridCell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.empty = true;
    }


    draw(x, y, gamePosition, cellSize) {
        push();

        if(this.empty) {
            fill(255);
        } else {
            fill(150,150,255);
        }

        stroke(200);
        strokeWeight(1);
        rect(gamePosition.x+x+1, gamePosition.y+y+1, cellSize-2, cellSize-2);

        pop();
    }

}