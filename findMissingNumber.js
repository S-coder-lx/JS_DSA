// Find Missing Number in Sequence
// Input: numbers = [1,3,0]
// Output: 2
// Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array

const numbers = [3, 0, 4, 2, 1];

function findMissingNumberInSequence(numbers) {
  for (let i = 0; i <= numbers.length; i++) {
    if (!numbers.includes(i)) {
      return i;
    }
  }
}

//O(n^2)

console.log(findMissingNumberInSequence(numbers));

function findMissingNumberInSequenceMath(numbers) {
  const n = numbers.length;
  const sum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum - actualSum;
  console.log({ sum }, { actualSum });
}
findMissingNumberInSequenceMath(numbers);
