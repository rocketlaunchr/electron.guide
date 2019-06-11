---
title: The Final Polish - BrowserWindow
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release

### Passing data into BrowserWindow

If you use [React.js](https://reactjs.org/) for your BrowserWindow javascript, you may need to pass data from the `main` process to the `renderer` process just in time for your initial state and props.

You need to know the difference between these 2 events: `dom-ready` and `ready-to-show`.

1. `ready-to-show` event is part of `BrowserWindow` and `dom-ready` event is part of `webContents`.
2. In the BrowserWindow event life-cycle, `dom-ready` always comes before `ready-to-show`.
3. You can inject data like this:

```javascript
const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ show: false })

win.once('ready-to-show', () => {
	win.show()
})

win.webContents.on('dom-ready', (event) => {
	win.WebContents.send("<channel>", D1, D2, D3)
})
``` 

See:

* https://electronjs.org/docs/api/browser-window
* https://electronjs.org/docs/api/web-contents


### Prevent BrowserWindow refreshes

A user can press `Cmd+R` (on MacOS) or `F5` (on Windows) to refresh the webpage shown by the BrowserWindow. True native applications don't exhibit this behaviour.

One way to solve this is to Disable the 





	// Disable Refresh of page
	window.On(electron.EvtBrowserWindowFocus, func(args ...*js.Object) {
		imports.Get("globalShortcut").Call("registerAll", []string{"CommandOrControl+R", "F5"}, func() {})
	})

	// Hide the window when it loses focus
	window.On(electron.EvtBrowserWindowBlur, func(args ...*js.Object) {
		imports.Get("globalShortcut").Call("unregisterAll")
		if !window.WebContents.IsDevToolsOpened() {
			window.Hide()
		}
	})



hide dev tools

d
electron-disable-file-drop
Disable draggable
Disable user selections



### 