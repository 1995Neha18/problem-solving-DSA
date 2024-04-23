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

let betterGoBuy = debounce(goBuy, 1000);

input.addEventListener("keyup", function (e) {
  betterGoBuy(e.target.value);
});
