---
tags:
  - react
  - JSX
---
JSX (JavaScript XML) — это расширение синтаксиса JavaScript, используемое в React для описания интерфейсов пользователя. Он позволяет разработчикам писать HTML-подобный код непосредственно в JavaScript, что делает процесс создания компонентов более интуитивным и удобным.

## Основные характеристики JSX

- **Синтаксис**: JSX напоминает HTML, но имеет свои особенности. Например, все теги должны быть закрыты, а атрибуты используют camelCase (например, `className` вместо `class`) [1][5].
- **Компиляция**: Код JSX компилируется в вызовы функции `React.createElement()`, что позволяет React создавать элементы и управлять ими в виртуальном DOM [2][4][8]. Пример:
  ```javascript
  const element = <h1 className="title">Hello, world!</h1>;
  // Компилируется в:
  const element = React.createElement('h1', { className: 'title' }, 'Hello, world!');
  ```

## Как работать с JSX

### Встраивание JavaScript

JSX позволяет встраивать JavaScript-выражения внутри фигурных скобок `{}`. Это означает, что вы можете использовать переменные и функции прямо в разметке:
```javascript
const user = { name: 'Иван' };
const greeting = <h1>Привет, {user.name}!</h1>;
```

### Условия и циклы

JSX можно использовать внутри операторов `if` и циклов `for`, что позволяет динамически изменять содержимое компонентов:
```javascript
function Greeting({ user }) {
  if (user) {
    return <h1>Привет, {user.name}!</h1>;
  }
  return <h1>Привет, незнакомец.</h1>;
}
```

### Самозакрывающиеся теги

Для элементов без дочерних узлов можно использовать самозакрывающиеся теги:
```javascript
const element = <img src="image.png" alt="Описание" />;
```

### Безопасность

JSX автоматически экранирует значения, что предотвращает атаки типа XSS (межсайтовый скриптинг). Это значит, что пользовательский ввод не может быть выполнен как код [5][6].


Citations:
[1] https://itchief.ru/react/jsx
[2] https://habr.com/ru/articles/319270/
[3] https://itproger.com/course/react-js/3
[4] https://reactdev.ru/archive/react16/introducing-jsx/
[5] https://stasonmars.ru/javascript/podrobnoe-rukovodstvo-po-jsx-v-react/
[6] https://ru.legacy.reactjs.org/docs/introducing-jsx.html
[7] https://habr.com/ru/companies/ruvds/articles/343022/
[8] https://ru.react.js.org/docs/introducing-jsx.html
[9] https://ru.hexlet.io/courses/js-react/lessons/jsx/theory_unit