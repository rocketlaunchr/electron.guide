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



``` 



See:

* https://electronjs.org/docs/api/browser-window
* https://electronjs.org/docs/api/web-contents




prevent Cmd+R/F5

hide dev tools

d
electron-disable-file-drop
Disable draggable
Disable user selections



### 