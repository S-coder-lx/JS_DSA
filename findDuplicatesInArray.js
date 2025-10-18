//Find Duplicates in Array

// Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

// Input
// numbers: number[]: An array of integers

// should return boolean after cheching if exist true else false

const numbers = [5, 7, 1, 3]; // false
const dupnumbers = [10, 7, 1, 0, 9, 1, 2, 10, 0, 0]; //true

//brute force approch

function findDuplicatesBrute(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// findDuplicatesBrute(dupnumbers);
// console.log(findDuplicatesBrute(dupnumbers));

function findDuplicatesBruteArr(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  return duplicates;
}

// console.log(findDuplicatesBruteArr(dupnumbers));
// console.log(findDuplicatesBruteArr(numbers));

// Time Complexity: O(n³) - worst case due to nested loops + includes() check
// Space Complexity: O(n) - for storing duplicates

// Better Approch

function findDuplicatesHashMap(arr) {
  const frequency = new Map();
  const duplicates = [];
  for (const num of arr) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  for (const [key, value] of frequency.entries()) {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

console.log(findDuplicatesHashMap(dupnumbers));
