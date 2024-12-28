---
tags:
  - JavaScript
---
## JavaScript Programming Basics

JavaScript is a dynamic programming language that is used to create interactive web pages and applications. Here are the basic concepts of JavaScript programming:

### Variables
Variables are used to store data. They are declared using the `var`, `let`, or `const` keywords. For example:

```js
let age = 25;
const name = "John";
```

### Data Types
JavaScript has several primitive data types: numbers, strings, booleans, `null`, `undefined`, and `Symbol`. There are also composite types: objects and arrays.

### Operators
Operators are used to perform operations on variables and values. For example, arithmetic operators (`+`, `-`, `*`, `/`), comparison operators (`>`, `<`, `==`, `===`), and logical operators (`&&`, `||`, `!`).

### Conditionals
Conditional constructs, such as `if-else` and `switch`, allow you to execute different code depending on a condition. For example:

```js
if (age > 18) {
console.log("You are an adult");
} else {
console.log("You are a minor");
}
```

### Loops
Loops are used to execute a block of code repeatedly. The most common loops are `for`, `while`, and `do-while`. For example:

```js
for (let i = 0; i < 5; i++) {
console.log(i);
}
```

### Functions
Functions are reusable blocks of code. They are declared with the `function` keyword and can take arguments and return values. For example:

```js
function greet(name) {
return "Hello, " + name + "!";
}

let greeting = greet("John");
console.log(greeting);
```

### Objects and Arrays
Objects are used to store collections of data and more complex entities. Arrays are ordered collections of values. For example:

```js
let person = {
name: "John",
age: 30
};

let numbers = [1, 2, 3, 4, 5];
```

Once you've learned these basics, you'll be able to start writing simple JavaScript programs. Further training includes working with the DOM (Document Object Model) to manipulate web pages, event handling, AJAX for asynchronous requests, and more.

Citations:
[1] https://habr.com/ru/companies/ruvds/articles/416375/
[2] https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics
[3] https://ru.hexlet.io/courses/js-basics
[4] https://htmlacademy.ru/courses/343/run/17
[5] https://html-plus.in.ua/rabota-s-massivami-obektov-v-javascript/