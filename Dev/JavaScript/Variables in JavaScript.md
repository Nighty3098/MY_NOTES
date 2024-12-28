---
tags:
  - JavaScript
---
## Variables in JavaScript

Variables in JavaScript are used to store data. They are declared using the `var`, `let`, or `const` keywords

## Declaring Variables

Creating a variable in JavaScript occurs in two steps[](https://dwstroy.ru/video/javascript-s-nulya/javascript-peremennye/):

1. **Declaring a variable** using the `var`, `let`, or `const` keyword.
2. **Assigning a value** to the variable.

For example:

```js
let age = 25;
const name = "John";
```

In this example, `age` is a variable of type `number`, and `name` is a variable of type `string`.

## Variable Naming Rules

There are several rules for variable names in JavaScript[](https://learn.javascript.ru/variables)[](https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables):

- The name must contain only letters, numbers, `$` and `_` symbols.
- The first character must not be a number.
- Case matters (age and Age are different variables).
- It is recommended to use camelCase for compound names.
- You cannot use JavaScript reserved words.

## Variable Scopes

Variables declared with `var` have a functional scope. Variables declared with `let` and `const` have a block scope.