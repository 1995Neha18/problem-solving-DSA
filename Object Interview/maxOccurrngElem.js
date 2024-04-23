function maxOccurringElement(arr, n) {
  let max = -Infinity;
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let occurrence = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      occurrence = key;
    }
  }
  console.log(occurrence);
}
maxOccurringElement([3, 2, 3, 6, 9], 5);
