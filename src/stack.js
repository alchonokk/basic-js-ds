const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 let stack= [];
class Stack {
  push(element) {
    stack.push(element);
    // remove line with error and write your code here
  }

  pop() {
    return stack.pop();
    // remove line with error and write your code here
  }

  peek() {
    return stack[stack.length-1];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
