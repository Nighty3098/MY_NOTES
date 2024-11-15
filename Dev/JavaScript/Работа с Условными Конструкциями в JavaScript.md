---
tags:
  - JavaScript
---
## Работа с Условными Конструкциями в JavaScript

Условные конструкции в JavaScript — это основной элемент управления потоком выполнения программы. Они позволяют создавать разветвления в программе, основываясь на условиях, которые могут быть выполнены или не выполнены.

## Операторы Сравнения

Операторы сравнения используются для проверки условий внутри условных операторов. В JavaScript есть несколько операторов сравнения:

- `===` и `!==` — проверяют, является ли значение идентичным или не идентичным другому.
- `<` и `>` — проверяют, является ли значение меньше или больше, чем другое.
- `<=` и `>=` — проверяют, является ли значение меньше или равно, либо больше или равно другому.

## Условные Операторы

Условные операторы в JavaScript используются для выполнения кода в зависимости от условия. В JavaScript есть несколько типов условных операторов:

- `if` — выполняет код, если условие истинно.
- `if...else` — выполняет код, если условие истинно, и другой код, если условие ложно.
- `switch` — выполняет код, если условие соответствует одному из нескольких вариантов.

## Примеры

Например, в следующем коде мы используем `if` для проверки, является ли переменная `shoppingDone` истинной:

```js
var shoppingDone = false;
if (shoppingDone === true) {
	var childsAllowance = 10;
}
else {
	var childsAllowance = 5;
}
```

В этом примере, если `shoppingDone` истинно, то `childsAllowance` будет равно 10, иначе — 5.

## Ошибки

Ошибки при использовании условных операторов могут возникать из-за неправильного использования операторов сравнения или логических операторов. Например, неправильное использование оператора `||` может привести к ошибке[](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals).