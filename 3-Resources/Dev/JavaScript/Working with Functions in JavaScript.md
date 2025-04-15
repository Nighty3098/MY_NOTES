---
tags:
  - JavaScript
---
## Working with Functions in JavaScript

Functions in JavaScript are a key element of the language that allow you to create reusable blocks of code. Here are the main aspects of working with functions in JavaScript:

### Defining Functions

A function in JavaScript is defined using the `function` keyword, followed by the function name and parentheses containing the function parameters, if any. The body of the function is enclosed in curly braces:

```js
function greet() {
console.log("Hello, World!");
}
```

### Calling Functions

A function can be called by specifying its name followed by parentheses:

```js
greet(); // Will print "Hello, World!" to the console
```

### Parameters and Return Values

Functions can take parameters and return values. Parameters are specified in parentheses when defining a function, and the `return` operator is used to return a value:

```js
function add(a, b) {
return a + b;
}

let result = add(3, 5); // result will be 8
```

### Recursion

Recursion is the process by which a function calls itself. Recursive functions can be used to solve problems that can be broken down into smaller subproblems:

```js
function factorial(n) {
if (n === 0) {
return 1;
} else {
return n * factorial(n - 1);
}
}

let result = factorial(5); // result will be 120
```

### Closures

Closures in JavaScript occur when a function has access to variables from an outer scope. This allows a function to use variables that have been defined outside of it:

```js
function outer() {
let message = "Hello";

function inner() {
console.log(message);
}

return inner;
}

let innerFunction = outer();
innerFunction(); // Prints "Hello"
```

### Scope

The scope of variables in JavaScript determines where a variable can be used. Variables can be global or local depending on where they are declared.

Functions in JavaScript are a powerful tool for organizing code and reusing logic. Understanding how to work with functions in JavaScript is key to developing efficient and scalable applications.

Citations:
[1] https://learn.javascript.ru/advanced-functions
[2] https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions
[3] https://elbrusboot.camp/blog/kak-rabotat-s-pieriemiennymi-v-javascript/
[4] https://proglib.io/p/chto-v-korobke-kak-rabotayut-funkcii-v-javascript-2022-06-12
[5] https://code.mu/ru/javascript/book/prime/functions/basis/intro/