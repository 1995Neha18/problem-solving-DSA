// 5 5
// 1 5 1 3 2

function Subarray(n, m, array) {
  let count = 0;
  let sum = 0;
  let i = 0;
  let j = 0;

  while (i < n) {
    if (sum + array[i] < m) {
      sum += array[i];
      count += i - j + 1;
      i++;
    } else {
      sum -= array[j];
      j++;
    }
  }
  return count;
}
console.log(Subarray(5, 5, [1, 5, 1, 3, 2]));

function Subarray(n, m, array) {
  let count = 0;
  let sum = 0;
  let i = 0;
  let j = 0;

  while (i < n) {
    // Expand the window by adding the current element to the sum
    sum += array[i];

    // If the sum exceeds or equals m, contract the window from the left side
    while (sum >= m) {
      sum -= array[j];
      j++;
    }

    // Update count by adding the number of valid subarrays
    count += i - j + 1;

    // Move to the next element
    i++;
  }

  return count;
}

console.log(Subarray(5, 5, [1, 5, 1, 3, 2])); // Output: 8
