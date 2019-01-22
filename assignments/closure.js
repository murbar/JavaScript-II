// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer() {
  const enclosedVar = 'This is';

  function inner() {
    return `${enclosedVar} a closure.`;
  }

  return inner();
}
console.log(outer());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return count += 1;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment() {
      return count += 1;
    },
    decrement() {
      return count -= 1;
    }
  }
};

const newCounter2 = counterFactory();
console.log(newCounter2.increment()); // 1
console.log(newCounter2.increment()); // 2
console.log(newCounter2.increment()); // 3
console.log(newCounter2.decrement()); // 2
