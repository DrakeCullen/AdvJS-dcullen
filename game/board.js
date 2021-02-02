class square {
    constructor() {
        this.visible = false;
        this.value = 0;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    makeVisible() {
        this.visible = true;
    }
}

class board {
    constructor(rows = 12 , columns = 12) {
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

    printSep(len, sep = '', count = true) {
        let out = "";
        if(!count) {
            for(let i = 0; i < len; i++) 
                    out += sep + sep + sep + sep + sep + sep;
        } else {
            out = "     "
            for(let i = 0; i < len; i++) 
                out += (i + 1) + "    ";
        }

        console.log(out);
    }
    printBoard() {
        let out = "";
        this.printSep(this.columns, '')
        this.printSep(this.columns, '-', false)
        
        for(let i = 0; i < this.rows; i++) {
            if (i < 10) out = i + "  | ";
            else out = i + " | ";
            for (let j = 0; j < this.columns; j++) {
                if (j < 9)
                    out += this.boardArray[i][j].getValue() + "    ";
                else 
                    out += this.boardArray[i][j].getValue() + "     ";
            }
            console.log(out);

        }
    }
}

let b = new board();
b.printBoard();