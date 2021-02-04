const readline = require('readline-sync');
const fs = require('fs');


class Player {
    constructor() {
        this.alive = true;
        this.start = new Date();
        this.readPlayers();
    }

    readPlayers() {
        // I got the following line of code from https://stackoverflow.com/questions/34223065/read-lines-synchronously-from-file-in-node-js
        this.input = require('fs').readFileSync('gameStats/users.txt', 'utf-8').split('\n').filter(Boolean);
        this.players = {};
        let name, score, wins, losses;
        for (let line of this.input) {
            [name, score, wins, losses] = line.split(" ");
            this.players[name] = [parseFloat(score), parseInt(wins), parseInt(losses)];
        }
    }

    selectName() {
        let choice = "";
        console.log("Are you a new or returning player?");
        while (choice != "1" && choice != "2") {
            console.log("[1] New Player");
            console.log("[2] Returning Player");
            choice = readline.question("> ");
        }
        if (choice == "1")
            this.createPlayer();
        else
            this.getPlayer();
    }

    createPlayer() {
        console.log("Choose a username (Don't use any spaces).");
        this.name = readline.question("> ");
        this.score = this.wins = this.losses = 0;
        fs.appendFileSync("gameStats/users.txt", `${this.name} ${this.score} ${this.wins} ${this.losses} \n`);
    }

    getPlayer() {
        let valid = false;
        console.log("What is your username?");
        while (!valid) {
            this.name = readline.question("> ");
            for (let key in this.players) {
                if (key == this.name) {
                    [this.score, this.wins, this.losses] = this.players[key];
                    valid = true;
                }
            }
        }
        console.log(this.score + " " + this.wins + " " + this.losses + " " + this.name);
    }

    updatePlayersList() {
        // Remove (for testing)
        this.wins = 3;
        this.losses = -2;
        let name, score, wins, losses;
        fs.truncateSync("gameStats/users.txt");
        for (let line of this.input) {
            [name, score, wins, losses] = line.split(" ");
            if (name != this.name)
                fs.appendFileSync("gameStats/users.txt", `${name} ${score} ${wins} ${losses} \n`);
        }
        fs.appendFileSync("gameStats/users.txt", `${this.name} ${this.score} ${this.wins} ${this.losses} \n`);
    }
}


p = new Player();
p.selectName();
p.updatePlayersList();