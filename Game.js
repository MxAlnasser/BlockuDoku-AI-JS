class Game {
    constructor(x, y, size) {
        this.position = createVector(x,y);
        this.size = size;

        this.cellSize = Math.floor(this.size/9);
        this.score = 0;
        this.justCleared = false;
        this.createShape();
        this.grid = new Array(9);
        for(let r=0; r<this.grid.length; r++) {
            this.grid[r] = [];
        }
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                this.grid[i][j] = new GridCell(i, j);
            }
        }
    }

    // draw the game
    draw() {
        push();


        this.drawCells();

        // get a new shape when the current one is placed and check for cleared lines/blocks and combo
        if(this.activeShape.placed) {
            let cleared = !!this.checkClearedLinesBlocks();
            if(cleared) {
                this.score += this.activeShape.stillExistingBlocks(this.grid);
                if(this.justCleared) {
                    this.score += 9;
                } else {
                    this.justCleared = true;
                }
            } else {
                this.score += this.activeShape.shape.nBlocks;
                this.justCleared = false;
            }
            this.createShape();
        }

        this.activeShape.draw(this.grid, this.position, this.cellSize);
        this.drawBorders();

        pop();
    }

    // draw the cells
    drawCells() {
        push();

        for(let r=0; r<9;r++) {
            for(let c=0; c<9;c++) {
                this.grid[r][c].draw(c*this.cellSize, r*this.cellSize, this.position, this.cellSize);
            }
        }
        pop();

    }

    // draw the outside and middle borders
    drawBorders() {
        push()
        fill(0,0,0,0);
        stroke(0);
        strokeWeight(2);
        rect(this.position.x+2, this.position.y+2, this.size - 4, this.size - 4);
        rect(this.position.x+this.cellSize*3+1, this.position.y+2, this.cellSize*3, this.size - 4);
        rect(this.position.x+2, this.position.y+this.cellSize*3+1, this.size - 4, this.cellSize*3);
        pop();
    }

    // Create a random shape and set it as the active shape
    createShape() {
        this.activeShape = new Shape(Math.floor(Math.random() * TOTAL_SHAPES), 3, 3);
        this.activeShape.rotateRandom();
    }

    checkClearedLinesBlocks() {
        let clearedBlocks = [];

        // find cleared vertical lines
        for(let r=0; r<9; r++) {
            let cleared = [];
            for(let c=0; c<9; c++) {

                if(this.grid[r][c].empty) {
                    cleared = [];
                    break;
                } else {
                    cleared.push(this.grid[r][c]);
                }
            }
            if(cleared.length) {
                clearedBlocks = clearedBlocks.concat(cleared);
            }
        }

        // find cleared horizontal lines
        for(let c=0; c<9; c++) {
            let cleared = [];
            for(let r=0; r<9; r++) {

                if(this.grid[r][c].empty) {
                    cleared = [];
                    break;
                } else {
                    cleared.push(this.grid[r][c]);
                }
            }
            if(cleared.length) {
                clearedBlocks = clearedBlocks.concat(cleared);
            }
        }

        // find cleared squares
        for(let square_r=0; square_r<9; square_r+=3) {
            for(let square_c=0; square_c<9; square_c+=3) {
                let cleared = [];

                for(let r=square_r; r<square_r+3; r++) {
                    for (let c=square_c; c<square_c+3; c++) {
                        if(this.grid[r][c].empty) {
                            cleared = [];
                            break;
                        } else {
                            cleared.push(this.grid[r][c]);
                        }
                    }
                    if(!cleared.length) {
                        break;
                    }
                }
                if(cleared.length) {
                    clearedBlocks = clearedBlocks.concat(cleared);
                }
            }
        }

        // mark cleared blocks as empty and give score
        if(clearedBlocks.length) {
            if(clearedBlocks.length<=18) {
                this.score += clearedBlocks.length*2;
            } else {
                this.score += clearedBlocks.length*4;
            }
            for (const solvedBlock of clearedBlocks) {
                solvedBlock.empty = true;
            }
        }
        return clearedBlocks.length;

    }

}