let user = {
  name: "John",
  age: 24,
  fullName: {
    first: "John",
    last: "Doe",
  },
};

const {
  fullName: { first, last },
} = user;

console.log(first + " " + last);
