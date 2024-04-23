// const throttle = (func, delay) => {
//  // Previously called time of the function
//  let prev = 0;
//  return function(...args){
//    // Current called time of the function
//    let now = new Date().getTime();

//    // If difference is greater than delay call the function again.
//    if (now - prev > delay) {
//      prev = now;

//      return func(...args);
//    }
//  };
// };

// let input = document.getElementById("input");

// function goBuy(item) {
//  console.log(`Buy: ${item}`);
// }

// let betterGoBuy = throttle(goBuy, 3000);

// input.addEventListener("keyup", function (e) {
//  betterGoBuy(e.target.value);
// });

const throttle = (func, delay) => {
  let prev = 0;
  return function (...arg) {
    const now = Date.now();
    if (now - prev > delay) {
      prev = now;
      return func(...arg);
    }
  };
};

let input = document.getElementById("input");

function goBuy(item) {
  console.log(`Buy: ${item}`);
}

let betterGoBuy = throttle(goBuy, 1000);

input.addEventListener("keyup", function (e) {
  betterGoBuy(e.target.value);
});



