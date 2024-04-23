function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
}

let input = document.getElementById("input");

function goBuy(item) {
  console.log(`Buy: ${item}`);
}

let betterGoBuy = debounce(goBuy, 3000);

input.addEventListener("keyup", function (e) {
  betterGoBuy(e.target.value);
});

   let prev = 0;
   const now = Date.now()
   if(now - prev > delay){
     prev = now
     return func(...args)
   }


   
function greet(name, callback) {
  return callback(name);
}

function sayHello(name) {
  // return `Hello ${name}`
  return "Hello"+ " " + name;
}

console.log(greet("John", sayHello));

// function bebounce(func, delay) {
//   let debouncetimerrr;

//   return function (...args) {
//     clearTimeout(debouncetimerrr);
//     debouncetimerrr = setTimeout(() => func(...args), delay);
//   };
// }

// let input = document.getElementById("input");

// function goBuy(item) {
//   console.log(`Buy: ${item}`);
// }

// let bettergoBuy = bebounce(goBuy, 1000);

// input.addEventListener("keyup", function (e) {
//   bettergoBuy(e.target.value);
// });
