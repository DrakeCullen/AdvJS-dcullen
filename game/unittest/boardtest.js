const Board = require('../board.js');
const assert = require('assert');

function testDefault() {
    let board = new Board();
    assert.strictEqual(board.getRows(), 12);
    assert.strictEqual(board.getColumns(), 12);
    assert.strictEqual(board.getFlaggedBombs(), 0);
    assert.strictEqual(board.isValidPos(-1, 1), false);
    assert.strictEqual(board.isValidPos(0, 0), true);
    assert.strictEqual(board.isValidPos(12, 12), false);
    assert.strictEqual(board.isValidPos(11, 11), true);
}

function test() {
    let board = new Board(6, 6);
    assert.strictEqual(board.getRows(), 6);
    assert.strictEqual(board.getColumns(), 6);
    assert.strictEqual(board.getFlaggedBombs(), 0);
    assert.strictEqual(board.isValidPos(-1, 1), false);
    assert.strictEqual(board.isValidPos(0, 0), true);
    assert.strictEqual(board.isValidPos(6, 6), false);
    assert.strictEqual(board.isValidPos(5, 5), true);
}

if (require.main == module) {
    testDefault();
    test();
    console.log("All test cases succesfully passed!");
}