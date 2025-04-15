---
tags:
  - JavaScript
---
## Working with Conditionals in JavaScript

Conditionals in JavaScript are the basic control flow of a program. They allow you to branch out in your program based on conditions that may or may not be met.

## Comparison Operators

Comparison operators are used to test conditions within conditional statements. JavaScript has several comparison operators:

- `===` and `!==` — check whether a value is identical or not identical to another value.
- `<` and `>` — check whether a value is less than or greater than another value.
- `<=` and `>=` — check whether a value is less than or equal to, or greater than or equal to, another value.

## Conditional Operators

Conditional operators in JavaScript are used to execute code based on a condition. JavaScript has several types of conditional operators:

- `if` — executes code if a condition is true.
- `if...else` — executes code if the condition is true, and other code if the condition is false.
- `switch` — executes code if the condition matches one of several options.

## Examples

For example, in the following code, we use `if` to check if the variable `shoppingDone` is true:

```js
var shoppingDone = false;
if (shoppingDone === true) {
var childsAllowance = 10;
}
else {
var childsAllowance = 5;
}
```

In this example, if `shoppingDone` is true, then `childsAllowance` will be equal to 10, otherwise — 5.

## Errors

Errors when using conditional operators can occur due to incorrect use of comparison operators or logical operators. For example, incorrect use of the `||` operator can result in an error[](https://developer.mozilla.org/en/docs/Learn/JavaScript/Building_blocks/conditionals).