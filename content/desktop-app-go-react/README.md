<!-- ---
title: Setup
date: 2019-09-01
draft: false
exclude_search: false
--- -->

# Tutorial: How to create a cross-platform Desktop App with Electron, Go and React

<!-- ![Electron + Go + React](https://github.com/rocketlaunchr/desktop-application/blob/tutorial/go-react-electron.png?raw=true) -->


With [GopherJS](https://github.com/gopherjs/gopherjs) [a Go-to-JavaScript compiler] and the power which [ElectronJS](https://electronjs.org/) possesses, Go Developers can now create cross-platform Desktop apps written 100% in [Golang](https://golang.org/).

In this tutorial, we'll be building a (cross-platform) Mark-down App written 100% in Go! :) 

To view the source code for our Markdown app, clone this [repo](https://github.com/rocketlaunchr/desktop-application/) to your local drive with:

```
git clone https://github.com/rocketlaunchr/desktop-application.git
```

To open app, having installed [npm](#npm-node-package-manager), run `npm start` from a CLI in the cloned directory. 

_[On app start, a tray icon should appear somewhere at the top of your screen (if you're on a Linux-based OS) or at the bottom-right of your screen (on the taskbar) on Windows. Click on this tray icon to view app.]_

Sidebar:
1. This tutorial is targeted at Go Developers who either have little to no prior or professional knowledge of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [RollupJS](https://rollupjs.org/) or [npm](https://docs.npmjs.com/) (Node Package Manager).
2. You should have a professional or working knowledge of GoLang; knowledge of React APIs is a plus.
3. You'll need have some chill and enthusiasm. :)

Alright, before we start off, some prerequisites for development...

## Prerequisites

* [Golang](https://golang.org/)
* [npm](https://docs.npmjs.com/)
* [GopherJS](https://github.com/gopherjs/gopherjs)
* [Electron](https://electronjs.org/)
* [Go-React Bindings](https://github.com/rocketlaunchr/react)
* [Rollup](https://rollupjs.org)


## Set-up

Ok. So, in order for our dream of creating (cross-platform) desktop apps with Go come to fruition, let's have our dependencies [prerequisites, if you will] set up.

### Golang

First, to program in Go, we'll, obviously, need to have it installed. Click [here](https://golang.org/dl/) to install a binary suitable for your OS (Operating System).

Having downloaded and installed Go, check to see [confirm] that the Go path env (environment) variable is set.

To check that Go has been successfully installed (and env variable set), run `go version` from a CLI (Command Line Interface). This should print the current version of Go you're running. See [installation instructions](https://golang.org/dl/) for more.

### npm (Node Package Manager)

npm is a very essential tool for JavaScript development.

What is npm? 

> npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

Click [here](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) to learn more.

npm comes packaged with Node.js [a JavaScript runtime built on Chrome's V8 JavaScript engine].

We'll need to install Node in order to use npm. Click [here](https://nodejs.org/en/) to download and install the current version of Node for your OS.

To check that Node has been installed (and env variable set), from a CLI, run `node -v` and `npm -v` to get the versions of Node and npm respectively.


### GopherJS

Next is our Go-to-JavaScript compiler: GopherJS. See the official  [GopherJS documentation](https://github.com/gopherjs/gopherjs) for installation and usage.

### Electron

[Electron](https://github.com/electron/electron) (or Electron.js) is a (JavaScript) framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium.

To install, in your current working/development directory, run:

```
npm install electron --save-dev [--save-exact]
```

### Go-React Bindings

[Go-React Bindings](https://github.com/rocketlaunchr/react) is a package that utilizes the combination of (Facebook's) React.js (API) and Golang in creating awesome applications.

To install, run:
```
go get -u github.com/rocketlaunchr/react
```

### Rollup

Finally, on our dependencies list, our (JavaScript) bundler: Rollup.js.

What is Rollup?

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

To install, run:

```
npm install --global rollup
```

A little more on Rollup will be discussed in the bundling section.

Alright. So, we are now all set and ready for an awesome 'Electron-Go-React' adventure. Sweet! Let's dive right in!





