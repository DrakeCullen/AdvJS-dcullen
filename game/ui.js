const Board = require("./board.js")
const readline = require('readline-sync');

class UI {
    constructor() {
        this.diff = this.getDifficulty();
        let b = new Board(this.diff, this.diff);
        this.b = b;
        this.generalInput();
        b.printBoard();
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

    generalInput() {
        let action = "N/A";
        while (action != "flag" && action != "")
            action = readline.question("Would you like to flag a box or guess? Type 'flag' or press enter to guess:    ");
        console.log("You picked " + action);
        // Add logic in board for a picked square
    }

    isWinner() {
        return this.b.getBombs() == this.b.getFlaggedBombs();
    }
    
}

module.exports = UI;