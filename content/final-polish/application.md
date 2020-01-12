---
title: The Final Polish - Application
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release

### **Prevent a second instance of your application from running**

Usually, you only want one instance of your application running at any moment.

```javascript
const { app } = require('electron')

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.exit(0)
}
```

See: https://electronjs.org/docs/api/app#apprequestsingleinstancelock


### **Store configuration data**

Users expect any customizations to their settings to persist on app reload (e.g. computer restart).

You can use [electron-store](https://github.com/sindresorhus/electron-store) to save data.

For sensitive security data such as OAuth tokens, you **MUST** store them in the "password vault" provided by the operating system.

You can use [node-keytar](https://github.com/atom/node-keytar) for this.

An excellent blog post with [instructions is here](https://medium.com/cameron-nokes/how-to-securely-store-sensitive-information-in-electron-with-node-keytar-51af99f1cfc4).

Using Keytar requires the library to be "rebuilt" for each OS/Electron version you want to deploy to:

* https://github.com/electron/electron-rebuild
* https://github.com/electron/electron/blob/master/docs/tutorial/using-native-node-modules.md

### **Catch Fatal Exceptions**

Sometimes Electron Applications mysteriously crash. Other times, they display a hideous error message:

{{< figure src="/static/images/final-polish/application/exception.png" >}}


You can intercept it and replace the error message with a prettier window:

```javascript
process.on('uncaughtException', error => {
	// Replace code below to display a prettier window
	console.error('Exception:', error); 
	app.exit(1);
});
```

An additional suggestion is you can use the package [clean-stack](https://www.npmjs.com/package/clean-stack) to filter the noise in the stack trace and then transmit the error data to your server before exiting.

- See https://github.com/sindresorhus/electron-unhandled.
- See {{< ref "/electron-alert#exception-alert" >}} (**recommended**)
- See https://electronjs.org/docs/api/crash-reporter