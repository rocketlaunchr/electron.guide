<!-- ---
title: Setup
date: 2019-09-01
draft: false
exclude_search: false
--- -->

# Tutorial: How to create a cross-platform Desktop App using Electron, Go and React

![Electron + Go + React](https://github.com/rocketlaunchr/desktop-application/blob/tutorial/go-react-electron.png?raw=true)


With [GopherJS](https://github.com/gopherjs/gopherjs) [a Go-to-JavaScript compiler] and the power which [ElectronJS](https://electronjs.org/) possesses, Go Developers can now create cross-platform Desktop apps written 100% in [Golang](https://golang.org/) with the help of [Go-React Bindings](https://github.com/rocketlaunchr/react).

Sidebar:
1. This tutorial is targeted at Go Developers who either have little to no prior or professional knowledge of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [RollupJS](https://rollupjs.org/) or [npm](https://docs.npmjs.com/) (Node Package Manager).
2. You should have a professional or working knowledge of GoLang.
3. You'll need have some chill and enthusiasm. :)

Before we start off, let's install some dependencies for development.


## Dependencies

In order for our dream of creating (cross-platform) desktop apps using Go come to fruition, we'll need to have some dependencies installed [prerequisites, if you will] for development.

* ### Golang

First on our dependencies list is Golang. 

Obviously, to program in Go, we'll need to first have it installed. To install a binary suitable for your OS (Operating System), click [here](https://golang.org/dl/).

Having downloaded and installed Go, check to see [confirm] that the Go path env (environment) variable is set.

To check that Go has been successfully installed and env variable set, open your terminal and enter `go version`. This should print the current Go version you're running. See [installation instructions](https://golang.org/dl/) for more.

* ### npm (Node Package Manager)

A very essential tool for JavaScript development is next on our list.

What is npm? 

> npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

To learn a little bit more, click [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/).

npm comes packaged with Node.js [a JavaScript runtime built on Chrome's V8 JavaScript engine].

We'll need to have Node installed in order to use npm. Click [here](https://nodejs.org/en/) to install the current version of Node for your OS.


* ### GopherJS

Next is our Go-to-JavaScript compiler: GopherJS. See [documentation](https://github.com/gopherjs/gopherjs) for installation and usage.

* ### Electron

Next on our dependencies list is Electron [or Electron.js].

What is Electron?

Electron is a (JavaScript) framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium.

To install [Electron](https://github.com/electron/electron), in your current working/development directory, run:

```
npm install electron --save-dev [--save-exact]
```

* ### Go-React Bindings

...

* ### Rollup

Finally, on our dependencies list, our (JavaScript) bundler: Rollup.js.

What is Rollup?

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

To install, run:

```
npm install --global rollup
```

A little more on Rollup will be discussed in the bundling section.



Alright. So, we are now all set and ready for an awesome 'Electron-Go-React' adventure. Sweet! Let's move on!


## What we'll be building: A Mark-down App

In this tutorial, we'll be building a (cross-platform) Mark-down App. See this [repository](https://github.com/rocketlaunchr/desktop-application/) for full source code.

To have a look and feel of our Markdown app, clone the repo locally with:

```
git clone https://github.com/rocketlaunchr/desktop-application.git
```

then run `npm start` in the cloned directory from the terminal.

_On app start, a tray icon should be displayed somewhere at the top of your screen (if you're on a Linux-based OS) or at the bottom-right of your screen (on the taskbar) on Windows. Click on this icon to view app._


...



