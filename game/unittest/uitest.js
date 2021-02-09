const UI = require('../ui.js');
const assert = require('assert');

function test() {
    let ui = new UI(1);
    assert.strictEqual(ui.getDifficulty(1), 6);
    assert.strictEqual(ui.getDifficulty(2), 8);
    assert.strictEqual(ui.getDifficulty(3), 12);
    assert.strictEqual(ui.chooseFlag('1'), true);
    assert.strictEqual(ui.chooseFlag('2'), false);
    assert.strictEqual(ui.isWinner(), false);
}


if (require.main == module) {
    test();
    console.log("All test cases succesfully passed!");
}