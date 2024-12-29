---
tags:
  - electron
---
Here are examples of settings for the main window in an Electron JS application, along with code snippets to illustrate their usage:

### 1. Creating a Main Window

You can create a main window using the `BrowserWindow` class. Below is an example of how to set up a basic window:

```javascript
const { app, BrowserWindow } = require('electron');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile('index.html'); // Load your HTML file
}

app.whenReady().then(createMainWindow);
```

### 2. Window Options

You can customize various options when creating the window:

- **Resizable**: Allow or disallow resizing.
- **Fullscreen**: Start in fullscreen mode.
- **Minimizable**: Allow minimizing the window.

Example:

```javascript
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false, // Disable resizing
    fullscreen: false, // Start in windowed mode
    minimizable: true, // Allow minimizing
});
```

### 3. Menu Bar

You can choose to hide the menu bar if you want a cleaner interface:

```javascript
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true, // Hide the menu bar
});
```

### 4. Background Color and Opacity

Set a background color and adjust opacity for the window:

```javascript
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff', // Set background color to white
    opacity: 0.95, // Set window opacity
});
```

### 5. Always on Top

Keep the window above all other windows by setting `alwaysOnTop` to true:

```javascript
const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true, // Keep this window on top
});
```

### 6. Opening Developer Tools

You can automatically open Developer Tools for debugging during development:

```javascript
mainWindow.webContents.openDevTools(); // Open DevTools automatically
```

### 7. Event Listeners

You can attach event listeners to handle specific actions or behaviors for the window:

```javascript
mainWindow.on('closed', () => {
    mainWindow = null; // Clean up when the window is closed
});
```

Citations:
[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/29078886/d594486c-d009-4b92-acab-502b2a8d59b7/paste.txt