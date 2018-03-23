# is-regexp-string

> Check if a string is a regular expression

* The string *must* include the opening &amp; closing forward slash (`/`).
* Regular expression flags, e.g. `gim`, may be optionally included.

## Install

```
$ npm install is-regexp-string
```

## Usage

```js
const isRegexpString = require('is-regexp-string');

// The forward slashes of the regular expression are *required*
isRegexpString('/(foo|bar)/gi');
//=> true

isRegexpString('foo|bar');
//=> false

// Valid RegExp, but matches everything
isRegexpString('/foo|/');
//=> true
```

## Related

- [is-regexp](https://github.com/sindresorhus/is-regexp) - Check if a value is a regular expression

## License

MIT
