const Square = require('../square.js');

var square = new Square();

test('each square should initially not be visible', () => {
    expect(square.isVisible()).toBe(false);
});

test('each square is not a flag to start', () => {
    expect(square.isFlag()).toBe(false);
});

test('the squares value is initially 0', () => {
    expect(square.getValue()).toBe(0);
});

test('after the previous method, the square should be a flag', () => {
    square.makeFlag();
    expect(square.isFlag()).toBe(true);
});

test('the square should now be visible', () => {
    square.makeVisible();
    expect(square.isVisible()).toBe(true);
});

test('the makeVisible() method should remove the flag attribute from square', () => {
    expect(square.isFlag()).toBe(false);
});

test('the squares value should be -1', () => {
    square.setValue(-1);
    expect(square.getValue()).toBe(-1);
});

test('the square should print as an X', () => {
    expect(square.printSquare()).toBe('X');
});

/*function test() {
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
}*/