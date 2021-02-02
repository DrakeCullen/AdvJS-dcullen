const UI = require("./ui.js")

class Player {
    constructor() {
        let u = new UI();
        this.u = u;
        this.alive = true;
    }

    lose() {
        console.log("Try again! Your total score was ")
    }

    winner() {
        console.log("You won! Your score was . Lets see if you made it on the leaderboard!")
    }

    play() {
        while(this.alive && !this.u.isWinner()) {
            this.alive = this.u.generalInput();
        }
        if (!this.alive)
            this.lose();
        else 
            this.winner();
    }
}

module.exports = Player;