# values.js

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


## App.js

```js
import { useState } from "react";
import Values from 'values.js'
import SingleColor from "./pages/SingleColor";
import { toastErrorNotify } from "./helper/toastify";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10)); //! array içinde objeler
  // console.log(list)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color === "") {
      toastErrorNotify("Unable parse color from string")
    }
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }


  return (
    <>
      <section className="container">
        <h3>color genrator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })}
      </section>
    </>

  );
}

export default App;

```

## SingleColor.jsx

```js
import rgbToHex from "../utils/utils";
import { toastSuccessNotify } from "../helper/toastify";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const bcg = rgb.join(",") //! array olana join ile virgül le ayırarak string yaptık
    // console.log(bcg)
    const hexValue = `#${hexColor}`
    // console.log(hexValue)
    const hex = rgbToHex(...rgb)

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                toastSuccessNotify("Color copied to clipboard")
                navigator.clipboard.writeText(hexValue) //! kopyalama işlemi yapar
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>

        </article>
    )
}

export default SingleColor

```


## toasitfy.js
### import 'react-toastify/dist/ReactToastify.css';
### import { ToastContainer } from 'react-toastify'; index.js

```js
import { toast } from 'react-toastify';

export const toastWarnNotify = (msg) => {
    toast.warn(msg, {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const toastSuccessNotify = (msg) => {
    toast.success(msg, {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const toastErrorNotify = (msg) => {
    toast.error(msg, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

```