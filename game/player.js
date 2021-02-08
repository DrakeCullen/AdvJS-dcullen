const UI = require("./ui.js")
const readline = require('readline-sync');
const fs = require('fs');

class Player {
    constructor() {
        this.u = new UI();
        this.alive = true;
        this.start = new Date();
        this.readPlayers();
        this.selectName();
    }

    play() {
        while (this.alive && !this.u.isWinner()) {
            this.alive = this.u.generalInput();
        }
        this.calcScore();
        if (!this.alive)
            this.loser();
        else
            this.winner();
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
        console.log("Choose a username (Don't use any spaces)");
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
        console.log(`Hello ${this.name}! You currently have ${this.wins} wins, ${this.losses} losses, and a high score of ${this.score}!`);
    }

    loser() {
        console.clear();
        [this.remainBombs, this.flaggedBombs] = this.u.getStats();
        console.log(`Try again! You correctly flagged ${this.flaggedBombs} bombs and needed to flag ${this.remainBombs} more bombs! Your total score would have been ${this.newScore}`);
        this.losses++;
        console.log(`${this.name}, here are you updated stats. You currently have ${this.wins} wins, ${this.losses} losses, and a high score of ${this.score}!`);
        this.updatePlayersList();
    }

    winner() {
        console.clear();
        if (this.newScore > this.score) {
            this.score = this.newScore;
            console.log(`You won and got a new high score! Your score is ${this.score}. Lets see if you made it on the leaderboard!`);
            this.updateLeaderboard();
            this.getLeaders();
            this.printLeaderboard();
        } else {
            console.log("You won but did not get a new score.")
        }
        this.wins++;
        console.log(`${this.name}, here are you updated stats. You currently have ${this.wins} wins, ${this.losses} losses, and a high score of ${this.score}!`);
        this.updatePlayersList();
    }

    calcScore() {
        let end = new Date();
        let time = (end - this.start) / 100;
        let diff = this.u.currentDiff();
        this.newScore = 4000 - time;
        if (diff == 8) this.newScore += 2000;
        if (diff == 12) this.newScore += 3500;
        if (this.newScore < 0)
            this.newScore = 0;
    }

    updatePlayersList() {
        let name, score, wins, losses;
        fs.truncateSync("gameStats/users.txt");
        for (let line of this.input) {
            [name, score, wins, losses] = line.split(" ");
            if (name != this.name)
                fs.appendFileSync("gameStats/users.txt", `${name} ${score} ${wins} ${losses} \n`);
        }
        fs.appendFileSync("gameStats/users.txt", `${this.name} ${this.score} ${this.wins} ${this.losses} \n`);
    }

    getLeaders() {
        this.leaderboard = require('fs').readFileSync('gameStats/leaderboard.txt', 'utf-8').split('\n').filter(Boolean);
        this.leaders = {};
        let name, score, i = -1, count = 0;
        for (let line of this.leaderboard) {
            [name, score] = line.split(" ");
            this.leaders[name] = parseFloat(score);
            if (this.score > score && i == -1)
                i = count;
            count++;
            
        }
        return i;
    }

    updateLeaderboard() {
        let i = this.getLeaders(), count = 0, name, score;
        if (i == -1)
            console.log("Your score didn't make it on the leaderboard, try again!");
        else {
            console.log("You got a new record! Take a look at the leaderboard: ")
            fs.truncateSync("gameStats/leaderboard.txt");
            for (let line of this.leaderboard) {
                if (i == count)
                    fs.appendFileSync("gameStats/leaderboard.txt", `${this.name} ${this.score}\n`);
                if (count == 4) break;
                [name, score] = line.split(" ");
                fs.appendFileSync("gameStats/leaderboard.txt", `${name} ${score}\n`);
                count++;
            }
        }
    }

    printLeaderboard() {
        for (let line of this.leaderboard) {
            let [name, score] = line.split(" ");
            console.log(name + " " + score);
        }
    }
}

module.exports = Player;