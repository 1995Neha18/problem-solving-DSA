function validParenthesis(str) {
  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      result.push(obj[str[i]]);
    } else if (str[i] == "}" || str[i] == ")" || str[i] == "]") {
      if (result[result.length - 1] == str[i]) {
        result.pop();
      } else {
        console.log("unbalanced");
        return;
      }
    }
  }
  console.log("balanced");
}

validParenthesis("(((((((((())))))))))");
validParenthesis("(((((((((())))))]]]]");
validParenthesis("[()]{}{[()()]()}");
validParenthesis("[()]{}{[()()]()}");
validParenthesis("{[(]}");
validParenthesis("{(([])[])[]]}");
validParenthesis("[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]");
