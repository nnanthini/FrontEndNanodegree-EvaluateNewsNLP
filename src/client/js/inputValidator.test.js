import { validateFormInput } from './inputValidator'

const regEx = /^http/;

test('https://www.google.com', () => {
    expect('https://www.google.com').toMatch(regEx);
});

test('http://www.google.com', () => {
    expect('http://www.google.com').toMatch(regEx);
});

test('This is some text', () => {
    expect('This is some text').not.toMatch(regEx);
})
  