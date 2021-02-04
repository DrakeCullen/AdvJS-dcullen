const UI = require("./ui.js")

class Player {
    constructor() {
        let u = new UI();
        this.u = u;
        this.alive = true;
        this.start = new Date();
    }

    lose() {
        let [remainBombs, flaggedBombs] = this.u.getStats();
        console.log(`Try again! You correctly flagged ${flaggedBombs} bombs and needed to flag ${remainBombs} more bombs! Your total score would have been ${this.score}`);
    }

    winner() {
        console.log(`You won! Your score is ${this.score}. Lets see if you made it on the leaderboard!`)
    }

    calcScore() {
        let end = new Date();
        let time = (end - this.start) / 100;
        this.score = 3000 - time;
        if (this.score < 0)
            this.score = 0;
    }

    play() {
        while (this.alive && !this.u.isWinner()) {
            this.alive = this.u.generalInput();
        }
        this.calcScore();
        if (!this.alive)
            this.lose();
        else
            this.winner();
    }
}

module.exports = Player;