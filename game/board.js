const Square = require('./square.js')

class Board {
    constructor(rows = 12 , columns = 12) {
        this.rows = rows;
        this.columns = columns;
        this.flaggedBombs = 0;
        this.bombs = 0;
        this.createBombs();
        this.countNearBombs();
    }

    getBombs() {
        return this.bombs;
    }

    getFlaggedBombs() {
        return this.flaggedBombs;
    }
    
    isValidPos(x, y) {
        return x >= 0 && x < this.columns && y >= 0 && y < this.rows;
    }

    createBombs() {
        this.boardArray = Array.from(Array(this.rows), () => new Array(this.columns));
        for(let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let s = new Square();
                if (Math.floor((Math.random() * this.rows) + 1) < this.rows / 4) {
                    s.setValue(-1);
                    this.bombs++;
                }
                this.boardArray[i][j] = s;
            }
        }
    }

    countNearBombs() {
        const dx = new Array(-1, -1, -1, 0, 0, 1, 1, 1);
        const dy = new Array(-1, 0, 1, -1, 1, -1, 0, 1);
        let count;
        for(let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                count = 0;
                if(this.boardArray[i][j].getValue() != 'X') {
                    for (let dir = 0; dir < 8; dir++) {
                        if(this.isValidPos(i + dx[dir], j + dy[dir])) {
                            if(this.boardArray[i + dx[dir]][j + dy[dir]].getValue() == 'X')
                                count++;
                        }
                    }
                    this.boardArray[i][j].setValue(count);
                }
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

module.exports = Board;
