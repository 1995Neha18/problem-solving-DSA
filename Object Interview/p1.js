// How to access values in objects.
const user1 = {
  name: "John Doe",
  age: 24,
};
console.log(user1.name); // John Doe
console.log(user1.age); // 24

// How to update values in objects.
const user2 = {
  name: "John Doe",
  age: 24,
};
user2.name = "Ayush Singh";
console.log(user2); // { name: 'Ayush Singh', age: 24 }

// How to delete any property from an object.
const user3 = {
  name: "John Doe",
  age: 24,
};
delete user3.age;
console.log(user3);
// user3 = {
//   name: "John Doe",
// };

// What will be the output of this function.

const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func); // output will be 5 only, delete a; cannot affect the output
// bcz inside function delete doesn;t work in object

// How to add properties to the object.
const user4 = {
  name: "John Doe",
  age: 24,
  "Preparing object": true,
};

console.log(user4["Preparing object"]);
console.log(user4);

//How to add property dynamically.
const property = "firstName";
const name = "John Doe";

const user5 = {
  // firstName: "John Doe",
  [property]: name,
};
console.log(user5.firstName);

// How to iterate over the key and values of an object.
const obj = {
  name: "John Doe",
  age: 24,
  address: "Mumbai"
};

for (key in obj) {
  console.log(obj[key]);
}
