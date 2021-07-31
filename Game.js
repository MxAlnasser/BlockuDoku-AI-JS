class Game {
    constructor(size) {
        this.size = size;
        this.grid = new Array(9);
        this.cellSize = Math.floor(this.size/9);
        for(let r=0; r<this.grid.length; r++) {
            this.grid[r] = [];
        }
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                this.grid[i][j] = new GridCell(i, j);
            }
        }

    }


    draw() {
        push();

        this.drawGrid();

        pop();
    }

    drawGrid() {
        push();

        for(let r=0; r<9;r++) {
            for(let c=0; c<9;c++) {
                this.grid[r][c].draw(r*this.cellSize, c*this.cellSize, this.cellSize);
            }
        }

        fill(0,0,0,0);
        stroke(0);
        strokeWeight(2);
        rect(2, 2, this.size - 4, this.size - 4);
        rect(this.cellSize*3+1, 2, this.cellSize*3, this.size - 4);
        rect(2, this.cellSize*3+1, this.size - 4, this.cellSize*3);
        pop();
    }
}