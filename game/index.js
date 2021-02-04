const Player = require("./player.js")
const readline = require('readline-sync');

let playing = true;

while (playing) {
    playing = readline.keyInYN("Would you like to play?");
    if (!playing) break;
    let p = new Player();
    p.play();
}


/*
    What to add:
    * Create some sort of time function in player
        - This will be used for score
    * Make it so that the player can read and write to file
        - Maybe keep track of top 5 scores for each difficulty?


    Bugs:
    * Make sure that the row and column are in range

*/