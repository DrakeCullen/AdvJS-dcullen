"use strict";

const readline = require('readline');

function getBlackPixels(input, pixelPos) {
    for (let i = 0; i < input.length; i++)
        if (input[i] == '*')
            pixelPos.push(i);
}

function isValid(pixelPos) {
    let diff = pixelPos[1] - pixelPos[0];
    for (let i = 0; i < pixelPos.length - 1; i++)
        if (pixelPos[i+1] - pixelPos[i] != diff)
            return "NOT EVEN";
    return "EVEN";
}

function answer(input) {
    let pixelPos = [];
    getBlackPixels(input, pixelPos);
    if (pixelPos.length == 1)
        return "EVEN";
    return isValid(pixelPos);
}

function solve() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let lineNum = 1;
    rl.on('line', (line) => {
        if (line != 'END') {
            console.log(lineNum++ + " " + answer(line));
        }
    });

}


if (require.main == module) {
    solve();
}

module.exports = {
    answer : answer
}