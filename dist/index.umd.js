(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CaseAnything = {}));
})(this, (function (exports) { 'use strict';

  // Latin-1 Supplement
  // upper case ranges
  // [À-ÖØ-ß]
  // lower case ranges
  // [à-öø-ÿ]
  const magicSplit = /^[a-zà-öø-ÿ]+|[A-ZÀ-ÖØ-ß][a-zà-öø-ÿ]+|[a-zà-öø-ÿ]+|[0-9]+|[A-ZÀ-ÖØ-ß]+(?![a-zà-öø-ÿ])/g;
  /**
   * A string.match function that will return an array of "string parts"
   */
  function splitOnSpecialChars(string) {
      return string.match(magicSplit);
  }
  /**
   * A string.matchAll function that will return an array of "string parts" and the indexes at which it split each part
   */
  function getPartsAndIndexes(string) {
      const result = { parts: [], indexes: [] };
      const matches = string.matchAll(magicSplit);
      for (const match of matches) {
          result.parts.push(match[0]);
          result.indexes.push(match.index);
      }
      return result;
  }
  /**
   * A string.match function that will return an array of "string parts"
   */
  function getParts(string, stripSpecialCharacters = false) {
      const target = string.trim().normalize('NFC');
      const parts = target.includes(' ') ? target.split(' ').filter(Boolean) : splitOnSpecialChars(target);
      return stripSpecialCharacters ? parts.map((part) => part.normalize('NFD').replace(/[^a-zA-ZØßø0-9]/g, '')) : parts;
  }
  /**
   * Capitalises a single word
   * @returns the word with the first character in uppercase and the rest in lowercase
   */
  function capitaliseWord(string) {
      return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  // const stripSpecialCharacters = true
  /**
   * converts strings to camelCase
   *
   * @export
   * @param {string} string
   * @returns {string} in camelCase
   */
  function camelCase(string, stripSpecialCharacters = true) {
      console.log(`getParts(string, stripSpecialCharacters) → `, getParts(string, stripSpecialCharacters));
      return getParts(string, stripSpecialCharacters).reduce((result, match, index) => {
          return index === 0 ? match.toLowerCase() : result + capitaliseWord(match);
      }, '');
  }
  /**
   * converts strings to PascalCase
   *
   * @export
   * @param {string} string
   * @returns {string} in PascalCase
   */
  function pascalCase(string, stripSpecialCharacters = true) {
      return getParts(string, stripSpecialCharacters).reduce((result, match) => {
          return result + capitaliseWord(match);
      }, '');
  }
  /**
   * converts strings to kebab-case
   *
   * @export
   * @param {string} string
   * @returns {string} in kebab-case
   */
  function kebabCase(string, stripSpecialCharacters = true) {
      return getParts(string, stripSpecialCharacters).join('-').toLowerCase();
  }
  /**
   * converts strings to snake_case
   *
   * @export
   * @param {string} string
   * @returns {string} in snake_case
   */
  function snakeCase(string, stripSpecialCharacters = true) {
      return getParts(string, stripSpecialCharacters).join('_').toLowerCase();
  }
  /**
   * converts strings to CONSTANT_CASE
   *
   * @export
   * @param {string} string
   * @returns {string} in CONSTANT_CASE
   */
  function constantCase(string, stripSpecialCharacters = true) {
      return getParts(string, stripSpecialCharacters).join('_').toUpperCase();
  }
  /**
   * converts strings to path/case
   *
   * @export
   * @param {string} string
   * @returns {string} in path/case
   */
  function pathCase(string) {
      return getParts(string).join('/');
  }
  /**
   * converts strings to space case (will add spaces but not change casing)
   *
   * @export
   * @param {string} string
   * @returns {string} in path case
   */
  function spaceCase(string) {
      return getParts(string).join(' ');
  }
  /**
   * converts strings to Capital Case (with spaces)
   *
   * @export
   * @param {string} string
   * @returns {string} in Capital Case (with spaces)
   */
  function capitalCase(string) {
      return getParts(string)
          .reduce((result, match) => {
          return `${result} ${capitaliseWord(match)}`;
      }, '')
          .trim();
  }
  /**
   * converts strings to lower case (with spaces)
   *
   * @export
   * @param {string} string
   * @returns {string} in lower case (with spaces)
   */
  function lowerCase(string) {
      return getParts(string).join(' ').toLowerCase();
  }
  /**
   * converts strings to UPPER CASE (with spaces)
   *
   * @export
   * @param {string} string
   * @returns {string} in UPPER CASE (with spaces)
   */
  function upperCase(string) {
      return getParts(string).join(' ').toUpperCase();
  }

  exports.camelCase = camelCase;
  exports.capitalCase = capitalCase;
  exports.constantCase = constantCase;
  exports.getPartsAndIndexes = getPartsAndIndexes;
  exports.kebabCase = kebabCase;
  exports.lowerCase = lowerCase;
  exports.pascalCase = pascalCase;
  exports.pathCase = pathCase;
  exports.snakeCase = snakeCase;
  exports.spaceCase = spaceCase;
  exports.upperCase = upperCase;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
