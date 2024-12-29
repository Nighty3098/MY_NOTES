---
tags:
  - electron
---
```javascript
// main.js

window = new BrowserWindow({
    titlebarStyle: 'hidden',
    trafficLightPosition: {
        x: 15,
        y: 13,  // macOS traffic lights seem to be 14px in diameter. If you want them vertically centered, set this to `titlebar_height / 2 - 7`.
    },
})
```

```css
/* styles.css */

.titlebar {
    background-color: #f0f0f0;
    height: 40px;
    border-bottom: 1px solid #d0d0d0;
    -webkit-app-region: drag;    /* Allow user to drag the window using this titlebar */
    -webkit-user-select: none;   /* Prevent user from selecting things */
    user-select: none;
}
```


```css
.main-content {
    height: calc(100vh - 40px);  /* Force the content to take up the viewport height minus the titlebar height */
    overflow: auto;              /* Allow the main content to be scrollable */
}
body {
    overflow: hidden;            /* Make the HTML body be non-scrollable */
}
```

### RESULT:

![[Pasted image 20241230001433.png]]