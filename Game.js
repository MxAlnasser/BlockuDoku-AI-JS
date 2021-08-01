class Game {
    constructor(size) {
        this.size = size;
        this.grid = new Array(9);
        this.cellSize = Math.floor(this.size/9);
        this.score = 0;
        this.createShape();
        for(let r=0; r<this.grid.length; r++) {
            this.grid[r] = [];
        }
        for(let i=0; i<9; i++) {
            for(let j=0; j<9; j++) {
                this.grid[i][j] = new GridCell(i, j);
            }
        }


    }



    // Draw the game
    draw() {
        push();

        this.solveBlocksLines();
        this.drawCells();
        if(this.activeShape.placed) {
            this.createShape();
        }
        this.activeShape.draw(this.grid, this.cellSize);
        this.drawBorders();


        pop();
    }

    // draw the cells
    drawCells() {
        push();

        for(let r=0; r<9;r++) {
            for(let c=0; c<9;c++) {
                this.grid[r][c].draw(c*this.cellSize, r*this.cellSize, this.cellSize);
            }
        }
        pop();

    }

    drawBorders() {
        push()
        fill(0,0,0,0);
        stroke(0);
        strokeWeight(2);
        rect(2, 2, this.size - 4, this.size - 4);
        rect(this.cellSize*3+1, 2, this.cellSize*3, this.size - 4);
        rect(2, this.cellSize*3+1, this.size - 4, this.cellSize*3);
        pop();
    }

    // Create a random shape and set it as the active shape
    // TODO:
    // * rotate the shape to a random orientation
    createShape() {
        this.activeShape = new Shape(Math.floor(Math.random() * 9), 0, 0);
    }

    solveBlocksLines() {
        let solvedBlocks = [];
        for(let r=0; r<9; r++) {
            let solved = [];
            for(let c=0; c<9; c++) {

                if(this.grid[r][c].empty) {
                    solved = [];
                    break;
                } else {
                    solved.push(this.grid[r][c]);
                }
            }
            if(solved.length) {
                solvedBlocks = solvedBlocks.concat(solved);
            }
        }

        for(let c=0; c<9; c++) {
            let solved = [];
            for(let r=0; r<9; r++) {

                if(this.grid[r][c].empty) {
                    solved = [];
                    break;
                } else {
                    solved.push(this.grid[r][c]);
                }
            }
            if(solved.length) {
                solvedBlocks = solvedBlocks.concat(solved);
            }
        }

        for(let blockr=0; blockr<9; blockr+=3) {
            for(let blockc=0; blockc<9; blockc+=3) {
                let solved = [];

                for(let r=blockr; r<blockr+3; r++) {
                    for (let c=blockc; c<blockc+3; c++) {
                        if(this.grid[r][c].empty) {
                            solved = [];
                            break;
                        } else {
                            solved.push(this.grid[r][c]);
                        }
                    }
                    if(!solved.length) {
                        break;
                    }
                }
                if(solved.length) {

                    solvedBlocks = solvedBlocks.concat(solved);

                }
            }
        }

        if(solvedBlocks.length) {
            console.log(solvedBlocks.length);
            for (const solvedBlock of solvedBlocks) {

                solvedBlock.empty = true;
            }
        }

    }

}