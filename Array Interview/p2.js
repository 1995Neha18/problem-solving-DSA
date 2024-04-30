// function validParenthesis(str) {
//   let result = [];
//   let obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       result.push(obj[str[i]]);
//     } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
//       if (result[result.length - 1] == str[i]) {
//         result.pop();
//       } else {
//         console.log("Unbalanced");
//         return;
//       }
//     }
//   }
//   console.log("Balanced");
// }
// validParenthesis("(())");
// validParenthesis("(()]");
// validParenthesis("[[]]");

// [ "[",  ]

function validParenthesis(str) {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      result.push(obj[str[i]]);
      // console.log(obj[str[i]]);
    } else if (
      (str[i] == ")" && str[i] == result[result.length - 1]) ||
      (str[i] == "}" && str[i] == result[result.length - 1]) ||
      (str[i] == "]" && str[i] == result[result.length - 1])
    ) {
      result.pop();
    }
    // else {
    //   console.log("Unbalanced");
    //   return;
    // }
  }
  console.log(result);
  // if (result.length == 0) {
  //   console.log("Balanced");
  //   return;
  // }
  // console.log("Unbalanced");
}
// validParenthesis("(())");
// validParenthesis("(()]");
// validParenthesis("[()]");

// validParenthesis("(((((((((())))))))))"); // Balanced
// validParenthesis("(((((((((())))))]]]]"); // Unbalanced
// validParenthesis("[()]{}{[()()]()}"); // Balanced
// validParenthesis("{[(]}"); // Unbalanced
// validParenthesis("{(([])[])[]]}"); // Unbalanced
validParenthesis("[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]"); // Balanced
