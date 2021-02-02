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

    printSep(len, sep = '', newLine = true, count = true) {
        let out = "";
        if(newLine) {
            for(let i = 0; i < len; i++) {
                if(!count)
                    out += sep + sep + sep + sep + sep;
                else out += (i + 1) + "    ";
            }
            console.log(out);
        } else {
            for(let i = 0; i < len; i++) {
                if(!count)
                    counsole.log("${sep} ");
                else 
                    console.log("${i} ");
            }
        }
    }
    printBoard() {
        let out = "";
        this.printSep(this.columns, '')
        this.printSep(this.columns, '-', true, false)
        
        for(let i = 0; i < this.rows; i++) {
            
            for (let j = 0; j < this.columns; j++) {
                if (j < 9)
                    out += this.boardArray[i][j].getValue() + "    ";
                else 
                    out += this.boardArray[i][j].getValue() + "     ";
            }
            console.log(out);
            out = "";
        }
    }
}

let b = new board();
b.printBoard();