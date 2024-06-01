import { capitaliseWord, magicSplit, splitAndPrefix } from './utils.js';
/**
 * # 🐪 camelCase
 * converts a string to camelCase
 * - first lowercase then all capitalised
 * - *strips away* special characters by default
 *
 * @example
 *   camelCase('$catDog') === 'catDog'
 * @example
 *   camelCase('$catDog', { keepSpecialCharacters: true }) === '$catDog'
 */
export function camelCase(string, options) {
    return splitAndPrefix(string, options).reduce((result, word, index) => {
        return index === 0 || !(word[0] || '').match(magicSplit)
            ? result + word.toLowerCase()
            : result + capitaliseWord(word);
    }, '');
}
/**
 * # 🐫 PascalCase
 * converts a string to PascalCase (also called UpperCamelCase)
 * - all capitalised
 * - *strips away* special characters by default
 *
 * @example
 *   pascalCase('$catDog') === 'CatDog'
 * @example
 *   pascalCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export function pascalCase(string, options) {
    return splitAndPrefix(string, options).reduce((result, word) => {
        return result + capitaliseWord(word);
    }, '');
}
/**
 * # 🐫 UpperCamelCase
 * converts a string to UpperCamelCase (also called PascalCase)
 * - all capitalised
 * - *strips away* special characters by default
 *
 * @example
 *   upperCamelCase('$catDog') === 'CatDog'
 * @example
 *   upperCamelCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export const upperCamelCase = pascalCase;
/**
 * # 🥙 kebab-case
 * converts a string to kebab-case
 * - hyphenated lowercase
 * - *strips away* special characters by default
 *
 * @example
 *   kebabCase('$catDog') === 'cat-dog'
 * @example
 *   kebabCase('$catDog', { keepSpecialCharacters: true }) === '$cat-dog'
 */
export function kebabCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '-' })
        .join('')
        .toLowerCase();
}
/**
 * # 🐍 snake_case
 * converts a string to snake_case
 * - underscored lowercase
 * - *strips away* special characters by default
 *
 * @example
 *   snakeCase('$catDog') === 'cat_dog'
 * @example
 *   snakeCase('$catDog', { keepSpecialCharacters: true }) === '$cat_dog'
 */
export function snakeCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '_' })
        .join('')
        .toLowerCase();
}
/**
 * # 📣 CONSTANT_CASE
 * converts a string to CONSTANT_CASE
 * - underscored uppercase
 * - *strips away* special characters by default
 *
 * @example
 *   constantCase('$catDog') === 'CAT_DOG'
 * @example
 *   constantCase('$catDog', { keepSpecialCharacters: true }) === '$CAT_DOG'
 */
export function constantCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '_' })
        .join('')
        .toUpperCase();
}
/**
 * # 🚂 Train-Case
 * converts strings to Train-Case
 * - hyphenated & capitalised
 * - *strips away* special characters by default
 *
 * @example
 *   trainCase('$catDog') === 'Cat-Dog'
 * @example
 *   trainCase('$catDog', { keepSpecialCharacters: true }) === '$Cat-Dog'
 */
export function trainCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '-' })
        .map((word) => capitaliseWord(word))
        .join('');
}
/**
 * # 🕊 Ada_Case
 * converts a string to Ada_Case
 * - underscored & capitalised
 * - *strips away* special characters by default
 *
 * @example
 *   adaCase('$catDog') === 'Cat_Dog'
 * @example
 *   adaCase('$catDog', { keepSpecialCharacters: true }) === '$Cat_Dog'
 */
export function adaCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '_' })
        .map((part) => capitaliseWord(part))
        .join('');
}
/**
 * # 👔 COBOL-CASE
 * converts a string to COBOL-CASE
 * - hyphenated uppercase
 * - *strips away* special characters by default
 *
 * @example
 *   cobolCase('$catDog') === 'CAT-DOG'
 * @example
 *   cobolCase('$catDog', { keepSpecialCharacters: true }) === '$CAT-DOG'
 */
export function cobolCase(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '-' })
        .join('')
        .toUpperCase();
}
/**
 * # 📍 Dot.notation
 * converts a string to dot.notation
 * - adds dots, does not change casing
 * - *strips away* special characters by default
 *
 * @example
 *   dotNotation('$catDog') === 'cat.Dog'
 * @example
 *   dotNotation('$catDog', { keepSpecialCharacters: true }) === '$cat.Dog'
 */
export function dotNotation(string, options) {
    return splitAndPrefix(string, { ...options, prefix: '.' }).join('');
}
/**
 * # 📂 Path/case
 * converts a string to path/case
 * - adds slashes, does not change casing
 * - *keeps* special characters by default
 *
 * @example
 *   pathCase('$catDog') === '$cat/Dog'
 * @example
 *   pathCase('$catDog', { keepSpecialCharacters: false }) === 'cat/Dog'
 */
export function pathCase(string, options = { keepSpecialCharacters: true }) {
    return splitAndPrefix(string, options).reduce((result, word, i) => {
        const prefix = i === 0 || word[0] === '/' ? '' : '/';
        return result + prefix + word;
    }, '');
}
/**
 * # 🛰 Space case
 * converts a string to space case
 * - adds spaces, does not change casing
 * - *keeps* special characters by default
 *
 * @example
 *   spaceCase('$catDog') === '$cat Dog'
 * @example
 *   spaceCase('$catDog', { keepSpecialCharacters: false }) === 'cat Dog'
 */
export function spaceCase(string, options = { keepSpecialCharacters: true }) {
    return splitAndPrefix(string, { ...options, prefix: ' ' }).join('');
}
/**
 * # 🏛 Capital Case
 * converts a string to Capital Case
 * - capitalizes words and adds spaces
 * - *keeps* special characters by default
 *
 * @example
 *   capitalCase('$catDog') === '$Cat Dog'
 * @example
 *   capitalCase('$catDog', { keepSpecialCharacters: false }) === 'Cat Dog'
 *
 * ⟪ if you do not want to add spaces, use `pascalCase()` ⟫
 */
export function capitalCase(string, options = { keepSpecialCharacters: true }) {
    return splitAndPrefix(string, { ...options, prefix: ' ' }).reduce((result, word) => {
        return result + capitaliseWord(word);
    }, '');
}
/**
 * # 🔡 lower case
 * converts a string to lower case
 * - makes words lowercase and adds spaces
 * - *keeps* special characters by default
 *
 * @example
 *   lowerCase('$catDog') === '$cat dog'
 * @example
 *   lowerCase('$catDog', { keepSpecialCharacters: false }) === 'cat dog'
 *
 * ⟪ if you do not want to add spaces, use the native JS `toLowerCase()` ⟫
 */
export function lowerCase(string, options = { keepSpecialCharacters: true }) {
    return splitAndPrefix(string, { ...options, prefix: ' ' })
        .join('')
        .toLowerCase();
}
/**
 * # 🔠 UPPER CASE
 * converts a string to UPPER CASE
 * - makes words upper case and adds spaces
 * - *keeps* special characters by default
 *
 * @example
 *   upperCase('$catDog') === '$CAT DOG'
 * @example
 *   upperCase('$catDog', { keepSpecialCharacters: false }) === 'CAT DOG'
 *
 * ⟪ if you do not want to add spaces, use the native JS `toUpperCase()` ⟫
 */
export function upperCase(string, options = { keepSpecialCharacters: true }) {
    return splitAndPrefix(string, { ...options, prefix: ' ' })
        .join('')
        .toUpperCase();
}
