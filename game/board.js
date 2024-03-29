const Square = require('./square.js')
var colors = require('colors');

class Board {
    constructor(rows = 12, columns = 12) {
        this.rows = rows;
        this.columns = columns;
        this.flaggedBombs = 0;
        this.bombs = 0;
        this.createBombs();
        this.countNearBombs();
    }

    getBombs() { return this.bombs; }

    getFlaggedBombs() { return this.flaggedBombs; }

    getRows() { return this.rows; }

    getColumns() { return this.columns; }

    isValidPos(x, y) { return x >= 0 && x < this.columns && y >= 0 && y < this.rows; }

    flagBomb(x, y, flag) {
        if (this.boardArray[x][y].isFlag())
            this.flaggedBombs++;
        else
            this.flaggedBombs--;
    }

    createBombs() {
        this.boardArray = Array.from(Array(this.rows), () => new Array(this.columns));
        for (let i = 0; i < this.rows; i++) {
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
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                count = 0;
                if (this.boardArray[i][j].getValue() != -1) {
                    for (let dir = 0; dir < 8; dir++) {
                        if (this.isValidPos(i + dx[dir], j + dy[dir])) {
                            if (this.boardArray[i + dx[dir]][j + dy[dir]].getValue() == -1)
                                count++;
                        }
                    }
                    this.boardArray[i][j].setValue(count);
                }
            }
        }
    }

    clearSorroundingZeros(x, y, dx, dy) {
        this.boardArray[x][y].makeVisible();
        for (let dir = 0; dir < 4; dir++) {
            if (this.isValidPos(x + dx[dir], y + dy[dir])) {
                if (this.boardArray[x + dx[dir]][y + dy[dir]].getValue() == 0 && this.boardArray[x + dx[dir]][y + dy[dir]].isVisible() == false) {
                    this.clearSorroundingZeros(x + dx[dir], y + dy[dir], dx, dy);
                }
            }
        }
        return;
    }

    checkPos(x, y, flag = false) {
        const dx = new Array(-1, 0, 0, 1, -1, -1, 1, -1);
        const dy = new Array(0, 1, -1, 0, 1, -1, 1, -1);
        if (flag) {
            this.boardArray[x][y].makeFlag();
            if (this.boardArray[x][y].getValue() == -1)
                this.flagBomb(x, y, flag);
        } else {
            if (this.boardArray[x][y].isFlag()) this.boardArray[x][y].makeFlag();
            if (this.boardArray[x][y].getValue() == -1) return false;
            else if (this.boardArray[x][y].getValue() == 0) this.clearSorroundingZeros(x, y, dx, dy);
            else this.boardArray[x][y].makeVisible();
        }
        return true;
    }

    printSep(len, sep = '', count = true) {
        let out = "";
        if (!count) {
            for (let i = 0; i < len; i++)
                out += sep + sep + sep + sep + sep + sep;
        } else {
            out = "     "
            for (let i = 0; i < len; i++)
                out += i + "    ";
        }
        console.log(out);
    }

    printBoard() {
        let out = "";
        this.printSep(this.columns, '')
        this.printSep(this.columns, '-', false)

        for (let i = 0; i < this.rows; i++) {
            if (i < 10) process.stdout.write(`${i}  | `);
            else process.stdout.write(`${i} | `);
            for (let j = 0; j < this.columns; j++) {
                if (j < 9) {
                    if (this.boardArray[i][j].isFlag())
                        process.stdout.write(`${this.boardArray[i][j].printSquare().red}    `);
                    else
                        process.stdout.write(`${this.boardArray[i][j].printSquare()}    `);
                } else {
                    if (this.boardArray[i][j].isFlag())
                        process.stdout.write(`${this.boardArray[i][j].printSquare().red}     `);
                    else
                        process.stdout.write(`${this.boardArray[i][j].printSquare()}     `);
                }
            }
            console.log();
        }
    }
}

module.exports = Board;