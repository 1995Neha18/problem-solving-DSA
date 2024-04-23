function longestSubstringWithoutRepeating(s) {
  let maxLength = 0;
  const obj = {};

  for (let i = 0, j = 0; j < s.length; j++) {
    const elem = s[j];

    if (obj[elem] !== undefined && obj[elem] >= i) {
      i = obj[elem] + 1;
    }

    obj[elem] = j;

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbbbb")); // Output: 3 (longest substring without repeating characters is "abc")
console.log(longestSubstringWithoutRepeating("bbbbb")); // Output: 1 (longest substring without repeating characters is "b")
console.log(longestSubstringWithoutRepeating("pwwkew")); // Output: 3 (longest substring without repeating characters is "wke")
