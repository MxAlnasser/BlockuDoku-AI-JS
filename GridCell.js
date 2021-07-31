class GridCell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }


    draw(x, y, size) {
        push();

        fill(255);
        stroke(200);
        strokeWeight(1);
        rect(x+1, y+1, size-2, size-2);

        pop();
    }
}