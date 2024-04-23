function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = { name: "John" };

greet.call(person, "Hello"); // Output: Hello, John!
greet.apply(person, ["Hi"]); // Output: Hi, John!

const greetJohn = greet.bind(person, "Hey");
greetJohn(); // Output: Hey, John!

// In this example, call and apply are used to invoke the greet
// function with the person object as the this value,
// along with the specified message.
// bind is used to create a new function greetJohn with the person

// object bound as this and the message set to 'Hey'.
// When greetJohn is invoked, it logs 'Hey, John!'.

// These concepts are fundamental in JavaScript and understanding
// them allows you to create and manipulate objects effectively.

// call and apply are methods used to invoke a function with a specified this value and arguments.
// call accepts arguments individually, while apply accepts arguments as an array.
// bind creates a new function with a specified this value and optional arguments,
// without invoking the function immediately.
