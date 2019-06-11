---
title: Context Menu
date: 2018-01-01
draft: false
exclude_search: false
documentation: https://electronjs.org/docs/api/menu
---

# Context Menu

### Windows

Windows 10    | Windows 7
--------|------
{{< figure src="/static/images/context-menu/win10_context.png" >}} | {{< figure src="/static/images/context-menu/win7_context.png" >}}

### MacOS

{{< figure src="/static/images/context-menu/mac_context.png" >}}

## Sample Code

### Main Process

```javascript
const {
  BrowserWindow,
  Menu,
  MenuItem,
  ipcMain,
  app
} = require('electron')

const menu = new Menu()
menu.append(new MenuItem({ label: 'Hello' }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true }))

app.on('browser-window-created', (event, win) => {
  win.webContents.on('context-menu', (e, params) => {
    menu.popup(win, params.x, params.y)
  })
})

ipcMain.on('show-context-menu', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  menu.popup(win)
})
```

### Renderer Process

```javascript
const {ipcRenderer} = require('electron')

// Tell main process to show the menu when demo button is clicked
const contextMenuBtn = document.getElementById('context-menu')

contextMenuBtn.addEventListener('click', () => {
  ipcRenderer.send('show-context-menu')
})
```
