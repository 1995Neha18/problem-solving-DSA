// { Strings: When a textured data are stored inside a variable then it is known as strings. }

let str = "Hello World";
console.log(str);

// Different way of wriring console.log

console.log`Hello World`;
// Note: console.log is a function and we can pass any value inside it.
// So using backticjs instead of brackets we can also use console.log which gives an array of strings as output.

const str1 = "Neha";
console.log`Hello World ${str1} how are ${"you"}?`;
// Note: Here we can pass any value inside the console.log and it will give an array of strings as output when using backticks
// & the values inside the template literal will be written as a seperate variable.

// 1. Finding the length of the string.
const str2 = "Goodmorning";
const str3 = "Good afternoon neha";
console.log(str2.length);

// 2. Accessing the character of the string.
console.log(str2[3]);
console.log(str2.charAt(5));
console.log(str2.charAt(6));

// 3. Finding the index of the character or searching characters.
console.log(str2.indexOf("n"));
console.log(str2.lastIndexOf("o"));
console.log(str3.lastIndexOf("a"));
console.log(str3.lastIndexOf("e"));
console.log(str3.startsWith("a"));

//4. Extracting the string parts.
console.log(str2.substring(10));
console.log(str2.substring(0, 4));
console.log(str2.slice(0, 4));

// 5. Replacing the string content.
console.log(str2.replace("morning", "evening"));

// 6. Converting to upper case and lower case.
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// 7. Concatenating the string.
const newStr = str2.concat("Javascript");
console.log(newStr);

// 8. Converting an object into string.
const obj1 = { name: "Neha", age: 28 };

// console.log(String(obj1));
console.log(JSON.stringify(obj1));

// 9. Converting a string(in json format) into an array.
const str4 = "Welcome to Javascript";
console.log(str4.split(""));
const str5 = '["Css","Html","Javascript","React","Nodejs"]';
const array = JSON.parse(str5);
console.log(array);

// { DSA Questions based on Strings }

// 1. Write a function called the truncate that checks the length of a given string, and if it surpasses a specified max length,it replaces the end of the string with the ellipsis character "...", So that the length matches the maximum length.
// input:
// str = "Javascript Learning";
// maxLength = 10;
// output: "Javascript..."

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  } else return str;
}
console.log(truncate("Javascript Learning", 10));

// 2. Write a function that checks whether a given string is a palindrome or not.
// input: x = 121; output: true
// input: x = 10; output: false

// Palindrome number -
// function isPalindrome(x) {
//   if (x < 0) {
//     return false;
//   } else {
//     return x === +x.toString().split("").reverse().join("");
//   }
// }
// console.log(isPalindrome(121));

// Approach - 1 (T.C - O(n))

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

// Palindrome string - (T.C - O(n/2))

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

// 3. Write a function that takes a string as input and returns the string reversed.
// input: "Hello World";
// output: "dlroW olleH"

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello World"));

let s1 = "naman";
let ans = "Yes";
let i = 0;
let j = s1.length - 1;
while (i < j) {
  if (s1[i] !== s1[j]) {
    ans = "No";
    break;
  }
  i++;
  j--;
}
console.log(ans);
