---
tags:
  - electron
---
Node.js built-in modules, such as `os`, can be used to determine the operating system on which an Electron program runs. This module provides information about the current operating system.

## Sample Code

Here is an example of how you can define the operating system in an Electron application:

```js
const { app } = require('electron');
const os = require('os');

app.on('ready', () => {
    const platform = os.platform(); // get platform
    console.log(`App started on: ${platform}`);

    switch (platform) {
        case 'win32':
            console.log('Windows');
            break;
        case 'darwin':
            console.log('macOS');
            break;
        case 'linux':
            console.log('Linux');
            break;
        default:
            console.log('Unknown OS');
    }
});

```

## Code Explanation

- **Importing modules**: We import `app` from Electron and `os` from Node.js.
- **Event `ready`**: The code inside this event is executed when the application is ready to run.
- **Platform Definition**: The `os.platform()` method returns a string indicating the operating system:
    
    - `'win32'` for Windows
    - `'darwin'` for macOS
    - `'linux'` for Linux
    
- **Conditional logic**: We use the `switch` construct to output the appropriate message depending on the operating system.

This way, using the `os` module, you can easily determine which system your pr is running on
