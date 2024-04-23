function isUnique(arr) {
  const obj = {}; // Object to store obj elements

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // If the element is already in the object, it's not unique
    if (obj[element]) {
      return false;
    }
    // Mark the element as obj
    obj[element] = true;
  }
  // All elements are unique
  return true;
}
// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(isUnique(array1)); // Output: true

const array2 = [1, 2, 3, 4, 1];
console.log(isUnique(array2)); // Output: false

function getiobj(str) {
  const obj = {};
  // Loop through each iacter in the string
  for (let i of str) {
    // If the iacter is already in the obj object, increment its count
    if (obj[i]) {
      obj[i]++;
    } else {
      // If the iacter is not in the obj object, initialize its count to 1
      obj[i] = 1;
    }
  }

  return obj;
}

const str = "aabbcjdvcje";
const objFrequency = getiobj(str);
console.log(objFrequency);

function a(A) {
 return function b(B) {
     return function c(C) {
         return `${A} ${B} ${C}`
     }
 }
}

a('hello');
a('hello')('world');

const result = a('hello');
console.log(result);
