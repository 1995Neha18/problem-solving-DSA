// let arr = [12, 35, 1, 10, 34, 1];
// let arr2 = [10, 5, 10];

function secMax(arr) {
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secMax([12, 35, 1, 10, 34, 1]));
console.log(secMax([10, 5, 10]));
