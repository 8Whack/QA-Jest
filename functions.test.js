const { TestWatcher } = require('jest');
let {returnTwo, greeting, add, divide, subtract, multiply} = require('./functions.js');

test('This is to test if 2 equals 2', ()=>{
    expect(returnTwo()).toBe(2)
});

test('Testing the greeting function', ()=>{
    expect(greeting('jack')).toBe('Hello, jack');
});

test('testing the subtract', ()=> {
    expect(subtract(4, 2)).toBe(2);
    expect(typeof subtract()).toBe('number');
});

test('testing the multiply', ()=> {
    expect(multiply(4, 2)).toBe(8);
    expect(typeof multiply()).toBe('number');
});

test('testing the divide', ()=> {
    expect(divide(4, 2)).toBe(2);
    expect(typeof divide()).toBe('number');
});


describe('Testing Math functions', ()=>{
    test('testing the add function for proper addition', ()=>{
        expect(add(1, 3)).toBe(4)
    });
    
    test('testing the subtract', ()=> {
        expect(subtract(4, 2)).toBe(2);
        expect(typeof subtract()).toBe('number');
    });
    
    test('testing the multiply', ()=> {
        expect(multiply(4, 2)).toBe(8);
        expect(typeof multiply()).toBe('number');
    });
    
    test('testing the divide', ()=> {
        expect(divide(4, 2)).toBe(2);
        expect(typeof divide()).toBe('number');
    });
    
})