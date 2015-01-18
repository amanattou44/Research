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

> r.util.inspect((2).__proto__, true, null);
'{ [constructor]: \n   { [Function: Number]\n     [length]: 1,\n     [name]: \'Number\',\n     [arguments]: null,\n     [caller]: null,\n     [prototype]: [Circular],\n     [MAX_VALUE]: 1.7976931348623157e+308,\n     [MIN_VALUE]: 5e-324,\n     [NaN]: NaN,\n     [NEGATIVE_INFINITY]: -Infinity,\n     [POSITIVE_INFINITY]: Infinity,\n     [isFinite]: \n      { [Function: isFinite]\n        [length]: 1,\n        [name]: \'isFinite\',\n        [arguments]: null,\n        [caller]: null },\n     [isNaN]: \n      { [Function: isNaN]\n        [length]: 1,\n        [name]: \'isNaN\',\n        [arguments]: null,\n        [caller]: null } },\n  [toString]: \n   { [Function: toString]\n     [length]: 1,\n     [name]: \'toString\',\n     [arguments]: null,\n     [caller]: null },\n  [toLocaleString]: \n   { [Function: toLocaleString]\n     [length]: 0,\n     [name]: \'toLocaleString\',\n     [arguments]: null,\n     [caller]: null },\n  [valueOf]: \n   { [Function: valueOf]\n     [length]: 0,\n     [name]: \'valueOf\',\n     [arguments]: null,\n     [caller]: null },\n  [toFixed]: \n   { [Function: toFixed]\n     [length]: 1,\n     [name]: \'toFixed\',\n     [arguments]: null,\n     [caller]: null },\n  [toExponential]: \n   { [Function: toExponential]\n     [length]: 1,\n     [name]: \'toExponential\',\n     [arguments]: null,\n     [caller]: null },\n  [toPrecision]: \n   { [Function: toPrecision]\n     [length]: 1,\n     [name]: \'toPrecision\',\n     [arguments]: null,\n     [caller]: null } }'
```

- Client.js

```html
<script src='./node_modules/research/research.js'></script>

> var r = new Research;
< undefined

> r.functions(1);
< ["isFinite", "isInteger", "isNaN", "isSafeInteger", "parseInt", "parseFloat", "toString", "toLocaleString", "valueOf", "toFixed", "toExponential", "toPrecision"]

> r.util.inspect((2).__proto__, true, null);
"{ [constructor]: 
   { [Function: Number]
     [length]: 1,
     [name]: 'Number',
     [arguments]: null,
     [caller]: null,
     [prototype]: [Circular],
     [MAX_VALUE]: 1.7976931348623157e+308,
     [MIN_VALUE]: 5e-324,
     [NaN]: NaN,
     [NEGATIVE_INFINITY]: -Infinity,
     [POSITIVE_INFINITY]: Infinity,
     [MAX_SAFE_INTEGER]: 9007199254740991,
     [MIN_SAFE_INTEGER]: -9007199254740991,
     [EPSILON]: 2.220446049250313e-16,
     [isFinite]: 
      { [Function: isFinite]
        [length]: 1,
        [name]: 'isFinite',
        [arguments]: null,
        [caller]: null },
     [isInteger]: 
      { [Function: isInteger]
        [length]: 1,
        [name]: 'isInteger',
        [arguments]: null,
        [caller]: null },
     [isNaN]: 
      { [Function: isNaN]
        [length]: 1,
        [name]: 'isNaN',
        [arguments]: null,
        [caller]: null },
     [isSafeInteger]: 
      { [Function: isSafeInteger]
        [length]: 1,
        [name]: 'isSafeInteger',
        [arguments]: null,
        [caller]: null },
     [parseInt]: 
      { [Function: parseInt]
        [length]: 2,
        [name]: 'parseInt',
        [arguments]: null,
        [caller]: null },
     [parseFloat]: 
      { [Function: parseFloat]
        [length]: 1,
        [name]: 'parseFloat',
        [arguments]: null,
        [caller]: null } },
  [toString]: 
   { [Function: toString]
     [length]: 1,
     [name]: 'toString',
     [arguments]: null,
     [caller]: null },
  [toLocaleString]: 
   { [Function: toLocaleString]
     [length]: 0,
     [name]: 'toLocaleString',
     [arguments]: [Getter/Setter],
     [caller]: [Getter/Setter] },
  [valueOf]: 
   { [Function: valueOf]
     [length]: 0,
     [name]: 'valueOf',
     [arguments]: null,
     [caller]: null },
  [toFixed]: 
   { [Function: toFixed]
     [length]: 1,
     [name]: 'toFixed',
     [arguments]: null,
     [caller]: null },
  [toExponential]: 
   { [Function: toExponential]
     [length]: 1,
     [name]: 'toExponential',
     [arguments]: null,
     [caller]: null },
  [toPrecision]: 
   { [Function: toPrecision]
     [length]: 1,
     [name]: 'toPrecision',
     [arguments]: null,
     [caller]: null } }"
```

## TODO
- function description I want to watch those url open or console
