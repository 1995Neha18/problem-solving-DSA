// What is destructuring in object.
let user = {
  name: "John",
  age: 24,
};
console.log(user.name);
// Now if we want to log the name then we need to write
// user.name to access name property iside the user object.

// Destructuring is a technique of extracting specific property from an object.

const { name } = user;
// Here, basically we are extracting name property from the user object.
// Now we can directly console name and we will get the output.
console.log(name);
