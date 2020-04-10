import { handleSubmit } from './formHandler'
import { TestScheduler } from 'jest';

const test1 = { userInput: 'formText', modeOfUserInput: 'tweet' };
const test2 = { userInput: 'formText', modeOfUserInput: 'document' };

//Checks if object contains the appropriate property and property values
test('test1', () => {
    expect(test1).toHaveProperty('userInput');
    expect(test1).toHaveProperty('modeOfUserInput', 'tweet');
    expect(test1).not.toHaveProperty('modeOfUserInput', null);
});

test('test2', () => {
    expect(test2).toHaveProperty('userInput');
    expect(test2).toHaveProperty('modeOfUserInput', 'document');
    expect(test2).not.toHaveProperty('modeOfUserInput', null);
});
   




