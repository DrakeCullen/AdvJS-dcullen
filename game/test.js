//https: //stackoverflow.com/questions/34223065/read-lines-synchronously-from-file-in-node-js
const readline = require('readline-sync');
const fs = require('fs');


class Player {
    constructor() {
        this.alive = true;
        this.start = new Date();
        this.readPlayers();
    }

    readPlayers() {
        let input = require('fs').readFileSync('users.txt', 'utf-8').split('\n').filter(Boolean);
        this.players = {};
        let name, score;
        for (let line of input) {
            [name, score] = line.split(" ");
            this.players[name] = parseFloat(score);
        }
    }
    createPlayer() {
        console.log("Choose a username (Don't use any spaces).");
        this.name = readline.question("> ");
        this.score = 0;
        fs.appendFileSync("users.txt", `${this.name} ${this.score} \n`);
    }

    getPlayer() {
        let valid = false;
        console.log("What is your username?");
        while (!valid) {
            this.name = readline.question("> ");
            for (let key in this.players) {
                if (key == this.name) {
                    this.score = this.players[key];
                    valid = true;
                }
            }
        }
        console.log(this.score + " " + this.name);
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

}


p = new Player();
p.getPlayer();