---
title: The Final Polish - BrowserWindow
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release

**The BrowserWindow is actually a _chromium_ web browser!**


### **Passing data into BrowserWindow**

If you use [React.js](https://reactjs.org/) for your BrowserWindow javascript, you may need to pass data from the `main` process to the `renderer` process just in time for your initial state and props.

You need to know the difference between these two events: `dom-ready` and `ready-to-show`.

1. `ready-to-show` event is part of `BrowserWindow`, and `dom-ready` event is part of `webContents`.
2. In the BrowserWindow event life-cycle, `dom-ready` always comes **before** `ready-to-show`.
3. You can inject data like this:

```javascript
const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ show: false })

win.once('ready-to-show', () => {
    win.show()
})

win.webContents.on('dom-ready', (event) => {
    win.WebContents.send("<channel>", Data1, Data2, Data3)
})
``` 

See:

* https://electronjs.org/docs/api/browser-window
* https://electronjs.org/docs/api/web-contents


### **Prevent BrowserWindow refreshes**

A user can press `Cmd+R` (on MacOS) or `F5` (on Windows) to refresh the webpage shown by the BrowserWindow. True native applications don't exhibit this behaviour.

One way to solve this is to Disable the keyboard shortcuts when the BrowserWindow takes focus and then unregister the shortcuts when the BrowserWindow loses focus or is closed/hidden.

```javascript
const { globalShortcut } = require('electron')

win.on('focus', (event) => {
    globalShortcut.registerAll(['CommandOrControl+R','F5'], () => {})
})

win.on('blur', (event) => {
    globalShortcut.unregisterAll()
})
```

See: https://electronjs.org/docs/api/global-shortcut

### **Prevent File Drags into BrowserWindow**

A user can drag a file into a BrowserWindow. The BrowserWindow will then display the file.
You can disable it by using https://github.com/ecrmnn/electron-disable-file-drop.

```js
require('electron-disable-file-drop'); // In renderer process
```


### **Disable Dragging and User Selections**

Users can drag certain elements inside the Body. They can also "select" content on the window (to cut/copy). True native applications don't exhibit this behavior.

Add this CSS:

```css
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
```

Add this attribute and class to the Body and various HTML elements:

```html
<body draggable="false" class="noselect">
```

### **Hide DevTools**

The user can easily open up the BrowserWindow DevTools and peek inside and modify your variables. This is very dangerous from a security perspective.

The user can open the DevTools by keyboard shortcuts and passing command line arguments.

Remember to disable it for Production release:

```js
const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ webPreferences: {devTools: false} })

```

See: https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions

You may have to take other measures too to hide DevTools successfully.



