// let arr = [12, 35, 1, 10, 34, 1];
// let arr2 = [10, 5, 10];

function secMax(arr) {
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secMax([12, 35, 1, 10, 34, 1]));
console.log(secMax([10, 5, 10]));

// Another approach
// let arr = [2, 4, 5, 11, 8];

//Approach - 1
function secMax(arr) {
 // arr.sort((a, b) => a - b);
 let Largest = 1;
 let secLargest = 1;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] > Largest) {
     secLargest = Largest;
     Largest = arr[i];
   } else if (arr[i] !== Largest && arr[i] > secLargest) {
     secLargest = arr[i];
   }
 }
 return secLargest;
}

console.log(secMax([2, 4, 5, 11, 8]));

//Approach - 2 (with in-built function)
function secMax(arr) {
 // arr.sort((a, b) => a - b); // [2,4,5,8,11]
 let Largest = -1;
 let secLargest = -1;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] > Largest) {
     secLargest = Largest;
     Largest = arr[i];
   }
 }
 return secLargest;
}
console.log(secMax([2, 4, 5, 11, 8]));

// { Dry Run }
// Initial values: Largest = -1, secLargest = -1
// Iteration 1: arr[0] = 2
// 2 > -1? Yes
// secLargest = Largest => secLargest = -1 & Largest = 2
// Iteration 2: arr[1] = 4
// 4 > 2? Yes
// secLargest = Largest => secLargest = 2 & Largest = 4
// Iteration 3: arr[2] = 5
// 5 > 4? Yes
// secLargest = Largest => secLargest = 4 & Largest = 5
// Iteration 4: arr[3] = 11
// 11 > 5? Yes
// secLargest = Largest => secLargest = 5 & Largest = 11
// Iteration 5: arr[4] = 8
// 8 > 11? No
// Loop ends

