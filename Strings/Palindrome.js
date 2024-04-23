function isPalindrome(str) {
  let ans = "Yes";
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      ans = "No";
      break;
    }
    i++;
    j--;
  }
  return ans;
}
console.log(isPalindrome("naman"));

function isPalindrome(str) {
  let ans = "Yes";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      ans = "No";
      break;
    }
  }
  return ans;
}
console.log(isPalindrome("naman"));
