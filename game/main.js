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
    Bugs:
        If you flag a visible item, it make the value undefined

*/