import { onBlur } from './blurHandler'

test('String length', () => {
    const inputString = '';
    const spaceString = ' ';
    const textString = 'sometext';
    expect(inputString).toHaveLength(0);
    expect(spaceString).not.toHaveLength(0);
    expect(textString).not.toHaveLength(0);
});
