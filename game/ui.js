const Board = require("./board.js")
const readline = require('readline-sync');

class UI {
    constructor(difficulty = "") {
        this.diff = this.getDifficulty(difficulty);
        this.b = new Board(this.diff, this.diff);
    }

    getDifficulty(difficulty = "") {
        let diff = difficulty;
        console.log("Choose a difficulty:");
        while (diff != "1" && diff != "2" && diff != "3") {
            console.log("[1] Easy");
            console.log("[2] Medium");
            console.log("[3] Hard");
            diff = readline.question("> ");
        }
        console.clear();
        if (diff == "1") return 6;
        else if (diff == "2") return 8;
        return 12;
    }

    getStats() { return [this.b.getBombs(), this.b.getFlaggedBombs()]; }

    chooseFlag(choice = "") {
        let action = choice;
        while (action != '1' && action != '2') {
            console.log("Do you want to flag a square or reveal its value?");
            console.log("[1] Flag an element");
            console.log("[2] Reveal a boxes value");
            action = readline.question("> ");
        }

        if (action == '1') return true;
        return false;
    }

    chooseCoords() {
        let x = -1;
        let y = -1;
        while (x >= this.b.getRows() || x < 0) {
            console.log("Enter a row: ");
            x = parseInt(readline.question("> "));
        }
        while (y >= this.b.getColumns() || y < 0) {
            console.log("Enter a column: ");
            y = parseInt(readline.question("> "));
        }
        return [x, y];
    }

    generalInput() {
        this.b.printBoard();
        let action = this.chooseFlag();
        let [x, y] = this.chooseCoords();
        console.clear();
        return this.b.checkPos(x, y, action);
    }

    isWinner() { return this.b.getBombs() == this.b.getFlaggedBombs(); }

    currentDiff() { return this.diff; }
}

module.exports = UI;