const fibo = (n) => {
  if (n <= 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

// Calculate fibonacci number for n = 5
const results = fibo(5);
console.log(results);

// { with memoisation }

// const fib = (n, memo) => {
//   memo = memo || {};

//   if (memo[n]) return memo[n];

//   if (n <= 1) return 1;
//   return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
// };
// let result = fib(5);
// console.log(result);

const fibi = (n, memo) => {
  memo = memo || {};
  if (memo[n]) return memo[n];

  if (n <= 1) return 1;
  return (memo[n] = fibi(n - 1, memo) + fibi(n - 2, memo));
};

console.log("hi");
console.log(fibi(5));
console.log(fibi(9));
console.log(fibi(5));



const fibb = (n, memo) => {
 
 memo = memo || {}
 if(memo[n]) return memo[n]

  if(n <= 1) return 1
  return memo[n] = fibb(n - 1, memo) + fibb(n - 2, memo)
}

const result = fibb(9)
console.log(result)



