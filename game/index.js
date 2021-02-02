const UI = require("./ui.js")
const readline = require('readline-sync');

let b;
let playing = true;

while(playing) {
    playing = readline.keyInYN("Would you like to play?");
    if(!playing) break;
    let u = new UI();
}