//Count the number of each fruits without repeating the name of the fruits which occurs again.
const fruits = [
 { Apple: 4, Orange: 7, Grapes: 3 },
 { Guava: 6, Lemon: 4, Banana: 8 },
 { Orange: 5, Pineapple: 7, Apple: 7 },
];

const countedFruits = {};

fruits.forEach((element) => {
 // console.log(element);   output: whole object will be printed
 for (let value in element) {
   // console.log(key);      output: all keys existing inside the object is printed
   if (countedFruits[value]) {
     // above object
     countedFruits[value] = countedFruits[value] + element[value]; // output: If in the above object, there is a key which already exist then only increment the counting inside the key.
   } else {
     countedFruits[value] = element[value]; // output: If the key doesn't exist inside the object, then add the key as well as its value i..e, element[value].
     // console.log(countedFruits[value]);
   }
 }
});

console.log(countedFruits);