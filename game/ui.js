const Board = require("./board.js")
const readline = require('readline-sync');

class UI {
    constructor() {
        this.diff = this.getDifficulty();
        let b = new Board(this.diff, this.diff);
        this.b = b;
        b.printBoard();
    }

    getDifficulty() {
        let diff = "";
        while(diff != "easy" && diff != "medium" && diff != "hard") {
            diff = readline.question("Choose a difficulty: easy, medium, or hard:       ")
        }
        console.clear();
        if (diff == "easy") return 8;
        else if (diff == "medium") return 12;
        return 16;
    }
    
}

module.exports = UI;