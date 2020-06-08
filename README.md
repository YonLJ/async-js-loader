# async-js-loader

[![NPM Version](https://img.shields.io/npm/v/async-js-loader.svg?style=flat-square)](https://www.npmjs.com/package/async-js-loader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/async-js-loader.svg?style=flat-square)](https://www.npmjs.com/package/async-js-loader)

Load a JavaScript library asynchronously and the same library is loaded only once.  

## Pre-requisites

The loaded JavaScript library uses `var` to declare variables. In other words, a variable in the JavaScript library can be referenced using a property of the `window`. It can only be used in Browser.

## Install

```sh
npm i async-js-loader --save
```

## Usage

You can use async-js-loader in JavaScript or TypeScript.

async/await + [await-to-js](https://www.npmjs.com/package/await-to-js)

```js
import to from 'await-to-js';
import loader from 'async-js-loader';
// If you use CommonJS (i.e NodeJS environment), it should be:
// const loader = require('async-js-loader').default;

async loadAmapLibrary() {
  const [err, AMap] = await to(loader('AMap', 'https://webapi.amap.com/maps?v=1.4.15&key=license'));
  if(err) {
    console.log(err);
    return;
  }
  console.log(AMap);
  // If there are other variables or functions in this JavaScript library, you can get them from "window".
  // console.log(window[variableName])
}
```

Promise

```js
import loader from 'async-js-loader';

loadAmapLibrary() {
  loader('AMap', 'https://webapi.amap.com/maps?v=1.4.15&key=license')
    .then(AMap => console.log(AMap))
    .catch(e => console.log(e));
}
```

## License

MIT © Tintin

## keywords

async script load promise