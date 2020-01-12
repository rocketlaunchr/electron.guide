---
title: BrowserWindow
date: 2019-08-01
draft: false
exclude_search: false
---

<div align="center">
{{< figure src="https://github.com/rocketlaunchr/electron-alert/raw/master/assets/electronalert.png#center" height="50%" width="50%">}}
</div>

ElectronAlert is a beautiful and developer-friendly alert for [Electron](https://electronjs.org/) applications. It is powered by [SweetAlert2](https://sweetalert2.github.io) and works directly from the main process.

<div align="center">
{{< figure src="https://github.com/rocketlaunchr/electron-alert/raw/master/assets/example.gif#center" height="50%" width="50%">}}
</div>

# Features

-   WithFrame and Frameless alerts that are visually stunning
-   Toasts with timers
-   Exception handling alert
-   Sounds
-   SweetAlert2-esque API\* ([v8.19](https://sweetalert2.github.io/v8.html))

# Installation

```javascript
npm install electron-alert
```

# Github

https://github.com/rocketlaunchr/electron-alert

# Usage

-   See [SweetAlert2 v8.19](https://sweetalert2.github.io/v8.html) Documentation for further details ([configuration](https://sweetalert2.github.io/v8.html#configuration) & [methods](https://sweetalert2.github.io/v8.html#methods))
-   Not all methods are implemented as yet. See `src/alert.js` for more details.
-   Most methods will return a Promise that will resolve to the value from Swal.

## API

-   **constructor(head, devTools)**
-   **fireFrameless(swalOptions, parent, alwaysOnTop, draggable, sound, size)**
-   **fireWithFrame(swalOptions, title, parent, alwaysOnTop, sound, size)**
-   **fire(swalOptions, bwOptions, parent, alwaysOnTop, draggable, sound)**
-   **static fireToast(swalOptions, sound, size)**
-   **static uncaughtException(hideTrace, closure, alwaysOnTop, cleanStack)**
-   **const DismissReason = { cancel, close, esc, timer }**

Note: `swalOptions` mirrors SweetAlert2 options. `bwOptions` mirrors BrowserWindow options.

### sound

An optional note can be played when the alert is displayed. See https://marcgg.com/blog/2016/11/01/javascript-audio/ for more information.

```javascript
{
	"freq": "19.45" // or Eb0
	"type": "sine" // ["sine", "square", "triange", "sawtooth"]
	"duration": "1" // 1 sec
}
```

**Note to Frequency Map:**

|       | C     | C#    | D     | Eb    | E     | F     | F#    | G     | G#    | A     | Bb    | B     |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **0** | 16.35 | 17.32 | 18.35 | 19.45 | 20.60 | 21.83 | 23.12 | 24.50 | 25.96 | 27.50 | 29.14 | 30.87 |
| **1** | 32.70 | 34.65 | 36.71 | 38.89 | 41.20 | 43.65 | 46.25 | 49.00 | 51.91 | 55.00 | 58.27 | 61.74 |
| **2** | 65.41 | 69.30 | 73.42 | 77.78 | 82.41 | 87.31 | 92.50 | 98.00 | 103.8 | 110.0 | 116.5 | 123.5 |
| **3** | 130.8 | 138.6 | 146.8 | 155.6 | 164.8 | 174.6 | 185.0 | 196.0 | 207.7 | 220.0 | 233.1 | 246.9 |
| **4** | 261.6 | 277.2 | 293.7 | 311.1 | 329.6 | 349.2 | 370.0 | 392.0 | 415.3 | 440.0 | 466.2 | 493.9 |
| **5** | 523.3 | 554.4 | 587.3 | 622.3 | 659.3 | 698.5 | 740.0 | 784.0 | 830.6 | 880.0 | 932.3 | 987.8 |
| **6** | 1047  | 1109  | 1175  | 1245  | 1319  | 1397  | 1480  | 1568  | 1661  | 1760  | 1865  | 1976  |
| **7** | 2093  | 2217  | 2349  | 2489  | 2637  | 2794  | 2960  | 3136  | 3322  | 3520  | 3729  | 3951  |
| **8** | 4186  | 4435  | 4699  | 4978  | 5274  | 5588  | 5920  | 6272  | 6645  | 7040  | 7459  | 7902  |

# Examples

## Standard Alert

```javascript
const Alert = require("electron-alert");

let alert = new Alert();

let swalOptions = {
	title: "Are you sure you want to delete?",
	text: "You won't be able to revert this!",
	type: "warning",
	showCancelButton: true
};

let promise = alert.fireWithFrame(swalOptions, "Delete file?", null, false);
promise.then((result) => {
	if (result.value) {
		// confirmed
	} else if result.dismiss === Alert.DismissReason.cancel {
		// canceled
	}
})
```

## Frameless

```javascript
const Alert = require("electron-alert");

let alert = new Alert();

let swalOptions = {
	title: "Are you sure you want to delete?",
	text: "You won't be able to revert this!",
	type: "warning",
	showCancelButton: true
};

alert.fireFrameless(swalOptions, null, true, false);
```

## Toast

```javascript
const Alert = require("electron-alert");

let swalOptions = {
	position: "top-end",
	title: "Signed in successfully",
	type: "success",
	showConfirmButton: true,
	timer: 3000
};

Alert.fireToast(swalOptions);
```

## Exception Alert

Uncaught exceptions in the main process produce a hideous alert on both windows and macOS. You can use `uncaughtException()` to intercept the exception.

```javascript
const Alert = require("electron-alert");

app.on("ready", () => {
	process.on(
		"uncaughtException",
		Alert.uncaughtException(false, err => {
			console.error("Uncaught Exception:", err);
			app.exit(1);
		}, true, true)
	);
});
```

# Community Support

This library will be rebuilt from scratch for v1.0.0. Desktop alerts have certain nuances that differ from browser-based alerts. The API should embrace the different context rather than mirror Swal.

# License

The license is a MIT license. Refer to [LICENSE](https://github.com/rocketlaunchr/electron-alert/blob/master/LICENSE) file in Github repo for more details.
