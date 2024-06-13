// write code here
const array = ['apple', 'banana', 'orange'];
const result = array.map(fruit => fruit.toUpperCase());
console.log(result); // ["APPLE", "BANANA", "ORANGE"]

const array = [1, 3, 4, 5, 6, 7, 8];
const result = array.map(num => (num % 2 === 0) ? 'even' : 'odd');
console.log(result); // ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array = [1, -3, 2, 8, -4, 5];
const result = array.map(num => Math.abs(num));
console.log(result); // [1, 3, 2, 8, 4, 5]



