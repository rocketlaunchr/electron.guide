---
title: The Final Polish - Application
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release - Application

### Prevent a second instance of your application from running




### dom-ready vs ready-to-show



### Store configuration data


https://github.com/sindresorhus/electron-store



https://github.com/atom/node-keytar

https://medium.com/cameron-nokes/how-to-securely-store-sensitive-information-in-electron-with-node-keytar-51af99f1cfc4



 1. dom-ready vs ready-to-show


app.Dock.Hide()


if !app.Call("requestSingleInstanceLock").Bool() {
 // Second instance
 app.Exit(0)
 }



// Prevent Electron from never exiting when an exception happensprocess.on('uncaughtException', error => { console.error('Exception:', error); process.exit(1);});


// Store data in electron-store