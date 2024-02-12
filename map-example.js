/**
 * 
 *  Map
When the map() method is applied to an array, it generates and returns a new array with modifications. This method accepts a callback function as its parameter.
note: In the call-back function, we write the logic in such a way that it operates on each of the elements in the duplicate array and returns a modified element.
 */

// original Array

const originalArray = [1, 2, 3, 4, 5];

// Using map method to create a new arrya with doubled values

const doubledArray = originalArray.map((number) => number * 2);

// Output the original and new arrays
console.log('Original Array:', originalArray);
console.log('Doubled Array:', doubledArray);
