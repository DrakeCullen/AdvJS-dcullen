const UI = require('../ui.js');

let ui = new UI(1);

test('easy difficulty should have 6 rows and 6 columns', () => {
    expect(ui.getDifficulty(1)).toBe(6);
});

test('medium difficulty should have 8 rows and 8 columns', () => {
    expect(ui.getDifficulty(2)).toBe(8);
});

test('hard difficulty should have 12 rows and 12 columns', () => {
    expect(ui.getDifficulty(3)).toBe(12);
});

test('option 1 should flag an element', () => {
    expect(ui.chooseFlag('1')).toBe(true);
});

test('option 2 should not flag an element', () => {
    expect(ui.chooseFlag('2')).toBe(false);
});

test('you should not be a winner at the start of the game', () => {
    expect(ui.isWinner()).toBe(false);
});