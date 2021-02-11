const Board = require('../board.js');

let boardDefault = new Board();

test('default rows should be 12', () => {
    expect(boardDefault.getRows()).toBe(12);
});

test('default columns should be 12', () => {
    expect(boardDefault.getColumns()).toBe(12);
});

test('zero flagged bombs to start', () => {
    expect(boardDefault.getFlaggedBombs()).toBe(0);
});

test('-1 1 is not a valid position', () => {
    expect(boardDefault.isValidPos(-1,1)).toBe(false);
});

test('0 0 is a valid position', () => {
    expect(boardDefault.isValidPos(0,0)).toBe(true);
});

test('12 12 is not a valid position', () => {
    expect(boardDefault.isValidPos(12,12)).toBe(false);
});

test('11 11 is a valid position', () => {
    expect(boardDefault.isValidPos(11,11)).toBe(true);
});

let board = new Board(6, 6);

test('default rows should be 6', () => {
    expect(board.getRows()).toBe(6);
});

test('default columns should be 6', () => {
    expect(board.getColumns()).toBe(6);
});

test('zero flagged bombs to start', () => {
    expect(board.getFlaggedBombs()).toBe(0);
});

test('-1 1 is not a valid position', () => {
    expect(board.isValidPos(-1,1)).toBe(false);
});

test('0 0 is a valid position', () => {
    expect(board.isValidPos(0,0)).toBe(true);
});

test('6 6 is not a valid position', () => {
    expect(board.isValidPos(6,6)).toBe(false);
});

test('5 5 is a valid position', () => {
    expect(board.isValidPos(5,5)).toBe(true);
});