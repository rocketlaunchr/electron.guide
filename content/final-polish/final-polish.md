---
title: The Final Polish
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release



prevent Cmd+R/F5
hide dev tools
 1. dom-ready vs ready-to-show


app.Dock.Hide()


if !app.Call("requestSingleInstanceLock").Bool() {
 // Second instance
 app.Exit(0)
 }


electron-disable-file-drop
Disable draggable
Disable user selections
// Prevent Electron from never exiting when an exception happensprocess.on('uncaughtException', error => { console.error('Exception:', error); process.exit(1);});


// Store data in electron-store