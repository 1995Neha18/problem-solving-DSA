// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("John", 29);
// const person2 = new Person("Ayush", 24);
// console.log(person1);
// console.log(person2);

// // { Prototype }

// // The prototype is an object shared among all instances of a constructor function.
// // Properties and methods added to the prototype are accessible to all instances.

// Person.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// };

// person1.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
// person2.sayHello(); // Output: Hello, my name is Jane and I'm 25 years old.

// Person.prototype.sayHello = function () {
//   console.log(`Hello my is ${this.name} and I'm ${athis.age} years old.`);
// };

// person1.sayHello();
// person2.sayHello();

function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: "John" };

greet.call(person, "Hello");
greet.apply(person, ["Hi"]);

const bindMethod = greet.bind(person, "Hello");
bindMethod();

// --------------------- Asynchronous operation using callbacks ----------------------------- 

function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "john", age: 24 };
    callback(data, null);
  }, 2000);
}

fetchData((error, data) => {
   if(error){
    console.log(error)
   }
   else {
    console.log(data)
   }
})

function promiseData() {
 return new promise((resolve,reject) =>{
  setTimeout(() => {
   const data = { id: 1, name: "john", age: 24 };
   resolve(data);
 }, 2000);
 })
 
}

promiseData((error, data) => {
   if(error){
    console.log(error)
   }
   else {
    console.log(data)
   }
})
