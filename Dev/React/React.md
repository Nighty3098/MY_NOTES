---
tags:
  - react
  - TypeScript
  - JavaScript
---
### Ключевые моменты  

- Создание веб-приложения на React с Typescript включает настройку проекта, работу с компонентами, управлением состоянием, маршрутизацией, стилизацией, тестированием и развертыванием.  
- Исследования показывают, что Typescript улучшает безопасность типов и поддерживаемость кода в React-приложениях.  
- Существует несколько подходов к стилизации и управлению состоянием, и выбор зависит от сложности проекта.  

---

### Настройка проекта  

Для начала работы с React и Typescript рекомендуется использовать `create-react-app` с шаблоном Typescript:  

```sh  
npx create-react-app my-app --template typescript  
```  

Это создаст проект с предустановленным Typescript. Если проект уже существует, добавьте Typescript, установив пакеты:  

```sh  
npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest  
```  

Затем переименуйте файлы JavaScript в `.tsx` и создайте `tsconfig.json`, если его нет.  

### Работа с компонентами  

Компоненты в React могут быть функциональными или классовыми, но функциональные предпочтительнее благодаря хукам. Пример функционального компонента с типами:  

```ts  
import React from 'react';  
interface Props {  
  message: string;  
}  
const HelloWorld: React.FC<Props> = ({ message }) => {  
  return <div>{message}</div>;  
};  
export default HelloWorld;  
```  

Typescript позволяет определять интерфейсы для пропсов и состояния, обеспечивая безопасность типов.  

### Управление состоянием и пропсами  

Состояние управляется с помощью хука `useState`, где можно указать тип:  

```ts  
import React, { useState } from 'react';  
const Counter: React.FC = () => {  
  const [count, setCount] = useState<number>(0);  
  return (  
    <div>  
      <p>Count: {count}</p>  
      <button onClick={() => setCount(count + 1)}>Increment</button>  
    </div>  
  );  
};  
```  

Пропсы передаются с типизацией через интерфейсы, например:  

```ts  
interface UserProps {  
  name: string;  
  age: number;  
}  
const User: React.FC<UserProps> = ({ name, age }) => {  
  return <div>{name} is {age} years old.</div>;  
};  
```  

### Обработка пользовательского ввода  

Для форм используйте элементы ввода и обработчики событий. Пример простой формы:  

```ts  
import React, { useState } from 'react';  
const LoginForm: React.FC = () => {  
  const [username, setUsername] = useState<string>('');  
  const [password, setPassword] = useState<string>('');  
  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    // Логика входа  
  };  
  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />  
      <button type="submit">Login</button>  
    </form>  
  );  
};  
```  

Для сложных форм можно использовать библиотеки, такие как React Hook Form, которые поддерживают Typescript.  

### Маршрутизация  

Для маршрутизации используйте React Router. Установите его:  

```sh  
npm install react-router-dom  
```  

Пример настройки маршрутов:  

```ts  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Home from './Home';  
import About from './About';  
const App: React.FC = () => {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
      </Routes>  
    </BrowserRouter>  
  );  
};  
```

Typescript обеспечивает типобезопасность при работе с параметрами маршрутов.  

### Управление глобальным состоянием  

Context API подходит для глобального состояния. Пример создания контекста:  

```ts  
import React from 'react';  
interface UserContextType {  
  user: string;  
  setUser: (user: string) => void;  
}  
export const UserContext = React.createContext<UserContextType | undefined>(undefined);  
```  

Использование контекста в компоненте:  

```ts  
import { useContext } from 'react';  
import { UserContext } from './UserContext';  
const Profile: React.FC = () => {  
  const { user } = useContext(UserContext);  
  return <div>Welcome, {user}</div>;  
};  
```  

Для сложных случаев можно использовать библиотеки, такие как React-Redux или MobX, с поддержкой Typescript.  

### Стилизация  

Существует несколько подходов:  

- **CSS Modules**: Импортируйте стили с типизацией, например:  

  ```ts  
  import styles from './Button.module.scss';  
  const Button: React.FC = () => {  
    return <button className={styles.primary}>Click me</button>;  
  };  
  ```
  
- **Встроенные стили**: Определите стили как объект с типом `React.CSSProperties`.  
- **Styled Components**: Установите библиотеку:  

  ```sh  
  npm install styled-components  
  ```  
  
  Пример:  
  
  ```ts  
  import styled from 'styled-components';  
  const Button = styled.button`  
    background-color: blue;  
    color: white;  
  `;  
  const App: React.FC = () => {  
    return <Button>Click me</Button>;  
  };  
  ```  

### Тестирование  

Для тестирования используйте Jest с Typescript. Установите пакеты:  

```sh  
npm install --save-dev jest @types/jest ts-jest  
```  

Настройте `jest.config.js`:  

```js  
module.exports = {  
  transform: {  
    '^.+\\.tsx?$': 'ts-jest',  
  },  
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],  
};  
```

Пример теста:  

```ts  
import React from 'react';  
import { render } from '@testing-library/react';  
import App from './App';  
test('renders learn react link', () => {  
  const { getByText } = render(<App />);  
  const linkElement = getByText(/learn react/i);  
  expect(linkElement).toBeInTheDocument();  
});  
```  

### Развертывание  

Соберите приложение для продакшн:  

```sh  
npm run build  
```  

Разверните на платформах, таких как GitHub Pages, Netlify или собственный сервер:  
- Для GitHub Pages настройте `package.json` для сборки в папку `docs`.  
- Для Netlify подключите репозиторий и настройте сборку.  
- Для собственного сервера разместите собранные файлы в публичной директории.  

---

### Отчет: Подробное руководство по созданию веб-приложения на React с Typescript  

#### Введение  

Создание веб-приложения на React с использованием Typescript предоставляет мощные инструменты для разработки безопасных и поддерживаемых приложений. React — это популярная библиотека JavaScript для построения пользовательских интерфейсов, особенно для одностраничных приложений. Typescript, в свою очередь, является надмножеством JavaScript, добавляющим статическую типизацию, что помогает выявлять ошибки на этапе компиляции и улучшает читаемость кода.  

На момент 11 марта 2025 года текущие версии включают React 18 и Typescript 5.8, что обеспечивает современные возможности и поддержку.  

#### Настройка проекта  

Для начала работы рекомендуется использовать `create-react-app` с шаблоном Typescript:  

```sh  
npx create-react-app my-app --template typescript  
```  

Это создаст проект с предустановленным Typescript, включая необходимые зависимости, такие как `@types/react` и `@types/react-dom`. Если проект уже существует, добавьте Typescript, установив пакеты:  

```sh  
npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest  
```  

