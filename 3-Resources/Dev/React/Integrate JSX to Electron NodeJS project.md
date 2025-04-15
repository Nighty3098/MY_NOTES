---
tags:
  - electron
  - react
  - JSX
---
Integrating JSX code into an Electron project using Node.js allows you to create powerful cross-platform desktop applications. Here’s a step-by-step guide for this integration.

## Step 1: Install Required Tools

1. **Install Node.js**: Make sure you have the latest version of Node.js installed. Check your installation by running:
   ```bash
   node -v
   npm -v
   ```

2. **Create a New Project**:
   ```bash
   mkdir my-electron-app && cd my-electron-app
   npm init -y
   ```

3. **Install Electron**:
   ```bash
   npm install electron --save-dev
   ```

4. **Install Babel for Transpiling JSX**:
   ```bash
   npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
   ```

5. **Create Babel Configuration File**: Create a `.babelrc` file in the root of your project and add the following code:
   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

## Step 2: Set Up Project Structure

Create the folder and file structure for your application:
```bash
mkdir -p src electron public
touch src/App.jsx src/index.jsx electron/main.js public/index.html
```

### Example File Contents:

- **public/index.html**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Electron App</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="../dist/bundle.js"></script>
    </body>
  </html>
  ```

- **src/App.jsx**:
  ```javascript
  import React from 'react';

  const App = () => {
    return <h1>Hello from React!</h1>;
  };

  export default App;
  ```

- **src/index.jsx**:
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

- **electron/main.js**:
  ```javascript
  const { app, BrowserWindow } = require('electron');
  
  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    win.loadFile('public/index.html');
  }

  app.whenReady().then(createWindow);
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  ```

## Step 3: Build the Project

Use Webpack or another build tool to compile your project. Here’s an example Webpack configuration:

1. Install Webpack and necessary dependencies:
   ```bash
   npm install webpack webpack-cli webpack-dev-server --save-dev
   ```

2. Create a `webpack.config.js` file in the root of your project:
   ```javascript
   const path = require('path');

   module.exports = {
     entry: './src/index.jsx',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js',
     },
     module: {
       rules: [
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           },
         },
       ],
     },
     resolve: {
       extensions: ['.js', '.jsx'],
     },
     devtool: 'source-map',
     mode: 'development',
   };
   ```

3. Add scripts to your `package.json` for running and building the application:
   ```json
   "scripts": {
     "start": "electron .",
     "build": "webpack"
   }
   ```

## Step 4: Run the Application

1. First, build the project:
   ```bash
   npm run build
   ```

2. Then, start the Electron application:
   ```bash
   npm start
   ```

Now your Electron application is integrated with JSX code, and you can continue developing it using the capabilities of React and Electron to create desktop applications.

Citations:
[1] https://www.electronjs.org/docs/latest/tutorial/quick-start
[2] https://www.electronjs.org/ru/docs/latest/tutorial/quick-start
[3] https://dev.to/navdeepm20/electron-with-react-create-cross-platform-desktop-app-easily-1a13