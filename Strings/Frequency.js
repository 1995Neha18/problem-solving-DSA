function frequency(str) {
  let obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}
console.log(frequency("ishaan"));
