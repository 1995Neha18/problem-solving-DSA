// function Array(arr) {
//   let flattened = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];

//     if (typeof item === "object" && item !== null) {
//       flattened = flattened.concat(Array(item));
//     } else {
//       flattened.push(item);
//     }
//   }

//   return flattened;
// }

// const nestedArray = [1, [2, [3, 4]], 5, [6]];
// const flattenedArray = Array(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

function Array(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === "object" && item !== null) {
      flattened = flattened.concat(Array(item));
      // console.log(Array(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}
const nestedArray = [1, [2, [3, 4]], 5, [6]];
const flattenedArray = Array(nestedArray);
console.log(flattenedArray);

// { without function }
// const nesteArray = [1, [2, [3, 4]], 5, [6]];
// let flattened = [];

// for (let i = 0; i < nestedArray.length; i++) {
//   const item = nesteArray[i];

//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j++) {
//       const nestedItem = item[j];
//       flattened.push(nestedItem);
//     }
//   } else {
//     flattened.push(item);
//   }
// }

// console.log(flattened); // Output: [1, 2, [3, 4], 5, 6]
