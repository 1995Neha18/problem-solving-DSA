function Subarray(n, k, array) {
  let flag = "No";
  let sum = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    while (sum < k && j < n) {
      sum += array[j];
      j++;
    }
    if (sum == k) {
      flag = "Yes";
    }
    sum -= array[i];
  }
  console.log(flag);
}
Subarray(5,3,[1, 2, 1, 3, 4])

// 5 3
// [1, 2, 1, 3, 4]
