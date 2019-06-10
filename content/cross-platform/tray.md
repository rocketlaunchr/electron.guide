---
title: Tray
date: 2018-01-01
draft: true
exclude_search: false
documentation: https://electronjs.org/docs/api/tray
---

# Tray

### Windows

Windows 10    | Windows 7
--------|------
{{< figure src="/static/images/tray/win10_tray.png" >}} | {{< figure src="/static/images/tray/win7_tray.png" >}}
{{< figure src="/static/images/tray/win10_tray_menu.png" title="Tray menu" >}} | {{< figure src="/static/images/tray/win7_tray_menu.png" title="Tray menu" >}}

### MacOS


{{< figure src="/static/images/tray/mac_tray.gif" >}}


## Sample Code

### Main Process

```javascript
const path = require('path')
const {ipcMain, app, Menu, Tray} = require('electron')

let appIcon = null

ipcMain.on('put-in-tray', (event) => {
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
  const iconPath = path.join(__dirname, iconName)
  appIcon = new Tray(iconPath)

  const contextMenu = Menu.buildFromTemplate([{
    label: 'Remove',
    click: () => {
      event.sender.send('tray-removed')
    }
  }])

  appIcon.setToolTip('Electron Demo in the tray.')
  appIcon.setContextMenu(contextMenu)
})

ipcMain.on('remove-tray', () => {
  appIcon.destroy()
})

app.on('window-all-closed', () => {
  if (appIcon) appIcon.destroy()
})
```

### Renderer Process

```javascript
const ipc = require('electron').ipcRenderer

const trayBtn = document.getElementById('put-in-tray')
let trayOn = false

trayBtn.addEventListener('click', function (event) {
  if (trayOn) {
    trayOn = false
    document.getElementById('tray-countdown').innerHTML = ''
    ipc.send('remove-tray')
  } else {
    trayOn = true
    const message = 'Click demo again to remove.'
    document.getElementById('tray-countdown').innerHTML = message
    ipc.send('put-in-tray')
  }
})
// Tray removed from context menu on icon
ipc.on('tray-removed', function () {
  ipc.send('remove-tray')
  trayOn = false
  document.getElementById('tray-countdown').innerHTML = ''
})
```

## Known Bugs

* Once you create a tray icon, attempting to destroy it will crash the application.
