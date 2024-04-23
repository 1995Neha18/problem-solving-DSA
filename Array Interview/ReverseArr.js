// Reverse an array without using function

let arr = [1, 2, 3, 4, 5];
let resverseArr = [];
let count = 0;

for (let i = arr.length; i > 0; i--) {
  resverseArr[count++] = arr[i - 1];
}
console.log(resverseArr);
