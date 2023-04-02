/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele: HTMLElement, cls: string) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele: HTMLElement, cls: string) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele: HTMLElement, cls: string) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  const isExternal = /^(https?:|http?:|mailto:|tel:)/.test(path);
  return isExternal;
}

const STRING_PROTOTYPE = '[object String]'
const NUMBER_PROTOTYPE = '[object Number]'
const REGEXP_PROTOTYPE = '[object RegExp]'
const DATE_PROTOTYPE = '[object Date]'
const BOOL_PROTOTYPE = '[object Boolean]'
const ARRAY_PROTOTYPE = '[object Array]'
const OBJECT_PROTOTYPE = '[object Object]'
const FUNCTION_PROTOTYPE = '[object Function]'

function protoString (obj: any) {
  return Object.prototype.toString.call(obj)
}

export function isString (str: any) {
  return protoString(str) === STRING_PROTOTYPE
}

export function isNumber (num: any) {
  return protoString(num) === NUMBER_PROTOTYPE
}

export function isRegExp (reg: any) {
  return protoString(reg) === REGEXP_PROTOTYPE
}

export function isBool (bool: any) {
  return protoString(bool) === BOOL_PROTOTYPE
}

export function isDate (date: any) {
  return protoString(date) === DATE_PROTOTYPE
}

export function isArray (arr: any) {
  return protoString(arr) === ARRAY_PROTOTYPE
}

export function isObject (obj: any) {
  return protoString(obj) === OBJECT_PROTOTYPE
}

export function isFunction (fn: any) {
  return protoString(fn) === FUNCTION_PROTOTYPE
}

/**
 * Vue data merge
 * @param  {Object} to      object that want to be merge to
 * @param  {Object} origins origin object sources
 */
export function merge (to: Record<string, any>, ...origins: Record<string, any>[]) {
  origins.forEach(from => {
    for (const key in from) {
      const value = from[key]
      // Just merge existed property in origin data
      if (to[key] !== undefined) {
        switch (protoString(value)) {
          case OBJECT_PROTOTYPE:
            merge(to[key], value)
            break
          default:
            to[key] = value
            break
        }
      }
    }
  })
}
