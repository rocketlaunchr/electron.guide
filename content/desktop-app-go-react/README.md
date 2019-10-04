<!-- ---
title: Setup
date: 2019-09-01
draft: false
exclude_search: false

Electron color: cff7ff
Go: 2dbcaf
React: 05a5d1

--- -->

# Tutorial: How to create a cross-platform Desktop App with Electron, Go and React

<!-- ![Electron + Go + React](https://github.com/rocketlaunchr/desktop-application/blob/tutorial/go-react-electron.png?raw=true) -->

![Electron + Go + React](./go-react-electron.png)

With [GopherJS](https://github.com/gopherjs/gopherjs) [a Go-to-JavaScript compiler] and the power which [ElectronJS](https://electronjs.org/) possesses, Go Developers can now create cross-platform Desktop apps written 100% in [Golang](https://golang.org/).

In this tutorial, we'll be building a (cross-platform) Mark-down App written 100% in Go! :)

To view the source code for our Markdown app, clone this [repo](https://github.com/rocketlaunchr/desktop-application/) to your local drive:

```powershell
git clone https://github.com/rocketlaunchr/desktop-application.git
```

To open app, first, from a CLI (Command Line Interface) in the cloned directory, with [npm](#npm-node-package-manager) installed, run `npm install` to install all the app's dependencies [required [node_modules](https://docs.npmjs.com/about-packages-and-modules#about-modules)] then run `npm start` to initialize app.

[On app start, a tray icon should appear somewhere at the top of your screen (if you're on a Linux-based OS) or at the bottom-right of your screen (on the taskbar) on Windows. Click on this tray icon to view app.]

Note that you must have all [prerequisites](#prerequisites-↑) (installed) for app to actually run.

Sidebar:

1. This tutorial is targeted at Go Developers who either have little to no prior or professional knowledge of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [RollupJS](https://rollupjs.org/) or [npm](https://docs.npmjs.com/) (Node Package Manager).
2. You should have a professional or working knowledge of GoLang; knowledge of React APIs is a plus.
3. You'll need have some chill and enthusiasm. :)

## Table of Contents

* [Prerequisites](#prerequisites-↑)
* [Set-up](#set-up--↑)
  * [Golang](#golang)
  * [npm](#npm-node-package-manager)
  * [GopherJS](#gopherjs)
  * [Electron](#electron)
  * [Go-React Bindings](#go-react-bindings)
  * [Rollup](#rollup)
* [Renderer](#renderer-↑)
* [Main](#main-↑)
* [Bundle](#bundle-↑)
  * [rollup-plugin-node-resolve](#--rollup-plugin-node-resolve)
  * [rollup-plugin-commonjs](#--rollup-plugin-commonjs)
  * [rollup-plugin-terser](#--rollup-plugin-terser)
  * [rollup-plugin-node-globals](#--rollup-plugin-node-globals)
  * [rollup-plugin-node-builtins](#--rollup-plugin-node-builtins)
  * [rollup-plugin-json](#--rollup-plugin-json)
  * [rollup-plugin-replace](#--rollup-plugin-replace)
  * [builtin-modules](#--builtin-modules)
  * [Rollup Config](#rollup-config)
* [Distribution](#distribution-↑)

Alright, before we start off, some prerequisites for development...

## Prerequisites [↑](#table-of-contents)

Basically, we have six prerequisites that would suffice our Go desktop app creation. They are:

* [Golang](https://golang.org/)
* [npm](https://docs.npmjs.com/)
* [GopherJS](https://github.com/gopherjs/gopherjs)
* [Electron](https://electronjs.org/)
* [Go-React Bindings](https://github.com/rocketlaunchr/react)
* [Rollup](https://rollupjs.org)

## Set-up  [↑](#table-of-contents)

Now, in order for our dream of creating (cross-platform) desktop apps with Go come to fruition, let's have our dependencies [prerequisites, if you will] set up.

### Golang

First, to program in Go, we'll, obviously, need to have it installed. Click [here](https://golang.org/dl/) to download and install a binary suitable for your OS (Operating System).

Having downloaded and installed Go, check to see [confirm] that the Go path env (environment) variable is set.

To check that Go has been successfully installed (and env variable set), run `go version` from a CLI. This should print the current version of Go you're running. See [installation instructions](https://golang.org/dl/) for more.

### npm (Node Package Manager)

npm is a very essential tool for JavaScript development.

What is [npm](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)?

> _npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management._

npm comes packaged with [Node.js](https://nodejs.org/) [a JavaScript runtime built on Chrome's V8 JavaScript engine].

We'll need to install Node in order to use npm. Click [here](https://nodejs.org/en/) to download and install the current version of Node for your OS.

To also check that Node has been installed (and env variable set), from a CLI, run `node -v` and `npm -v` respectively to get the versions of Node and npm.

### GopherJS

Next is our Go-to-JavaScript compiler: [GopherJS](https://github.com/gopherjs/gopherjs).

Installation:

```powershell
go get -u github.com/gopherjs/gopherjs
```

Heads up:

> `gopherjs` uses your platform's default `GOOS` value when generating code. Supported `GOOS` values are: `linux`, `darwin`. If you're on a different platform (e.g., Windows or FreeBSD), you'll need to set the `GOOS` environment variable to a supported value. For example, `GOOS=linux gopherjs build [package]`.

### Electron

[Electron](https://github.com/electron/electron) (or Electron.js) is a (JavaScript) framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium.

Installation:

```powershell
npm install electron --save-dev [--save-exact]
```

### Go-React Bindings

[Go-React Bindings](https://github.com/rocketlaunchr/react) is a package that utilizes the combination of (Facebook's) React.js (API) and Golang in creating awesome applications.

Installation:

```powershell
go get -u github.com/rocketlaunchr/react
```

### Rollup

Finally, on our dependencies list, our (JavaScript) bundler: Rollup.js.

> _[Rollup](https://rollupjs.org/guide/en/) is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application._

Installation:

```powershell
npm install --global rollup
```

A little more on Rollup will be discussed in the [bundle](#bundle-↑) section.

Alright. So, we are now all set and ready for an awesome 'Electron-Go-React' adventure. Sweet! Let's dive right in!

## Renderer [↑](#table-of-contents)

...

## Main [↑](#table-of-contents)

...

## Bundle [↑](#table-of-contents)

We now have to compile all our code into a single file [a bundle] to make it production-ready.

So, with Rollup [our bundler] installed, we need to create a Rollup configuration file (`rollup.config.js`) in the root directory of our app [on the same level as the package.json file] which will be picked up and used by Rollup to compile [bundle] all our code.

But before we go on to populate our config file with config code, let's `npm install` some Rollup plugins [development dependencies] which will be required by Rollup during bundling.

#### - [rollup-plugin-node-resolve](https://www.npmjs.com/package/rollup-plugin-node-resolve)

> _Locate modules using the Node resolution algorithm, for using third party modules in node_modules._

```powershell
npm install --save-dev rollup-plugin-node-resolve
```

#### - [rollup-plugin-commonjs](https://www.npmjs.com/package/rollup-plugin-commonjs)

> _Convert CommonJS modules to ES6, so they can be included in a Rollup bundle._

```powershell
npm install --save-dev rollup-plugin-node-resolve
```

#### - [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)

> _Rollup plugin to minify generated es bundle. Uses terser under the hood._

```powershell
npm install --save-dev rollup-plugin-terser
```

#### - [rollup-plugin-node-globals](https://www.npmjs.com/package/rollup-plugin-node-globals)

> _Plugin to insert node globals including so code that works with browserify should work even if it uses process or buffers._

```powershell
npm install --save-dev rollup-plugin-node-globals
```

#### - [rollup-plugin-node-builtins](https://www.npmjs.com/package/rollup-plugin-node-builtins)

> _Allows the node builtins to be [`require`d](https://nodejs.org/zh-cn/knowledge/getting-started/what-is-require/)/[`import`ed](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/). Doing so gives the proper shims to support modules that were designed for Browserify, some modules require rollup-plugin-node-globals._

```powershell
npm install --save-dev rollup-plugin-node-builtins
```

#### - [rollup-plugin-json](https://www.npmjs.com/package/rollup-plugin-json)

> _Convert .json files to ES6 modules._

```powershell
npm install --save-dev rollup-plugin-json
```

#### - [rollup-plugin-replace](https://www.npmjs.com/package/rollup-plugin-replace)

> _Replace strings in files while bundling them._

```powershell
npm install --save-dev rollup-plugin-replace
```

#### - [builtin-modules](https://www.npmjs.com/package/builtin-modules)

> _Returns an array of builtin modules fetched from the running Node.js version._

```powershell
npm install --save-dev builtin-modules
```

### Rollup Config

With all the dependencies installed, let's proceed to write some config code.

First, we import all the dependencies:

![Rollup Dependencies](./rollup_dependencies.png)

What is **[child_process](https://nodejs.org/api/child_process.html#child_process_child_process)**?

> _The child_process module allows to create child processes in Node.js. Those processes can easily communicate with each other using a built-in messaging system._

What is **[fs](https://nodejs.org/api/fs.html#fs_file_system)**?

> _The Node.js file system module provides an API for interacting with the file system._

Now, here is what the structure of our Rollup config [default](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export) [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export), `exp` (or any variable name you wish to use), would look like:

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

`input` (string) takes the path to the file to be bundled as its value.

`output` (object) takes an object of options for the final or target output [the bundle].

`external` (array) takes an array of strings as its value.

`plugins` (array) takes an array of plugins which are actually just functions called within.

Here's our config code:

**main process** Rollup config:

![Rollup Dependencies](./main_config.png)

**renderer process** Rollup config:

![Rollup Dependencies](./renderer_config.png)

Having done these, we can now create a build script for Rollup to build our app.

In `package.json`, under `"scripts"`, set `"build": "rollup -c"`. We can now run `npm run build` to build [bundle] our app.

Note that we could also run `rollup -c` directly from the CLI to build our app without actually using `npm run build` since we installed Rollup globally.

So, with that we've successfully bundled Mark-down and made it production-ready. ;)

## Distribution [↑](#table-of-contents)

...

[Go Up](#tutorial-how-to-create-a-cross-platform-desktop-app-with-electron-go-and-react)
