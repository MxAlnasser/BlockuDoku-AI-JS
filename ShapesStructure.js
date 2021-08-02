const BLOCK1 = 0;
const LINE2 = 1;
const DIAGONAL2 = 2
const LINE3 = 3
const STAIRS3 = 4;
const DIAGONAL3 = 5;
const BLOCK4 = 6;
const LINE4 = 7
const L4 = 8;
const J4 = 9;
const T4 = 10;
const S4 = 11;
const Z4 = 12;
const LINE5 = 13;
const L5 = 14;
const T5 = 15;
const U5 = 16;
const PLUS5 = 17;

const TOTAL_SHAPES = 18;

class ShapesStructure {
    constructor() {
        this.setShapeIDs();
        this.shapes = [this.block1, this.line2, this.diagonal2, this.line3, this.stairs3, this.diagonal3, this.block4,
            this.line4, this.l4, this.j4, this.t4, this.s4, this.z4, this.line5, this.l5, this.t5, this.u5, this.plus5]
    }


    setShapeIDs() {
        this.block1 = {
            id: BLOCK1,
            blocks: [createVector(0, 0)],
            nBlocks: 1,
            width: 1,
            height: 1,
            orientations: 1,
            name: "Block1"
        }
        this.line2 = {
            id: LINE2,
            blocks: [createVector(0, 0), createVector(0, 1)],
            nBlocks: 2,
            width: 1,
            height: 2,
            orientations: 2,
            name: "Line2"
        }
        this.diagonal2 = {
            id: DIAGONAL2,
            blocks: [createVector(0, 0), createVector(1, 1)],
            nBlocks: 2,
            width: 2,
            height: 2,
            orientations: 2,
            name: "Diagonal2"
        }
        this.line3 = {
            id: LINE3,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(0, 2)],
            nBlocks: 3,
            width: 1,
            height: 3,
            orientations: 2,
            name: "Line3"
        }
        this.stairs3 = {
            id: STAIRS3,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(1, 1)],
            nBlocks: 3,
            width: 2,
            height: 2,
            orientations: 4,
            name: "Stairs3"
        }
        this.diagonal3 = {
            id: DIAGONAL3,
            blocks: [createVector(0, 0), createVector(1, 1), createVector(2, 2)],
            nBlocks: 3,
            width: 3,
            height: 3,
            orientations: 2,
            name: "Diagonal3"
        }
        this.block4 = {
            id: BLOCK4,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(1, 0), createVector(1, 1)],
            nBlocks: 4,
            width: 2,
            height: 2,
            orientations: 1,
            name: "Block4"
        }
        this.line4 = {
            id: LINE4,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(0, 2), createVector(0, 3)],
            nBlocks: 4,
            width: 1,
            height: 4,
            orientations: 2,
            name: "Line4"
        }
        this.l4 = {
            id: L4,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(0, 2), createVector(1, 2)],
            nBlocks: 4,
            width: 2,
            height: 3,
            orientations: 4,
            name: "L4"
        }
        this.j4 = {
            id: J4,
            blocks: [createVector(1, 0), createVector(1, 1), createVector(1, 2), createVector(0, 2)],
            nBlocks: 4,
            width: 2,
            height: 3,
            orientations: 4,
            name: "J4"
        }
        this.t4 = {
            id: T4,
            blocks: [createVector(0, 0), createVector(1, 0), createVector(2, 0), createVector(1, 1)],
            nBlocks: 4,
            width: 3,
            height: 2,
            orientations: 4,
            name: "T4"
        }
        this.s4 = {
            id: S4,
            blocks: [createVector(1, 0), createVector(2, 0), createVector(0, 1), createVector(1, 1)],
            nBlocks: 4,
            width: 3,
            height: 2,
            orientations: 4,
            name: "S4"
        }
        this.z4 = {
            id: Z4,
            blocks: [createVector(0, 0), createVector(1, 0), createVector(1, 1), createVector(2, 1)],
            nBlocks: 4,
            width: 3,
            height: 2,
            orientations: 4,
            name: "Z4"
        }
        this.line5 = {
            id: LINE5,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(0, 2), createVector(0, 3), createVector(0, 4)],
            nBlocks: 5,
            width: 1,
            height: 5,
            orientations: 2,
            name: "Line5"
        }
        this.l5 = {
            id: L5,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(0, 2), createVector(1, 2), createVector(2, 2)],
            nBlocks: 5,
            width: 3,
            height: 3,
            orientations: 4,
            name: "L5"
        }
        this.t5 = {
            id: T5,
            blocks: [createVector(0, 0), createVector(1, 0), createVector(2, 0), createVector(1, 1), createVector(1, 2)],
            nBlocks: 5,
            width: 3,
            height: 3,
            orientations: 4,
            name: "T5"
        }
        this.u5 = {
            id: U5,
            blocks: [createVector(0, 0), createVector(0, 1), createVector(1, 1), createVector(2, 1), createVector(2, 0)],
            nBlocks: 5,
            width: 3,
            height: 2,
            orientations: 4,
            name: "U5"
        }
        this.plus5 = {
            id: PLUS5,
            blocks: [createVector(1, 0), createVector(0, 1), createVector(1, 1), createVector(2, 1), createVector(1, 2)],
            nBlocks: 5,
            width: 3,
            height: 3,
            orientations: 1,
            name: "Plus5"
        }
    }

    getShapeByID(id) {
        return this.shapes[id];
    }

}