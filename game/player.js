const UI = require("./ui.js")

class Player {
    constructor() {
        let u = new UI();
        this.u = u;
        this.alive = true;
    }

    play() {
        while(this.alive && !this.u.isWinner()) {
            this.u.generalInput();
        }
    }
}

module.exports = Player;