const numbers = [1, 2, 3, 4, 5];

// Using reduce to find the sum of the array
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log('Sum of the numbers:', sum);
