const Square = require('../square.js');
const assert = require('assert');

function test() {
    let square = new Square();
    assert.strictEqual(square.isVisible(), false);
    assert.strictEqual(square.isFlag(), false);
    assert.strictEqual(square.getValue(), 0);
    square.makeFlag();
    assert.strictEqual(square.isFlag(), true);
    square.makeVisible();
    assert.strictEqual(square.isVisible(), true);
    assert.strictEqual(square.isFlag(), false);
    square.setValue(-1);
    assert.strictEqual(square.getValue(), -1);
    assert.strictEqual(square.printSquare(), 'X');

}

if (require.main == module) {
    test();
    console.log("All test cases succesfully passed!");
}