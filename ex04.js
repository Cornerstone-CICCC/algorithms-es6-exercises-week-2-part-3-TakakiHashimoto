// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

function sumOfDigits(n) {
  // Your code here
  if (n.length === 0){
    return 0;
  }

  let first = n[0];
  n.splice(0, 1)
  return first + sumOfDigits(n);
}

console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20
