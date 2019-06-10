---
title: BrowserWindow
date: 2018-01-01
draft: true
exclude_search: false
documentation: https://electronjs.org/docs/api/browser-window
---

# BrowserWindow

### Windows

Windows 10    | Windows 7
--------|------
{{< figure src="/static/images/browser-window/win10_window.png" >}} | {{< figure src="/static/images/browser-window/win7_window.png" >}}

### MacOS

{{< figure src="/static/images/browser-window/mac_window.png" >}}

## Sample Code

```javascript
const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
```


{{< tabs tabTotal="3" tabID="1" tabName1="Tab 1" tabName2="Tab 2" tabName3="Tab 3" >}}
{{< tab tabNum="1" >}}

**Tab 1 Content**

{{< /tab >}}
{{< tab tabNum="2" >}}

**Tab 2 Content**

{{< /tab >}}
{{< tab tabNum="3" >}}

**Tab 3 Content**

{{< /tab >}}
{{< /tabs >}}