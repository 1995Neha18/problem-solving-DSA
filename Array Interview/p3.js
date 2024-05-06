// // 1. Create subarray of size 3 from the given array

// arr = [1,2,3,4,5,6,7,8,9]

// [1,2,3], [4,5,6], [7,8,9]

// let arr1 = [1, 2, 2, 3, 4, 5];
// let arr2 = [4, 4, 3, 2, 1, 1];

// find out the number of elements common on both the array.

let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [4, 4, 3, 2, 1, 1];

function sortArray(arr1, arr2) {
  arrA = arr1.sort((a, b) => a - b);
  arrB = arr2.sort((a, b) => a - b);
  
}
sortArray(arr1, arr2);
