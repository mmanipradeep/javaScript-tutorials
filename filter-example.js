/**
 * Filter
Similarly, when we use the filter method, it also takes a call-back function as a parameter and returns a new modified array. This method also does not change the original array, instead creates a duplicate of the original array and performs filtration based on the logic passed in the call-back function as paramter. 
note: when we pass the call-back function as a parameter, we write the logic in the function in such a way that it filters each of the elements in the duplicate array and returns only those elements that pass the filter condition.
 */

// Employee data array with experience field
const employeeData = [
  { name: 'Alice', experience: 25 },
  { name: 'Bob', experience: 32 },
  { name: 'Charlie', experience: 28 },
  { name: 'David', experience: 35 },
];

// Using the filter method to get employees with over 30 years of experience
const experiencedEmployees = employeeData.filter(
  (employee) => employee.experience > 30
);

// Output the original array
console.log('Original Employee Data:', employeeData);

// Output the filtered array
console.log('Experienced Employees:', experiencedEmployees);
