---
title: The Final Polish - Application
date: 2018-01-01
draft: false
exclude_search: false
---

# The Final Polish before release

### Prevent a second instance of your application from running

Usually you only want one instance of your application running at any moment.

```javascript
const { app } = require('electron')

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.exit(0)
}
```

See: https://electronjs.org/docs/api/app#apprequestsingleinstancelock


### Store configuration data

Users expect any customizations to their settings to persist on app reload (eg. computer restart).

You can use [electron-store](https://github.com/sindresorhus/electron-store) to save data.

For security sensitive data such as OAuth tokens, you **MUST** store them in the "password vault" provided by the operating system.

You can use [node-keytar](https://github.com/atom/node-keytar) for this.

A nice blog post with [instructions is here](https://medium.com/cameron-nokes/how-to-securely-store-sensitive-information-in-electron-with-node-keytar-51af99f1cfc4).


### Catch Fatal Exceptions

Sometimes Electron Applications mysteriously crash. Othertimes, they display a hideous error message:

{{< figure src="/static/images/final-polish/application/exception.png" >}}


You can intercept it and replace the error message with a prettier window:

```javascript
process.on('uncaughtException', error => {
	// Replace below with displaying a prettier window
	console.error('Exception:', error); 
	process.exit(1);
});
```

See https://github.com/sindresorhus/electron-unhandled