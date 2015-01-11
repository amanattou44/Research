## Install
```javascript
npm install research
```

## Test run
```javascript
npm run client-test
npm run server-test

gulp test // client and server
```

## Usage
- Node.js
```javascript
> require('./node_modules/research/research');
{}

> var r = new Research;
undefined
> r.functions(1);
[ 'isFinite',
  'isNaN',
  'toString',
  'toLocaleString',
  'valueOf',
  'toFixed',
  'toExponential',
  'toPrecision' ]
```

- Client.js
```html
<script src='./node_modules/research/research.js'></script>

> var r = new Research;
< undefined
> r.functions(1);
< ["isFinite", "isInteger", "isNaN", "isSafeInteger", "parseInt", "parseFloat", "toString", "toLocaleString", "valueOf", "toFixed", "toExponential", "toPrecision"]
```

## TODO
- function description I want to watch those url open or console
