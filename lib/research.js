// global is 'window' in the client or 'exports' in the server
(function(global) {
  'use strict';

  var version = '0.0.2';

  // platform enum
  var platform = {
    BROWSER:      'document' in global ? true : false,
    WEB_WORKERS:  'WorkerLocation' in global ? true : false,
    SERVER:       'process' in global ? true : false
  };

  // color enum
  var color = {
    BLACK:    platform.BROWSER ? 'color: black' : '\u001b[30m',
    RED:      platform.BROWSER ? 'color: red' : '\u001b[31m',
    GREEN:    platform.BROWSER ? 'color: green' : '\u001b[32m',
    YELLOW:   platform.BROWSER ? 'color: yellow' : '\u001b[33m',
    BLUE:     platform.BROWSER ? 'color: blue' : '\u001b[34m',
    MAGENTA:  platform.BROWSER ? 'color: magenta' : '\u001b[35m',
    CYAN:     platform.BROWSER ? 'color: cyan' : '\u001b[36m',
    WHITE:    platform.BROWSER ? 'color: white' : '\u001b[37m',
    RESET:    platform.BROWSER ? 'color: reset' : '\u001b[0m'
  };

  // properties enum
  var propertyName = {
    DEFAULT:  ['constructor', 'Function', 'length', 'name', 'arguments', 'caller', 'prototype'],
    NUMBER:   ['MAX_VALUE', 'MIN_VALUE', 'NaN', 'NEGATIVE_INFINITY', 'POSITIVE_INFINITY', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'EPSILON'],
    ERROR:    ['stackTraceLimit', 'message']
  };

  // constructor
  function Research() {
    this.util = require('util');
  }

  // validate function
  var validate = {};
  
  /**
   * undefined and null check
   *
   * @param {Any} obj
   * @return {Error or Null} obj = null or undefined is error message. Other return null.
   */
  validate.isUndefinedAndNull = function(obj) {
    var errorMessege = new TypeError('Not supported null and undefined');
    if (obj == null) {
      if (platform.BROWSER) console.error(errorMessege);
      else console.error(color.RED + errorMessege + color.RESET);
      return errorMessege;
    }
    return null;
  };

  /**
   * Object get constructor type
   *
   * @param {Any} obj any-object
   * @return {String} strict type of object
   */
  var getType = function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  };

  /**
   * Exclude property
   *
   * @param {Array} arr parse-data
   * @return {Array} functions
   */
  var excludeProperties = function(arr) {
    var funcList = [];
    // regexp = '[Object]:' or 'Object:'
    var allRegexp = /[ |\[]([a-z|A-Z|0-9|_]*)[:|\]:]/;
    for (var i = 0, len = arr.length; i < len; i++) {
      var str = arr[i];
      if (str.match(allRegexp)) funcList.push(str.match(allRegexp)[1]);
    }

    if (funcList.length < 1) return [];
    // exclude constructor
    funcList.shift();

    var results = funcList.filter(function(val) {
      for (var key in propertyName) {
        if (propertyName[key].indexOf(val) > - 1) return false;
      }
      return true;
    });
    return results
  };

  /**
   * parse the properties
   *
   * @param {String} str properties
   * @param {Object} excludes exclude-flag
   * @return {Array} parse-data
   */
  var parseProperties = function(str, excludes) {
    var arr = str.split(/\n/);
    if (excludes.properties !== undefined && excludes.properties) return excludeProperties(arr);
    return arr;
  };

  /**
   * Get all functions
   *
   * @param {Any} obj any-object
   * @param {String or RegExp} grep grep-string
   *  ex. use ignore case /abc/i
   * @return {Array} all methods
   */
  var functions = function functions(obj, grep) {
    if(validate.isUndefinedAndNull(obj) !== null) return;

    var propertiesStr = this.util.inspect(obj.__proto__, {
      showHidden: true,
      depth: null
    });
    var results = parseProperties(propertiesStr, {properties: true});

    if (grep != null) {
      var grepStr = getType(grep) === 'RegExp' ? grep : new RegExp(grep);
      results = results.filter(function(func, idx, origin) {
        return func.match(grep);
      });
    }
    return console.log(results);
  };

  // Public API
  Research.prototype.getType = getType;
  Research.prototype.functions = functions;

  // export
  if ('process' in global) module['exports'] = Research;
  global['Research' in global ? 'Research_' : 'Research'] = Research;

})((this || 0).self || global);
