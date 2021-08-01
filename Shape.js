class Shape {
    constructor(id, row, col) {
        this.row = row;
        this.col = col;
        let makeshape = new ShapesStructure;
        this.shape = makeshape.getShapeByID(id);
        this.placed = false;
    }


    draw(grid, cellSize) {
        push();

        for (const block of this.shape.blocks) {

            if(!grid[this.row+block.y][this.col+block.x].empty) {
                fill(255,0,0);
            } else {
                fill(0,200,0);
            }

            noStroke();
            strokeWeight(1);
            rect((this.col+block.x)*cellSize+1,(this.row+block.y)*cellSize+1,  cellSize-2, cellSize-2);
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

    place(grid, cellSize) {
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

}