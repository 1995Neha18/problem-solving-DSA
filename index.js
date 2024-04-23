// greetings();
// console.log(x);

// function greetings() {
//   console.log("Hello Neha!");
// }

// let x = 5;
// console.log(greetings);

// --------------------------------
// let x;

// if(x ==1 && x==2 && x==3){
//  console.log("Hello World!");
// }
// Assign a value to the x, so that it can satisfy all three conditions and can print "Hello World!".

// let x = {
//    value: 1,
//    toString: function(){
//      return this.value++;
//    }
// };

// if(x == 1 && x == 2 && x == 3){
//   console.log("Hello World!");
// }
//Note: In the above code there is a comparison between Non-primitive & Primitive datatypes,
// Here non-primitive datatype is converted into primitive with the help of toString function.
// So, that the value of x will be equals to 1,2 then 3 after increments.

// ---------------------xx-----------------------

// { Closures } Interview asked questions :-

// *Problem:1

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; // shadowing means here the value of count is being shadowed inside function scope
//     console.log(count); // 1
//    }
//    console.log(count); // 0
// })();

// *Problem:2

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }
// var addSix = createBase(6);
// addSix(10); // 16
// addSix(21); // 27

// *Problem:3 Optimisation using closure

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

// let's optimize this

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;

//    }
//     return function (index) {
//       console.log(a[index]);
//     };
// }

// const closure = find()
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// *Problem:4 Block scope and setTimeOut

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// function b() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function (i) {
//       console.log(i);
//     }, i * 1000, i);
//   }
// }
// b();

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   inner(i);
// }

// function c() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// c();

// *Problem:5 Make this run only once
// let sub = "JavaScript";
// function isStarted(){
//   console.log("Learning",sub)
// }
// isStarted();
// isStarted();
// isStarted();
// isStarted();
// isStarted();

//Now, If I want to make the above function run only once.
// let sub = "JavaScript";
// function isStarted() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Not Started");
//     } else {
//       console.log("Learning", sub);
//       called++;
//     }
//   };
// }
// let getToKnow = isStarted();
// getToKnow();
// getToKnow();
// getToKnow();
// getToKnow();

// *Problem:6



