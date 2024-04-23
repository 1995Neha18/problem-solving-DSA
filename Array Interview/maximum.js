// let arr = [1, 2, 3, 4, 9, 5]

function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    arr[i] = max;
  }
  return max;
}
console.log(findMax([11, 2, 3, 4, 9, 5]));
