---
title: Standard Dialogs
date: 2018-01-01
draft: false
exclude_search: false
documentation: https://electronjs.org/docs/api/dialog
---

# Standard Dialogs

### Windows

Windows 10    | Windows 7
--------|------
{{< figure src="/static/images/standard-dialogs/win10_open.png" title="Open file" >}} | {{< figure src="/static/images/standard-dialogs/win7_open.png" title="Open file" >}}
{{< figure src="/static/images/standard-dialogs/win10_save.png" title="Save file">}} | {{< figure src="/static/images/standard-dialogs/win7_save.png" title="Save file" >}}

### MacOS


   Open  |  Save
--------|------
{{< figure src="/static/images/standard-dialogs/mac_open.png" >}} | {{< figure src="/static/images/standard-dialogs/mac_save.png" >}}

## Sample Code

### Main Process

```javascript
const {ipcMain, dialog} = require('electron')

ipcMain.on('save-dialog', (event) => {
  const options = {
    title: 'Save an Image',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ]
  }
  dialog.showSaveDialog(options, (filename) => {
    event.sender.send('saved-file', filename)
  })
})
```

### Renderer Process

```javascript
const {ipcRenderer} = require('electron')

const saveBtn = document.getElementById('save-dialog')

saveBtn.addEventListener('click', (event) => {
  ipcRenderer.send('save-dialog')
})

ipcRenderer.on('saved-file', (event, path) => {
  if (!path) path = 'No path'
  document.getElementById('file-saved').innerHTML = `Path selected: ${path}`
})
```
