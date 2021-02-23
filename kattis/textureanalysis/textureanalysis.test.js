const textureanalysis = require('./textureanalysis')

test('If all the pixels are black, the result should be even.', () => {
    expect(textureanalysis.answer('*************************************')).toBe('EVEN');
});

test('Only one mistake in the beginning.', () => {
    expect(textureanalysis.answer('*..*...*...*...*...*...*...*')).toBe('NOT EVEN');
});

test('Only one mistake at the end.', () => {
    expect(textureanalysis.answer('*...*...*...*...*...*..*')).toBe('NOT EVEN');
});

test('Only one mistake in the middle.', () => {
    expect(textureanalysis.answer('*...*...*...**...*...*')).toBe('NOT EVEN');
});

test('Pattern that doesnt repeat.', () => {
    expect(textureanalysis.answer('*.....................................*')).toBe('EVEN');
});

test('One white pixel.', () => {
    expect(textureanalysis.answer('**********.***********')).toBe('NOT EVEN');
});