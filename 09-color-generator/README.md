# values.js

[![NPM Version][npm-image]][npm-url]
[![Minzipped size][bundlephobia-image]][bundlephobic-url]
[![License][license-image]][license-url]
![][github-actions-nodejs-image]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Libraries.io dependency status for latest release][librariesio-img]][librariesio-url]
[![Total alerts][lgtm-image]][lgtm-url]
[![Language grade: JavaScript][lgtm-grade-image]][lgtm-grade-url]

Get tints and shades of a CSS color

> _The lightness or darkness of a color is called its value.
Tints are light values that are made by mixing a color with white, which increases lightness. Shades are dark values that are made by mixing a color with black, which reduces lightness._

https://noeldelgado.github.io/values.js/

### Supports
* \<color value\>
	* Hexadecimal RGB value: #RGB #RRGGBB
	* #RGBA #RRGGBBAA (4 and 8-digit hexadecimal RGBA notation)
	* RGB/A - CSS Color Module Level 3 and 4 (number, percentage)
	* HSL/A - CSS Color Module Level 3 and 4 (number, deg, rad, turn)
* \<color keyword\>
	* One of the [pre-defined color keywords](https://www.w3.org/wiki/CSS/Properties/color/keywords).
* transparent
	* Shorthand for transparent black, rgba(0,0,0,0).

## Installation

**NPM**

```sh
npm install values.js --save
```

Or as a `<script>` tag from a CDN as `Values`:

**Unpkg CDN**

```html
<script src="https://unpkg.com/values.js"></script>
```

**jsDelivr CDN**

```html
<script src="https://cdn.jsdelivr.net/npm/values.js"></script>
```

## Usage
```js
import Values from 'values.js'
const color = new Values('hsl(204deg 100% 50% / 1)'), { log } = console

log(color.tint(25))
//> { rgb: [64, 179, 255], alpha: 1, type: "tint", weight: 25, ...methods }
log(color.shade(12))
//> { rgb: [0, 135, 224], alpha: 1, type: "shade", weight: 12, ...methods }
log(color.tints(8))
//> (12) [Values...]
log(color.shades(23))
//> (4) [Values...]
log(color.all(20))
//> (11) [Values...]

// instance example for 'red'
Values {
  alpha: 1
  rgb: (3) [255, 0, 0]
  type: "base"
  weight: 0
  get hex: ƒ(...)
  setColor: ƒ setColor(color)
  tint: ƒ tint(weight=50)
  tints: ƒ tints(weight=10)
  shade: ƒ shade(weight=50)
  shades: ƒ shades(weight=10)
  all: ƒ all(weight=10)
  hexString: ƒ hexString()
  rgbString: ƒ rgbString()
  getBrightness: ƒ getBrightness()
}
```
See [tests](https://github.com/noeldelgado/values.js/tree/master/test) for more cases.


