const lekitra = require('./lektira')

test('3 letter strings should not change.', () => {
    expect(lekitra.answer('lid')).toBe('lid');
});


test('A string that is in alphabetical order should not change.', () => {
    expect(lekitra.answer('abcdefghi')).toBe('abcdefghi');
});


test('The first five letters are backwards, the sixth is a pivot, the last three are the least significant.', () => {
    expect(lekitra.answer('edcbafghi')).toBe('abcdefihg');
});

test('"colora" is the first word, "d" is the second word, and "o" is the third word.', () => {
    expect(lekitra.answer('colorado')).toBe('arolocdo');
});