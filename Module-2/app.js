// You have an array like “ **var x = [ 10, 20, 30]** “

// Now sum all those items using for loop. The sum Result is 60.

var x = [10, 20, 30];

// using for loop
const forLoop = (x) => {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
};
console.log(forLoop(x));

// using while loop
const whileLoop = (x) => {
  let sum = 0,
    start = 0;

  while (x.length > start) {
    sum += x[start];
    start++;
  }

  return sum;
};
console.log(whileLoop(x));

// using for of
const forOf = (x) => {
  let sum = 0;

  for (const item of x) {
    sum += item;
  }

  return sum;
};
console.log(forOf(x));

// recursion function
function recursive(x, i) {
  if (i === x.length - 1) {
    return x[i];
  }

  return x[i] + recursive(x, i + 1);
}
var sum = recursive(x, 0);
console.log(sum);

// using reduce
const reduce = x.reduce((cur, acc) => {
  return cur + acc;
}, 0);
console.log(reduce);

// using for each
let add = 0;
x.forEach((item) => (add += item));
console.log(add);
