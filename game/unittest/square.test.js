const Square = require('../square.js');

let square = new Square();

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