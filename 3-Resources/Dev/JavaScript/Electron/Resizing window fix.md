---
tags:
  - electron
---

![](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fbuttondown.s3.us-west-2.amazonaws.com%2Fimages%2F5f739049-9642-49f7-86a4-b1872d877ce0.gif)

Default background color in Electron window is white. When I'm quickly resizing it, Electron can't resize the page inside as fast as native apps do, which results in these flashes of white background, even though my page has a gray background.

To fix this, set window background color to the same color that's used on the page. Then, update it whenever system switches to/from dark mode.

```js
const {nativeTheme, BrowserWindow} = require('electron');

const darkBackgroundColor = 'black';
const lightBackgroundColor = 'white';

const window = new BrowserWindow({
    backgroundColor: nativeTheme.shouldUseDarkColors
        ? darkBackgroundColor
        : lightBackgroundColor
});

nativeTheme.on('updated', () => {
    const backgroundColor = nativeTheme.shouldUseDarkColors
        ? darkBackgroundColor
        : lightBackgroundColor;

    window.setBackgroundColor(backgroundColor);
});

```



![](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fbuttondown.s3.us-west-2.amazonaws.com%2Fimages%2Fdd60188f-acea-462e-90a5-327157ff20d3.gif)