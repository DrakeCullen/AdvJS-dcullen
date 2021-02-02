const Player = require("./player.js")
const readline = require('readline-sync');

let playing = true;

while(playing) {
    playing = readline.keyInYN("Would you like to play?");
    if(!playing) break;
    let p = new Player();
    p.play();
}


/*
    What to add:
    * Alter board when flag or selected
        - Lose if bomb selected
        - Add one to flagged bombs if bomb successfully flaged
        - If a 0 is selected, clear out all sorrounding zeros
        - If non-zero value selected, show value
    * Create some sort of time function in player
        - This will be used for score
    * Make it so that the player can read and write to file
        - Maybe keep track of top 5 scores?
    

*/