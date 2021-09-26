class Shape {
    constructor(id, row, col) {
        this.row = row;
        this.col = col;
        this.shape = (new ShapesStructure).getShapeByID(id);
        this.placed = false;
    }


    draw(grid, gamePosition, cellSize) {
        push();

        for (const block of this.shape.blocks) {

            if(!grid[this.row+block.y][this.col+block.x].empty) {
                fill(255,0,0);
            } else {
                fill(0,200,0);
            }

            noStroke();
            strokeWeight(1);
            rect(gamePosition.x+(this.col+block.x)*cellSize+1,gamePosition.y+(this.row+block.y)*cellSize+1,  cellSize-2, cellSize-2);
        }

        pop();
    }

    moveRight() {
        if(this.col+this.shape.width<9) {
            this.col++;
        }
    }

    moveLeft() {
        if(this.col>0) {
            this.col--;
        }
    }

    moveUp() {
        if(this.row>0) {
            this.row--;
        }
    }

    moveDown() {
        if(this.row+this.shape.height<9) {
            this.row++;
        }
    }

    rotateRandom() {
        let rotations = Math.floor(Math.random() * this.shape.orientations);
        if(!rotations) {
            return;
        }

        for(let i=0; i<rotations; i++) {
            // rotate the shape counterclockwise
            let temp = this.shape.width;
            this.shape.width = this.shape.height;
            this.shape.height = temp;
            for (let block of this.shape.blocks) {
                let temp = block.x;
                block.x = block.y;
                block.y = -temp;

            }
        }

        // make sure that none of the blocks is placed in negative x or y
        let minX = 0;
        let minY = 0;
        for(let block of this.shape.blocks) {
            if(minX>block.x) {
                minX = block.x;
            }
            if(minY>block.y) {
                minY = block.y;
            }
        }
        for(let block of this.shape.blocks) {
            block.x -= minX;
            block.y -= minY;
        }


    }

    place(grid) {
        if(!this.isPlaceable(grid)) {
            return;
        }
        this.placed = true;
        push();
        for (const block of this.shape.blocks) {
            grid[this.row+block.y][this.col+block.x].empty = false;
        }
        pop();
    }

    isPlaceable(grid) {
        for (const block of this.shape.blocks) {

            if(!grid[this.row+block.y][this.col+block.x].empty) {
                return false;
            }
        }
        return true;
    }

    stillExistingBlocks(grid) {
        let count = 0;
        for (const block of this.shape.blocks) {
            if(!grid[this.row+block.y][this.col+block.x].empty) {
                count+=1;
            }
        }
        return count;
    }
}