Затем переименуйте файлы JavaScript в `.tsx` (например, `src/index.js` в `src/index.tsx`) и создайте `tsconfig.json`, если его нет. Подробности можно найти в [Adding TypeScript | Create React App](https://create-react-app.dev/docs/adding-typescript/).  

#### Понимание компонентов  

Компоненты являются основой React, и в современном подходе предпочтение отдается функциональным компонентам благодаря хукам, таким как `useState` и `useEffect`. Классовые компоненты все еще поддерживаются, но их использование уменьшается.  

Пример функционального компонента с типами:  

```ts  
import React from 'react';  
interface Props {  
  message: string;  
}  
const HelloWorld: React.FC<Props> = ({ message }) => {  
  return <div>{message}</div>;  
};  
export default HelloWorld;  
```  

Typescript позволяет определять интерфейсы для пропсов и состояния, обеспечивая безопасность типов. В React 18 типы, такие как `React.FC`, были обновлены, и рекомендуется использовать обычные функции с явной типизацией детей, если это необходимо. Подробности в [Using TypeScript – React](https://react.dev/learn/typescript).  

#### Управление состоянием и пропсами  

Состояние в функциональных компонентах управляется с помощью хука `useState`. Typescript позволяет указать тип состояния, например:  

```ts  
import React, { useState } from 'react';  
const Counter: React.FC = () => {  
  const [count, setCount] = useState<number>(0);  
  return (  
    <div>  
      <p>Count: {count}</p>  
      <button onClick={() => setCount(count + 1)}>Increment</button>  
    </div>  
  );  
};  
```  

Для сложных типов, таких как объекты или массивы, можно использовать интерфейсы:  

```ts  
interface User {  
  id: number;  
  name: string;  
}  
const [users, setUsers] = useState<User[]>([]);  
```  

Пропсы передаются с типизацией через интерфейсы, например:  

```ts  
interface UserProps {  
  name: string;  
  age: number;  
}  
const User: React.FC<UserProps> = ({ name, age }) => {  
  return <div>{name} is {age} years old.</div>;  
};  
```  

Подробности о типизации хуков в [TypeScript: React useState Hook](https://www.robinwieruch.de/typescript-react-usestate/).  

#### Обработка пользовательского ввода  

Для форм используйте элементы ввода и обработчики событий. Typescript помогает с типизацией событий, например:  

```ts  
import React, { useState } from 'react';  
const LoginForm: React.FC = () => {  
  const [username, setUsername] = useState<string>('');  
  const [password, setPassword] = useState<string>('');  
  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    // Логика входа  
  };  
  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />  
      <button type="submit">Login</button>  
    </form>  
  );  
};  
```  

Для сложных форм можно использовать библиотеки, такие как React Hook Form, которые поддерживают Typescript. Подробности в [Building Forms in React with Typescript and React Hook Form](https://medium.com/@nelson_examiner/building-forms-in-react-with-typescript-and-react-hook-form-a-brief-introduction-d7cf3cc26568).  

#### Маршрутизация  

React Router — популярная библиотека для маршрутизации. Установите ее:  

```sh  
npm install react-router-dom  
```  

Пример настройки маршрутов:  

```ts  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Home from './Home';  
import About from './About';  
const App: React.FC = () => {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
      </Routes>  
    </BrowserRouter>  
  );  
};  
```  

Typescript обеспечивает типобезопасность при работе с параметрами маршрутов, например, с помощью хука `useParams`. Подробности в [React Router Typescript | Galaxies.dev](https://galaxies.dev/quickwin/react-router-typescript).  

#### Управление глобальным состоянием  

Context API подходит для глобального состояния. Пример создания контекста:  

```ts  
import React from 'react';  
interface UserContextType {  
  user: string;  
  setUser: (user: string) => void;  
}  
export const UserContext = React.createContext<UserContextType | undefined>(undefined);  
```  

Использование контекста в компоненте:  

```ts  
import { useContext } from 'react';  
import { UserContext } from './UserContext';  
const Profile: React.FC = () => {  
  const { user } = useContext(UserContext);  
  return <div>Welcome, {user}</div>;  
};  
```  

Для сложных случаев можно использовать библиотеки, такие как React-Redux или MobX, с поддержкой Typescript. Подробности в [How to use React Context with TypeScript](https://blog.logrocket.com/how-to-use-react-context-typescript/).  

#### Стилизация  

Существует несколько подходов:  

- **CSS Modules**: Импортируйте стили с типизацией, например:  
  ```ts  
  import styles from './Button.module.scss';  
  const Button: React.FC = () => {  
    return <button className={styles.primary}>Click me</button>;  
  };  
  ```  
  Для работы с CSS Modules в Typescript может потребоваться установка `typescript-plugin-css-modules`. Подробности в [typescript-plugin-css-modules - npm](https://www.npmjs.com/package/typescript-plugin-css-modules).  

- **Встроенные стили**: Определите стили как объект с типом `React.CSSProperties`.  
- **Styled Components**: Установите библиотеку:  
  ```sh  
  npm install styled-components  
  ```  
  
Пример:

  ```ts  
  import styled from 'styled-components';  
  const Button = styled.button`  
    background-color: blue;  
    color: white;  
  `;  
  const App: React.FC = () => {  
    return <Button>Click me</Button>;  
  };  
  ```  

  Подробности в [Styled Components Documentation](https://styled-components.com/).  

#### Тестирование  

Для тестирования используйте Jest с Typescript. Установите пакеты:  

```sh  
npm install --save-dev jest @types/jest ts-jest  
```  

Настройте `jest.config.js`:  

```js  
module.exports = {  
  transform: {  
    '^.+\\.tsx?$': 'ts-jest',  
  },  
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],  
};  
```  

Пример теста:  

```ts  
import React from 'react';  
import { render } from '@testing-library/react';  
import App from './App';  
test('renders learn react link', () => {  
  const { getByText } = render(<App />);  
  const linkElement = getByText(/learn react/i);  
  expect(linkElement).toBeInTheDocument();  
});  
```  

Подробности в [Getting Started · Jest](https://jestjs.io/docs/getting-started).  

#### Развертывание  

Соберите приложение для продакшн:  

```sh  
npm run build  
```  

Это создаст оптимизированную версию приложения в папке `build`. Разверните на платформах, таких как GitHub Pages, Netlify или собственный сервер:  
- Для GitHub Pages настройте `package.json` для сборки в папку `docs` и настройте GitHub Pages для обслуживания из этой папки. Подробности в [React, Typescript, CD, GitHub Pages | Medium](https://medium.com/@kinneko-de/react-typescript-and-cd-to-github-pages-2024-92d4f19d71d7).  
- Для Netlify подключите репозиторий и настройте сборку, указав папку `build`. Подробности в [How to Manually Deploy a React and TypeScript Project on Netlify](https://www.freecodecamp.org/news/manually-deploy-a-react-and-typescript-project-on-netlify/).  
- Для собственного сервера разместите собранные файлы в публичной директории, например, через Nginx или Apache.  

#### Таблица: Сравнение подходов к стилизации  

| Подход          | Преимущества                              | Недостатки                              | Поддержка Typescript |
|-----------------|-------------------------------------------|-----------------------------------------|----------------------|
| CSS Modules     | Локальная область видимости, простота     | Требуется настройка для Typescript      | Да, с плагинами      |
| Встроенные стили| Простота, встроенная типизация            | Ограниченные возможности, производительность | Да                  |
| Styled Components | Компонентный подход, мощные возможности | Дополнительная библиотека, производительность | Да                  |

### Ключевые источники  
- [Adding TypeScript | Create React App](https://create-react-app.dev/docs/adding-typescript/)  
- [Using TypeScript – React](https://react.dev/learn/typescript)  
- [TypeScript: React useState Hook](https://www.robinwieruch.de/typescript-react-usestate/)  
- [Building Forms in React with Typescript and React Hook Form](https://medium.com/@nelson_examiner/building-forms-in-react-with-typescript-and-react-hook-form-a-brief-introduction-d7cf3cc26568)  
- [React Router Typescript | Galaxies.dev](https://galaxies.dev/quickwin/react-router-typescript)  
- [How to use React Context with TypeScript](https://blog.logrocket.com/how-to-use-react-context-typescript/)  
- [typescript-plugin-css-modules - npm](https://www.npmjs.com/package/typescript-plugin-css-modules)  
- [Styled Components Documentation](https://styled-components.com/)  
- [Getting Started · Jest](https://jestjs.io/docs/getting-started)  
- [React, Typescript, CD, GitHub Pages | Medium](https://medium.com/@kinneko-de/react-typescript-and-cd-to-github-pages-2024-92d4f19d71d7)  
- [How to Manually Deploy a React and TypeScript Project on Netlify](https://www.freecodecamp.org/news/manually-deploy-a-react-and-typescript-project-on-netlify/)