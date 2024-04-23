let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: 999999999,
  mentor: {
    HTML: {
      NODE: "GFG",
    },
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

function flattenObj(obj) {
  let result = {};

  for (let i in obj) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      let temp = flattenObj(obj[i]);
      for (let j in temp) {
        // Store temp in result
        result[i + "." + j] = temp[j];
      }
    }

    // Else store ob[i] in result directly
    else {
      result[i] = obj[i]; // i is the key and obj[i] will be the value inside result obj.
    }
  }
  return result;
}

console.log(flattenObj(obj));

// { nested object }

// function flattenObject(obj, prefix = '') {
//  let flattened = {};

//  for (let key in obj) {
//    if (obj.hasOwnProperty(key)) {
//      let prefixedKey = prefix + key;

//      if (typeof obj[key] === 'object' && obj[key] !== null) {
//        Object.assign(flattened, flattenObject(obj[key], prefixedKey + '.'));
//      } else {
//        flattened[prefixedKey] = obj[key];
//      }
//    }
//  }

//  return flattened;
// }

// let obj = {
//  a: 2,
//  b: {
//    c: 3
//  }
// };

// let flattenedObj = flattenObject(obj);
// console.log(flattenedObj); // Output: { 'a': 2, 'b.c': 3 }

// -------------------------------------------------------

function deepCloneObject(obj) {
  let result = {};

  for (let key in obj) {
    if (obj[key] === null || typeof obj[key] !== "object") {
      result[key] = obj[key];
    } else {
      result[key] = deepCloneObject(obj[key]);
    }
  }

  return result;
}

console.log(
  JSON.stringify(deepCloneObject({ a: 1, b: { c: 2, d: { e: 3 } } }))
);
