# PopUp.js

PopUp.js is an easy-to-use popup library for browsers.

**Install**

To install, you can **clone or download this repository** or **import via CDN**

**Import via CDN**

1. CommonJS **minified (production)** version (no ES6 modules)

```html
<!-- CommonJS Module to import from  anothe module -->
<script src="https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/common/index.min.js"></script>
```

2. CommonJS **non-minified (development)** version (no ES6 modules)

```html
<!-- CommonJS Module to import from  anothe module -->
<script src="https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/common/index.js"></script>
```

3. ES6 Module **minified (production)**

```js
// this version should be imported directly from your script
import Popup from "https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/index.min.js"
```

4. ES6 Module **non-minified (development)**

```js
// this version should be imported directly from your script
import Popup from "https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/index.js"
```

**Required:** Import styles for the popups to work.

```html
<!-- Development mode -->
<link href="https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/bundle/all.css" />
<!-- or production version optimized for speed -->
<link href="https://cdn.jsdelivr.net/gh/rodri-r-z/popup.js/bundle/all.min.css" />
```

---

## Use

To create a popup, you must use the `Popup` constructor.

**Example**

```js
const myPopup = new Popup();
```

> This is going to create a new `Popup` instance.

---

## `update(msg: string) : Popup`

This method is going to update the popup display message.

**Example**

```js
myPoup.update("Hello world");
```

## `theme(theme: string) : Popup`

This method is going to update the popup theme.

**Example**

```js
myPoup.update("Hello world").theme("dark");
```

There are two admitted themes: **light** and **dark**.

## `CSS(css: string | Object) : Popup`

This method is going to update the popup theme.

**Example**

```js
myPoup.update("Hello world").theme("dark").CSS({
    color: "red" // now the text color will be red
});
```

```js
myPoup.update("Hello world").theme("dark").CSS("color:red;"); // now the text color will be red
```

It accepts a CSS string or an object with properties.

**Note:** For properties that have a dash, use camelcase.

**Example**

```js
myPoup.update("Hello world").theme("dark").CSS({
    fontWeight: "600" // now the font weight will be 600
});
```

## `animate(keyframesId: string) : Popup`

Animates the toup when it appears. **Make sure:** The animation name needs to be the same position as the modal position.

**Example:** Is the modal is at _top left_, the animation must be **top**.

**Admitted animations:** _top_ and _bottom_.

## `displaySide(side: string) : Popup`

Changes the displau side of the popup.

**Required:** There are four permitted positions: _top left_, _top right_, _bottom left_ and _bottom right_.

**Example**

```js
myPoup.update("Hello world").theme("dark").displaySide("top left");
```

## `init(settings: Object) : Popup`

Summarizes all the configurations into a single object.

**Example**

```js
import Popup from './Popup';

// Create a popup
const myPopup = new Popup();

// Configure popup
myPopup.init({
    msg: 'Hello world!',
    theme: 'dark',
    side: 'top right',
    animation: 'top',
    css: {
        fontSize: '16px',
        backgroundColor: '#333',
        color: '#fff'
    }
}).append(document.getElementById('popupContainer')).show();

// Hide after 3s
setTimeout(() => {
    myPopup.hide();
}, 3000);
```

## `append(root: Element | undefined) : Popup`

Appends the popup into an specific DOM element, if it is not specified, the root element is going to be the body element.

**Example**

```js
myPopup.init({
    msg: 'Hello world!',
    theme: 'dark',
    side: 'top right',
    animation: 'top',
    css: {
        fontSize: '16px',
        backgroundColor: '#333',
        color: '#fff'
    }
}).append(document.getElementById('popupContainer')).show();
```

Or

```js
myPopup.init({
    msg: 'Hello world!',
    theme: 'dark',
    side: 'top right',
    animation: 'top',
    css: {
        fontSize: '16px',
        backgroundColor: '#333',
        color: '#fff'
    }
}).append().show();
```

## `show() : Popup`

Shows the popup.

**Example**

```js
myPopup.init({
    msg: 'Hello world!',
    theme: 'dark',
    side: 'top right',
    animation: 'top',
    css: {
        fontSize: '16px',
        backgroundColor: '#333',
        color: '#fff'
    }
}).append().show();
```

## `hide() : Popup`

Hides the popup.

**Example**

```js
// Hide after 3s
setTimeout(() => {
    myPopup.hide();
}, 3000);
```

---

## LICENSE

[Released under the MIT License](https://github.com/rodri-r-z/popup.js/blob/main/LICENSE)