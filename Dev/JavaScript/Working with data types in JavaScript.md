---
tags:
  - JavaScript
---
## Working with data types in JavaScript

JavaScript is a dynamically typed programming language, which means that the data type of a variable is determined not in advance, but during program execution[](https://habr.com/ru/articles/709048/)[](https://learn.javascript.ru/types)[](https://htmlacademy.ru/blog/js/javascript-types).

## Dynamic typing

JavaScript does not require the variable type to be defined in advance. The variable type is determined automatically during program execution. This means that the same variable can store data of different types:

```js
var foo = 42; // now foo is of type Number
foo = "bar"; // and now foo is of type String
foo = true; // foo becomes a Boolean
```

## Primitive data types

JavaScript has eight basic data types:

1. `number` — integers and fractions.
2. `string` — text strings.
3. `boolean` — logical values ​​(`true` or `false`).
4. `undefined` — undefined value.
5. `null` — value indicating the absence of an object.
6. `object` — objects that can contain other data types.
7. `bigInt` — large integers.
8. `symbol` — unique symbols that can be used as object property names[](https://elbrusboot.camp/blog/tipy-dannykh-v-javascript-kratkoie-rukovodstvo-2/).

## Data type conversion

JavaScript allows you to convert data types between each other. This can be an explicit conversion, when we purposefully convert one type to another, or an implicit conversion, when the conversion occurs automatically:

```js
String("123") // Explicit conversion
123 + "" // implicit conversion
```

## Features of data types

JavaScript has several features related to data types:

- Variables can contain any data, and the data type can change depending on the value.
- Data types can be converted between themselves.
- JavaScript does not monitor whether you are accessing by index legally or going beyond the array.
- Explicit conversion of data types can help avoid errors[](https://habr.com/ru/articles/709048/)[](https://htmlacademy.ru/blog/js/javascript-types)[](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures).

## Conclusions

Working with data types in JavaScript is an important part of programming in this language. Understanding how to work with data types effectively is crucial for any JavaScript developer.