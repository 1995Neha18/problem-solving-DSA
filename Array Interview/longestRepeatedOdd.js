// print the count of number that how of times it is repeated
// let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1];
// function longestRepeatedOdd(N, arr) {
//   //write code here
//   let count = 1;
//   let max = 0;
//   for (let i = 0; i < N; i++) {
//     if (arr[i] % 2 !== 0) {
//       if (arr[i] == arr[i + 1]) {
//         count++;
//       } else {
//         max = Math.max(max, count);
//         count = 1;
//       }
//     }
//   }
//   console.log(max);
// }
// longestRepeatedOdd(arr.length, arr);

// print the number that is repeated the most in a sequence
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1];

function longestRepeatedOdd(N, arr) {
  let count = 1;
  let max = 0;
  let mostRepeatedNumber = null; // Variable to store the most repeated number
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr[i] == arr[i + 1]) {
        count++;
      } else {
        if (count > max) {
          max = count;
          mostRepeatedNumber = arr[i];
        }
        count = 1;
      }
    }
  }
  console.log(mostRepeatedNumber); // Print the most repeated number
}

longestRepeatedOdd(arr.length, arr);
