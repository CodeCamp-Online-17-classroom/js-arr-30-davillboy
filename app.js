// write code here
const array1 = ['apple', 'banana', 'orange'];
const result = array1.map(fruit => fruit.toUpperCase());
console.log(result); // ["APPLE", "BANANA", "ORANGE"]

const array2 = [1, 3, 4, 5, 6, 7, 8];
const result = array2.map(num => (num % 2 === 0) ? 'even' : 'odd');
console.log(result); // ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array3 = [1, -3, 2, 8, -4, 5];
const result = array3.map(num => Math.abs(num));
console.log(result); // [1, 3, 2, 8, 4, 5]



