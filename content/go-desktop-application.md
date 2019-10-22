<!-- ---
title: Setup
date: 2019-09-01
draft: false
exclude_search: false

Electron color: cff7ff
Go: 2dbcaf
React: 05a5d1

--- -->

# **Tutorial: How to Create a Cross-platform Desktop App with Electron, Go and React**

<!-- ![Electron + Go + React](https://github.com/rocketlaunchr/desktop-application/blob/tutorial/go-react-electron.png?raw=true) -->

![Electron + Go + React](/static/static/images/go-desktop-application/go-react-electron.png)

With [GopherJS](https://github.com/gopherjs/gopherjs) [a Go-to-JavaScript compiler] and the power which [ElectronJS](https://electronjs.org/) possesses, Go Developers can now create cross-platform Desktop apps written 100% in [Golang](https://golang.org/).

In this tutorial, we'll be building a (cross-platform) Mark-down App written 100% in Go! :)

Before we embark on this journey, some...

**Assumptions:**

1. _You are an intermediate or professional Go Developer who either has little to no prior or professional knowledge of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [RollupJS](https://rollupjs.org/) or [npm](https://docs.npmjs.com/) (Node Package Manager)._
2. _You have some knowledge of React APIs._
3. _You are patient and enthusiastic (about learning in this tutorial). :)_

Ok. Moving forward.

So, to view the source code for our Markdown app, clone this [repo](https://github.com/rocketlaunchr/desktop-application/) to your local drive:

```powershell
git clone https://github.com/rocketlaunchr/desktop-application.git
```

Now, with [npm](#npm-node-package-manager) installed, run the app with the following commands from a CLI (Command Line Interface) in the cloned directory:

1. `npm install` - installs all app's dependencies [required [node_modules](https://docs.npmjs.com/about-packages-and-modules#about-modules)]
2. `npm start` - initializes/starts app.

_[On app start, a tray icon should appear somewhere at the top of your screen (if you're on a Linux-based OS) or at the bottom-right of your screen (on the taskbar) on Windows. Click on this tray icon to view app.]_

**Note** that you must have all [prerequisites](#prerequisites-table-of-contents) (installed) for app to actually run.

## **Table of Contents**

* [Prerequisites](#prerequisites-table-of-contents)
* [Set-up](#set-up-table-of-contents)
  * [Golang](#golang)
  * [npm](#npm-node-package-manager)
  * [GopherJS](#gopherjs)
  * [Electron](#electron)
  * [Go-React Bindings](#go-react-bindings)
  * [Rollup](#rollup)
* [Renderer](#renderer-table-of-contents)
* [Main](#main-table-of-contents)
* [Bundle](#bundle-table-of-contents)
  * [Rollup Config](#rollup-config)
* [Distribution](#distribution-table-of-contents)

Alright, before we start off proper, some prerequisites for development...

## **Prerequisites [↑](#table-of-contents)**

Basically, we have six prerequisites that would suffice our Go desktop app creation. They are:

* [Golang](https://golang.org/)
* [npm](https://docs.npmjs.com/)
* [GopherJS](https://github.com/gopherjs/gopherjs)
* [Electron](https://electronjs.org/)
* [Go-React Bindings](https://github.com/rocketlaunchr/react)
* [Rollup](https://rollupjs.org)

## **Set-up  [↑](#table-of-contents)**

Now, let's have our dependencies [prerequisites, if you will] set up.

### **Golang**

First, download and install Golang. Click [here](https://golang.org/dl/) to download and install a binary suitable for your OS (Operating System).

Having done that, check to see [confirm] that the Go path env (environment) variable is set.

To do this, run `go version` from a CLI. This should print the current version of Go you're running. See [installation instructions](https://golang.org/dl/) for more.

### **npm (Node Package Manager)**

npm is a very essential tool for JavaScript development.

What is [npm](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)?

> _npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management._

npm comes packaged with [Node.js](https://nodejs.org/) [a JavaScript runtime built on Chrome's V8 JavaScript engine].

We'll need to install Node in order to use npm. Click [here](https://nodejs.org/en/) to download and install the current version of Node for your OS.

To also check that Node has been installed (and env variable set), from a CLI, run `node -v` and `npm -v` respectively to get the versions of Node and npm.

### **GopherJS**

Next is our Go-to-JavaScript compiler: [GopherJS](https://github.com/gopherjs/gopherjs).

Installation:

```powershell
go get -u github.com/gopherjs/gopherjs
```

**Heads up:**

> _`gopherjs` uses your platform's default `GOOS` value when generating code. Supported `GOOS` values are: `linux`, `darwin`. If you're on a different platform (e.g., Windows or FreeBSD), you'll need to set the `GOOS` environment variable to a supported value. For example, `GOOS=linux gopherjs build [package]`._

### **Electron**

[Electron](https://github.com/electron/electron) (or Electron.js) is a (JavaScript) framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium.

Installation:

```powershell
npm install electron --save-dev [--save-exact]
```

**Sidebar:**

For a quick start of Electron, run:

```powershell
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

These will: 

1. Clone the `electron-quick-start` repo to your local directory;
2. `cd` [change directory] to the clone;
3. Install all dependencies for the minimal `electron-quick-start` app; then
4. Start or initialize the app.

But before we move on, I'd like to point out and say a few things about two specific and important files you should notice in the root of the (cloned) `electron-quick-start` directory: `main.js` and `renderer.js`.

Ok. These two files, basically, are what make up the desktop app. Let me give a basic explanation of these two.

`main.js` [the `main` process] creates [`BrowserWindow`](https://electronjs.org/docs/api/browser-window#class-browserwindow) for the `renderer` process and also enables us have access to native OS resources via Node.js APIs which we, hitherto, couldn't have access to if we were on a (sandboxed) Web browser.

`renderer.js` [the `renderer` process] handles rendering (the web page) or we could say is the web page.

We can have many `renderer` processes, in other words, many web pages. On the other hand, we can have **only one** `main` process. See [Electron app architecture](https://electronjs.org/docs/tutorial/application-architecture) for more.

**Note:** The `main` process file doesn't necessarily have to be named `main.js`, it can be named anything (`we.js`); same with the `renderer` process. Here is what I mean...

> _In Electron, the process that runs `package.json`'s `main` script is called the **main process**._

So, say I have a process named `myprocess.js` and I set `"main": "myprocess.js"` in `package.json`, `myprocess.js`, by default, becomes the `main` process. Nevertheless, it's a standard to always name the `main` process `main.js`.

### **Go-React Bindings**

[Go-React Bindings](https://github.com/rocketlaunchr/react) is a package that utilizes the combination of (Facebook's) React.js (API) and Golang in creating awesome applications.

Installation:

```powershell
go get -u github.com/rocketlaunchr/react
```

### **Rollup**

Finally, on our dependencies list, our (JavaScript) bundler: [Rollup.js](https://rollupjs.org/guide/en/).

> _Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application._

Installation:

```powershell
npm install --global rollup
```

A little more on Rollup and its config will be discussed in the [bundle](#bundle-↑) section.

Alright. So, we are now all set and ready for an awesome 'Electron-Go-React' adventure. Sweet! Let's dive right in!

## **Renderer [↑](#table-of-contents)**

...

## **Main [↑](#table-of-contents)**

...

## **Bundle [↑](#table-of-contents)**

We now have to bundle all our code into a single file [a bundle] to make it production-ready.

So, with Rollup [our bundler] installed, we need to create a Rollup configuration file (`rollup.config.js`) in the root directory of our app [on the same level as the package.json file] which will be picked up and used by Rollup to compile [bundle] all our code.

But before we go on to populate our config file with config code, let's `npm install` some Rollup plugins [development dependencies] which Rollup will require to bundle our app.

* **[rollup-plugin-node-resolve](https://www.npmjs.com/package/rollup-plugin-node-resolve)**

> _Locate modules using the Node resolution algorithm, for using third party modules in node\_modules._

```powershell
npm install --save-dev rollup-plugin-node-resolve
```

* **[rollup-plugin-commonjs](https://www.npmjs.com/package/rollup-plugin-commonjs)**

> _Convert CommonJS modules to ES6, so they can be included in a Rollup bundle._

```powershell
npm install --save-dev rollup-plugin-node-resolve
```

* **[rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)**

> _Rollup plugin to minify generated es bundle. Uses terser under the hood._

```powershell
npm install --save-dev rollup-plugin-terser
```

* **[rollup-plugin-node-globals](https://www.npmjs.com/package/rollup-plugin-node-globals)**

> _Plugin to insert node globals including so code that works with browserify should work even if it uses process or buffers._

```powershell
npm install --save-dev rollup-plugin-node-globals
```

* **[rollup-plugin-node-builtins](https://www.npmjs.com/package/rollup-plugin-node-builtins)**

> _Allows the node builtins to be [`require`d](https://nodejs.org/zh-cn/knowledge/getting-started/what-is-require/)/[`import`ed](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/). Doing so gives the proper shims to support modules that were designed for Browserify, some modules require rollup-plugin-node-globals._

```powershell
npm install --save-dev rollup-plugin-node-builtins
```

* **[rollup-plugin-json](https://www.npmjs.com/package/rollup-plugin-json)**

> _Convert .json files to ES6 modules._

```powershell
npm install --save-dev rollup-plugin-json
```

* **[rollup-plugin-replace](https://www.npmjs.com/package/rollup-plugin-replace)**

> _Replace strings in files while bundling them._

```powershell
npm install --save-dev rollup-plugin-replace
```

* **[builtin-modules](https://www.npmjs.com/package/builtin-modules)**

> _Returns an array of builtin modules fetched from the running Node.js version._

```powershell
npm install --save-dev builtin-modules
```

### **Rollup Config**

We can now proceed to write our config code.

First, we import all the dependencies:

![Rollup Dependencies](/static/static/images/go-desktop-application/rollup_dependencies.png)

What is **[child_process](https://nodejs.org/api/child_process.html#child_process_child_process)**?

> *The child_process module allows to create child processes in Node.js. Those processes can easily communicate with each other using a built-in messaging system.*

What is **[fs](https://nodejs.org/api/fs.html#fs_file_system)**?

> _The Node.js file system module provides an API for interacting with the file system._

Now, here is what the structure of our Rollup config [default](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export) [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export), `exp` (or any variable name you wish to name it), would look like:

```javascript
export default exp = [
  // main process (nodejs) config
  {
    input: "",
    output: {},
    external: [],
    plugins: []
  },
  // renderer process (browser) config
  {
    input: "",
    output: {},
    external: [],
    plugins: []
  }
];
```

So, it's, basically, an array of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) with config options for each file to be bundled (`main` and `renderer` in our case).

`input` [string] takes the path to the file to be bundled as its value.

`output` [object] takes (as value) an object of options for the final or target output [the bundle].

`external` [array] takes (as value) an array of strings which are names of modules to be excluded during bundling.

`plugins` [array] takes (as value) an array of plugins which are actually just functions [modules] that change the behaviour of Rollup during bundling.

_**Note:** `output`, `external` and `plugins` could be made to accept slightly different values. See [Rollup guide](https://rollupjs.org/guide/en/) for more._

Now, here's our config code:

**main process** Rollup config:

![Rollup Dependencies](/static/static/images/go-desktop-application/main_config.png)

**renderer process** Rollup config:

![Rollup Dependencies](/static/static/images/go-desktop-application/renderer_config.png)

Having done all, let's now create a build script for Rollup.

In `package.json`, under `"scripts"`, set `"build": "rollup -c"`. We can now run `npm run build` to build [bundle] our app.

**Note** that we could also run `rollup -c` directly from the CLI to build our app without actually using `npm run build` since we installed Rollup globally.

So, with that we've successfully bundled Mark-down and made it production-ready. ;)

## **Distribution [↑](#table-of-contents)**

Finally, we will package (or literally, `make`) our app for distribution. We'll be using the [Electron Forge](https://www.npmjs.com/package/electron-forge) npm package for this, and it's actually very easy.

First, install Electron Forge globally:

```powershell
npm install -g electron-forge
```

Secondly, since we have an existing app [project/package], all we need do is import our project to make it Forge compatible. _See [Starting a new Project](https://www.npmjs.com/package/electron-forge#starting-a-new-project) on steps on how to start a brand new project._

```powershell
electron-forge import desktop-application
```

> _Normally this just creates a base forge config and adds the required dependencies._

Lastly, run:

```powershell
npm run make
```

This will `package` and `make` our app ready for distribution. As easy as that!

After making is complete, you'll find an `out` folder at the root of the project. In the `make` sub-folders is where you'll find `.exe`'s [executables] for your app.

_**Note** that you may need to, manually, install the 'maker' dependency/dependencies Electron Forge added in `package.json` for the target platform in case of any dependency/dependencies errors._

Head over to `package.json`; you should see something like this:

```json
  "devDependencies": {
    "@electron-forge/cli": "^6.0.0-beta.45",
    "@electron-forge/maker-deb": "^6.0.0-beta.45",
    "@electron-forge/maker-rpm": "^6.0.0-beta.45",
    "@electron-forge/maker-squirrel": "^6.0.0-beta.45",
    "@electron-forge/maker-zip": "^6.0.0-beta.45",
    ...
  }
```

So, in actual fact, when Electron Forge tries to `package` and `make` your app, it `package`s and `make`s it for the target machine [your PC in this case]. In other words,

> _By default, you can only generate distributables for your current platform. If you want to specify platform / arch, use the --platform=\<platform\> and --arch=\<arch\> arguments, but please note that some distributables are not available to be built on anything but the platform that is targeted. For example, appx (Windows Store) distributables can only be built on Windows._

Now, for instance, on Windows, you'd do:

```powershell
npm install @electron-forge/maker-squirrel --save-dev
```

...then run the `make` command again:

```powershell
npm run make
```

And with that, our app will be ready for distribution. :)

## **Conclusion [↑](#table-of-contents)**

...

[Go Up](#tutorial-how-to-create-a-cross-platform-desktop-app-with-electron-go-and-react)
