const Board = require("./board.js")
const readline = require('readline-sync');

class UI {
    constructor() {
        this.diff = this.getDifficulty();
        let b = new Board(this.diff, this.diff);
        this.b = b;
        //Delete These!
        this.b.printBoard();
        this.b.makeAllVisible();
    }

    getDifficulty() {
        let diff = "";
        while(diff != "easy" && diff != "medium" && diff != "hard") {
            diff = readline.question("Choose a difficulty: easy, medium, or hard:       ");
        }
        console.clear();
        if (diff == "easy") return 8;
        else if (diff == "medium") return 12;
        return 16;
    }

    chooseFlag() {
        let action = "N/A";
        while (action != "flag" && action != "")
            action = readline.question("Would you like to flag a box or guess? Type 'flag' or press enter to guess:    ");
        if (action == "flag") return true;
        return false;
    }

    chooseCoords() {
        let x = NaN, y = NaN;
        // The following to while loops used help from https://stackoverflow.com/questions/19048507/how-to-check-for-datatype-in-node-js-specifically-for-integer
        while (isNaN(x))
            x = parseInt(readline.question("Enter a row:    "));
        while (isNaN(y))
            y = parseInt(readline.question("Enter a column:    "));
        return [x, y];
    }

    generalInput() {
        this.b.printBoard();
        let action = this.chooseFlag();
        let[x, y] = this.chooseCoords();
        //console.clear();
        return this.b.checkPos(x, y, action);
    }

    isWinner() {
        return this.b.getBombs() == this.b.getFlaggedBombs();
    }
    
}

module.exports = UI;