// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` and add some numbers to it using .add(), including some duplicates. 
// Verify that the Set only keeps unique values by logging it to the console.

const uniqueNumbers = new Set();
const addedNums = [1,2,3,4,5,6,7,7,7,5,5,4,4,8,8,8,9,9,10,];

for (let num of addedNums){
    uniqueNumbers.add(num)
}

const arrayedNums = [...uniqueNumbers];
// Your code here

console.log(uniqueNumbers);
