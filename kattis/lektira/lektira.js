"use strict";

const readline = require('readline');

function reverse(word) {
    return word.split("").reverse().join("");
}

function split(phrase, i, j) {
    let wordOne = phrase.substr(0, i);
    let wordTwo = phrase.substr(i, j);
    let wordThree = phrase.substr(i + j, phrase.length - i - j);
    wordOne = reverse(wordOne);
    wordTwo = reverse(wordTwo);
    wordThree = reverse(wordThree);
    return (wordOne + wordTwo + wordThree);
}

function answer(input) {
    let best = input;
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; i + j < input.length; j++) {
            if (split(input, i, j) < best)
                best = split(input, i, j);
        }
    }
    return best;
}

function solve() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.on('line', (line) => {
        console.log(answer(line));
    });

}


if (require.main == module) {
    solve();
}

module.exports = {
    answer : answer,
}