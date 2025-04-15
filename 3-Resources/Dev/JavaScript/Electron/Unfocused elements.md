---
tags:
  - electron
---

### Unfocused variant of UI elements

Lotus has a sidebar navigation with colorful icons inside each item and a bright purple background for a currently selected page. When Lotus is focused, all colors are displayed as-is:

![[Pasted image 20241230003418.png]]


But if you click away or switch to some other app, Lotus loses focus and replaces colors with the shades of gray:

![[Pasted image 20241230003451.png]]

This seems like another small pattern from native apps that is easy to miss. It also requires code in both main and renderer processes to make it work.

In the main process, you need to detect when window is focused or unfocused and pass these events to the renderer process. Because renderer process is basically a browser, the page never loses focus in its "eyes", since it's always visible within Electron window.

```js
window.on('focus', () => {
    window.webContents.send('focus');
});

window.on('blur', () => {
    window.webContents.send('blur');
});
```

Then, in renderer process you need to listen to these messages from the main process by using `ipcRenderer` module.

```js
const {ipcRenderer} = require('electron');

ipcRenderer.on('focus', () => {
    // Change UI state to focused
});

ipcRenderer.on('blur', () => {
    // Change UI state to unfocused
});
```

Lotus is written in React, so I packaged the renderer piece into a handy `useWindowFocus` hook, which I use like this:

```js
const isWindowFocused = useWindowFocus();

return <NavItem className={isWindowFocused ? 'bg-purple' : 'bg-gray'}>…</NavItem>;
```