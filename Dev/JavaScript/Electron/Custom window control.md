---
tags:
  - electron
---

```js

/* windowControl.js */

function setupWindowControls() {
    // Event handler for the window close button.
    document.getElementById(“close-button”).addEventListener(“click”, () => {
        window.api.closeWindow(); // Close the current window
        console.log(“close”)
    });

    // Event handler for the window minimize button.
    document.getElementById(“min-button”).addEventListener(“click”, () => {
        window.api.minimizeWindow(); // Minimize the current window
    });

    // Event handler for the maximize/restore window button.
    document.getElementById(“max-button”).addEventListener(“click”, async () => {
        const isMaximized = await window.api.isMaximized(); // Check if the window is maximized
        window.api.maximizeWindow(); // Maximize or maximize the window
    });
}

export { setupWindowControls }; // Export the function for use in other modules
```


```js

/* preload.js */

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("close-button").addEventListener("click", () => {
        window.api.closeWindow();
        console.log("close");
    });

    document.getElementById("min-button").addEventListener("click", () => {
        window.api.minimizeWindow();
    });

    document.getElementById("max-button").addEventListener(
        "click",
        async () => {
            const isMaximized = await window.api.isMaximized();
            window.api.maximizeWindow();
        },
    );
});

```

```js

/* index.js */

ipcMain.on("close-window", () => {
	mainWindow.close();
});

ipcMain.on("minimize-window", () => {
	mainWindow.minimize();
});

ipcMain.on("maximize-window", () => {
	if (mainWindow.isMaximized()) {
	    mainWindow.unmaximize();
    } else {
	    mainWindow.maximize();
    }
});

ipcMain.handle("is-maximized", () => {
    return mainWindow.isMaximized();
});

```


![[Pasted image 20241230002223.png]]