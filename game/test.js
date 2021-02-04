//https: //stackoverflow.com/questions/34223065/read-lines-synchronously-from-file-in-node-js
const readline = require('readline-sync');
const fs = require('fs');


class Player {
    constructor() {
        this.alive = true;
        this.start = new Date();
        this.readPlayers();
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

    readPlayers() {
        // I got the following line of code from https://stackoverflow.com/questions/34223065/read-lines-synchronously-from-file-in-node-js
        this.input = require('fs').readFileSync('users.txt', 'utf-8').split('\n').filter(Boolean);
        this.players = {};
        let name, score, wins, losses;
        for (let line of this.input) {
            [name, score, wins, losses] = line.split(" ");
            this.players[name] = [parseFloat(score), parseInt(wins), parseInt(losses)];
        }
    }
    createPlayer() {
        console.log("Choose a username (Don't use any spaces).");
        this.name = readline.question("> ");
        this.score = this.wins = this.losses = 0;
        fs.appendFileSync("users.txt", `${this.name} ${this.score} ${this.wins} ${this.losses} \n`);
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

    updatePlayers() {
        this.wins = 3;
        this.losses = -2;
        let name, score, wins, losses;
        fs.truncateSync("users.txt");
        for (let line of this.input) {
            [name, score, wins, losses] = line.split(" ");
            if (name != this.name)
                fs.appendFileSync("users.txt", `${name} ${score} ${wins} ${losses} \n`);
        }
        fs.appendFileSync("users.txt", `${this.name} ${this.score} ${this.wins} ${this.losses} \n`);
    }
}


p = new Player();
p.getPlayer();
p.updatePlayers();