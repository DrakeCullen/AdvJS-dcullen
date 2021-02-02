class square {
    constructor() {
        this.visible = false;
        this.value = 0;
    }

    setValue(value) {
        this.value = value;
    }

    makeVisible() {
        this.visible = true;
    }

    getValue() {
        return this.value;
    }
}

class board {
    constructor(rows = 16 , columns = 16) {
        this.rows = rows;
        this.columns = columns;
        this.boardArray = Array.from(Array(this.rows), () => new Array(this.columns));
        for(let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let s = new square();
                this.boardArray[i][j] = s;
            }
        }
    }

    printBoard() {
        let out = "";
        for(let i = 0; i < this.rows; i++) {
            out = "";
            for (let j = 0; j < this.columns; j++) {
              out += this.boardArray[i][j].getValue() + " ";
            }
            console.log(out);
        }
    }
}

let b = new board();
b.printBoard();