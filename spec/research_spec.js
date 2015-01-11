require('../lib/research');
var assert = require('power-assert');
var research = new Research();

var platform = {};
(function(global) {
  platform.BROWSER = 'document' in global ? true : false;
  platform.WEB_WORKERS = 'WorkerLocation' in global ? true : false;
  platform.SERVER = 'process' in global ? true : false;
})((this || 0).self || global);

describe('research', function() {
  it('should return functions not 0 by string', function() {
    var functions = research.functions('');
    assert(functions.length > 0);
  });

  it('should return functions not 0 by number', function() {
    var functions = research.functions(1);
    assert(functions.length > 0);
  });

  it('should return functions not 0 by boolean', function() {
    var functions = research.functions(true);
    assert(functions.length > 0);
  });

  it('should return functions not 0 by object', function() {
    var functions = research.functions({});
    assert(functions.length > 0);
  });

  it('should return functions not 0 by array', function() {
    var functions = research.functions([]);
    assert(functions.length > 0);
  });

  it('should return functions not 0 by function', function() {
    var functions = research.functions(new Function());
    assert(functions.length > 0);
  });

  it('should return functions not 0 by regexp', function() {
    var functions = research.functions(new RegExp());
    assert(functions.length > 0);
  });

  it('should return functions not 0 by error, but browser function 0', function() {
    var functions = research.functions(new Error(''));
    if (platform.BROWSER) assert(functions.length === 0);
    else if (platform.SERVER) assert(functions.length > 0);
  });

  it('should return console error "Not supported null and undefined', function() {
    assert.throws(research.functions(null));
  });

  it('should return grep been functions by string', function() {
    var functions = research.functions('', 'to');
    var expectedFunctions = ['toString', 'toLowerCase', 'toLocaleLowerCase', 'toUpperCase', 'toLocaleUpperCase']; 
    assert(functions, expectedFunctions);
  });

  it('should return grep been functions by regexp use ignore case', function() {
    var functions = research.functions('', /tol/i);
    var expectedFunctions = ['toLowerCase', 'toLocaleLowerCase', 'toLocaleUpperCase']; 
    assert(functions, expectedFunctions);
  });

  it('should return functions 0 grep by number', function() {
    var functions = research.functions('', /1/);
    var expectedFunctions = []; 
    assert(functions, expectedFunctions);
  });

});
