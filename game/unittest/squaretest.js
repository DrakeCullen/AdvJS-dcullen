const Square = require('../square.js');
const assert = require('assert');

function test() {
    let square = new Square();
    assert.strictEqual(square.isVisible(), false);
    assert.strictEqual(square.isFlag(), false);
    assert.strictEqual(square.getValue(), 0);
    square.makeFlag();
    assert.strictEqual(square.isFlag(), true);
    

}

if (require.main == module) {
    test();
    console.log("All test cases succesfully passed!");
}