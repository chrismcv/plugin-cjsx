# plugin-jsx

> CJSX loader plugin for [jspm](https://jspm.io)

This plugin will translate CJSX templates to JS and executes them (like coffee-script or es6).

To use it you should install it with jspm:

```
jspm install cjsx=github:chrismcv/plugin-cjsx
```

After that you can include JSX templates in your modules:

```js
var Component = require('component.cjsx!');
```

### [React v0.13.0 Beta 1](http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html)

Not supported...

### Tests

```bash
jspm install
jspm install react
npm install
npm test
```
