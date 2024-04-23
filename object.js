// *Problem-1.  Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyByTwo(obj){
//   for(key in obj){
//     if(obj[key] == Number){
//      // obj[key] = obj[key]*2;
//      obj[key] *= 2;
//     }
//   }
// }

// multiplyByTwo(nums)
// console.log(nums);

// *Problem-2. What's the output of the following question.

const a = {};
const b = { key: "b" }; // 123
const c = { key: "c" }; // 456

a[b] = 123; // a["[object object"]
a[c] = 456; // a["[object object"]

console.log(a[b]); // 456

// *Problem-3. What's the output of this

console.log([..."Lydia"]);

const user = {name: "Lydia", age: "24"}
const admin = {admin: true, ...user}
console.log(admin);
