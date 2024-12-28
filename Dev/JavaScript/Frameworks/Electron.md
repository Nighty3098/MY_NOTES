---
tags:
  - nodejs
  - electron
---
Using Electron in a Node.js application allows developers to create cross-platform desktop applications with web technologies. Here’s an overview of how to integrate Node.js with Electron, including best practices and key considerations.

## Overview of Electron

Electron combines Chromium and Node.js to enable developers to build desktop applications using HTML, CSS, and JavaScript. It allows for the creation of native applications that can run on Windows, macOS, and Linux.

## Setting Up an Electron Application

1. **Initialize Your Project**:
   Start by creating a new directory for your project and initializing it with npm:

   ```bash
   mkdir my-electron-app && cd my-electron-app
   npm init -y
   ```

2. **Install Electron**:
   Install Electron as a dependency:

   ```bash
   npm install electron --save-dev
   ```

3. **Create Main Script**:
   Create a `main.js` file where you will define the main process of your application. This file controls the lifecycle of your app and creates browser windows.

   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');

   function createWindow() {
       const mainWindow = new BrowserWindow({
           width: 800,
           height: 600,
           webPreferences: {
               preload: path.join(__dirname, 'preload.js') // Preload script for security
           }
       });

       mainWindow.loadFile('index.html'); // Load your HTML file
   }

   app.whenReady().then(createWindow);
   ```

4. **Preload Script**:
   To safely expose Node.js functionality to your renderer process (the web page), use a preload script. This script runs before the renderer is loaded and can bridge communication between Node.js and the web context.

   Create `preload.js`:

   ```javascript
   window.addEventListener('DOMContentLoaded', () => {
       const { version } = require('electron');
       document.getElementById('version').innerText = version;
   });
   ```

5. **HTML File**:
   Create an `index.html` file to serve as the user interface:

   ```html
   <!DOCTYPE html>
   <html>
       <head>
           <title>My Electron App</title>
       </head>
       <body>
           <h1>Hello from Electron!</h1>
           <p>Electron version: <span id="version"></span></p>
       </body>
       <script src="renderer.js"></script>
   </html>
   ```

## Node Integration and Security

- **Node Integration**: By default, Node integration is disabled in Electron for security reasons. This means that you cannot directly access Node.js APIs in the renderer process unless you explicitly enable it.
  
- **Best Practices**: It is generally recommended to keep Node integration disabled and use IPC (Inter-Process Communication) for communication between the main process and renderer process. This approach enhances security by treating the renderer as a traditional web page.

### Using IPC for Communication

To communicate between the main process and renderer process without enabling Node integration:

1. **In Main Process** (`main.js`):

    ```javascript
    const { ipcMain } = require('electron');

    ipcMain.on('request-version', (event) => {
        event.reply('response-version', process.versions.electron);
    });
    ```

2. **In Renderer Process** (`renderer.js`):

    ```javascript
    const { ipcRenderer } = require('electron');

    ipcRenderer.send('request-version');
    ipcRenderer.on('response-version', (event, version) => {
        document.getElementById('version').innerText = version;
    });
    ```

## Conclusion

Integrating Electron with Node.js allows you to leverage the power of both environments to build robust desktop applications. By following best practices such as using preload scripts and IPC for communication, you can enhance the security and maintainability of your application while utilizing Node.js features effectively within your Electron project.

Citations:
[1] https://www.desarrollolibre.net/blog/electronjs/enabling-integration-with-node-in-electronjs
[2] https://www.electronjs.org/docs/latest/tutorial/quick-start
[3] https://www.electronjs.org/ru/docs/latest/tutorial/quick-start
[4] https://www.reddit.com/r/electronjs/comments/cd7b6y/node_integration_in_electron_apps/
[5] https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration