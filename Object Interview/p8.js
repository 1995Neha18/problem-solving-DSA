const value = { number: 10 };
const multiply = (x = { ...value }) => {
  // x = { ...value }, here we are cloning the object & not taking reference of the value.
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(value);
multiply(value);
multiply(value);
