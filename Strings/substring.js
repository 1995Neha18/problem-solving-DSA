function subStrUnderCond(s) {
  //write code here

  let result = 0;
  let n = s.length;

  for (i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      if (s[i] == s[j]) result++;
    }
  }
  return result;
}
console.log(subStrUnderCond("abcab")); // ( a,b,c,abc, bca, cab, bcab )

// function masaiPalSubString(S) {
//   //write code here
//   function isPalindrome(str) {
//     let ans = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       ans = ans + str[i];
//     }
//     if (str == ans) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let max = -Infinity;
//   for (let i = 0; i < S.length; i++) {
//     let res = "";
//     for (let j = i; j < S.length; j++) {
//       res = res + S[j];
//       if (isPalindrome(res) && res.length > max) {
//         max = res.length;
//       }
//     }
//   }
//   console.log(max); // thisracecarisgood
// }
