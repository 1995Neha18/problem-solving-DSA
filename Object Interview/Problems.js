const obj = {
  1: "a",
  1: "b",
  [1]: "c",
};
console.log(obj["1"]);
//  In JavaScript, object keys are stored as strings,
//  even if they are defined using numerical literals.
//  When an object is created, if multiple keys with
//  the same name are specified, only the last key-value
//  pair with the same key will be stored in the object.
//  This behavior is because object keys are essentially converted to strings.


