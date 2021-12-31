import { splitAndPrefix, capitaliseWord, magicSplit } from './utils'

/**
 * # 🐪 camelCase
 * converts a string to camelCase
 */
export function camelCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: false }
): string {
  return splitAndPrefix(string, options).reduce((result, word, index) => {
    return index === 0 || !word[0].match(magicSplit) ? result + word.toLowerCase() : result + capitaliseWord(word)
  }, '')
}

/**
 * # 🐫 PascalCase
 * converts a string to PascalCase (also called UpperCamelCase)
 */
export function pascalCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: false }
): string {
  return splitAndPrefix(string, options).reduce((result, word) => {
    return result + capitaliseWord(word)
  }, '')
}

/**
 * # 🐫 UpperCamelCase
 * converts a string to UpperCamelCase (also called PascalCase)
 */
export const upperCamelCase = pascalCase

/**
 * # 📍 dot.notation
 * converts a string to dot.notation
 */
export function dotNotation(string: string): string {
  return getParts(string, noSpecialChars).join('.').toLowerCase()
}

/**
 * # 🥙 kebab-case
 * converts a string to kebab-case
 */
export function kebabCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: false }
): string {
  return splitAndPrefix(string, { ...options, prefix: '-' })
    .join('')
    .toLowerCase()
}

/**
 * # 🐍 snake_case
 * converts a string to snake_case
 */
export function snakeCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: false }
): string {
  return splitAndPrefix(string, { ...options, prefix: '_' })
    .join('')
    .toLowerCase()
}

/**
 * # 📣 CONSTANT_CASE
 * converts a string to CONSTANT_CASE
 */
export function constantCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: false }
): string {
  return splitAndPrefix(string, { ...options, prefix: '_' })
    .join('')
    .toUpperCase()
}

/**
 * converts strings to Train-Case
 *
 * @export
 * @param {string} string
 * @returns {string} in Train-Case
 */
export function trainCase(string) {
  return getParts(string, noSpecialChars)
    .map((part) => capitaliseWord(part))
    .join('-')
}

/**
 * # 📣 Ada-Case
 * converts a string to Ada_Case
 */
export function adaCase(string) {
  return getParts(string, noSpecialChars)
    .map((part) => capitaliseWord(part))
    .join('_')
}

/**
 * # 📂 COBOL-CASE
 * converts a string to COBOL-CASE
 */
export function cobolCase(string: string): string {
  return getParts(string, noSpecialChars).join('-').toUpperCase()
}

/**
 * # 📂 path/case
 * converts a string to path/case (does not change casing)
 */
export function pathCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: true }
): string {
  return splitAndPrefix(string, options).reduce((result, word, i) => {
    const prefix = i === 0 || word[0] === '/' ? '' : '/'
    return result + prefix + word
  }, '')
}

/**
 * # 🛰 space case
 * converts a string to space case (will add spaces but not change casing)
 */
export function spaceCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: true }
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' }).join('')
}

/**
 * # 🏛 Capital Case
 * converts a string to Capital Case (and adds spaces)
 */
export function capitalCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: true }
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' }).reduce((result, word) => {
    return result + capitaliseWord(word)
  }, '')
}

/**
 * # 🔡 lower case
 * converts a string to lower case (and adds spaces)
 */
export function lowerCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: true }
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' })
    .join('')
    .toLowerCase()
}

/**
 * # 🔠 UPPER CASE
 * converts a string to UPPER CASE (and adds spaces)
 */
export function upperCase(
  string: string,
  options: { keepSpecialCharacters: boolean } = { keepSpecialCharacters: true }
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' })
    .join('')
    .toUpperCase()
}
