import { capitaliseWord, magicSplit, splitAndPrefix } from './utils.js'

/**
 * # 🐪 camelCase
 *
 * Converts a string to camelCase
 *
 * - First lowercase then all capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   camelCase('$catDog') === 'catDog'
 *
 * @example
 *   camelCase('$catDog', { keepSpecialCharacters: true }) === '$catDog'
 */
export function camelCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, options).reduce((result, word, index) => {
    return index === 0 || !(word[0] || '').match(magicSplit)
      ? result + word.toLowerCase()
      : result + capitaliseWord(word)
  }, '')
}

/**
 * # 🐫 PascalCase
 *
 * Converts a string to PascalCase (also called UpperCamelCase)
 *
 * - All capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   pascalCase('$catDog') === 'CatDog'
 *
 * @example
 *   pascalCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export function pascalCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, options).reduce((result, word) => {
    return result + capitaliseWord(word)
  }, '')
}

/**
 * # 🐫 UpperCamelCase
 *
 * Converts a string to UpperCamelCase (also called PascalCase)
 *
 * - All capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   upperCamelCase('$catDog') === 'CatDog'
 *
 * @example
 *   upperCamelCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export const upperCamelCase = pascalCase

/**
 * # 🥙 kebab-case
 *
 * Converts a string to kebab-case
 *
 * - Hyphenated lowercase
 * - _strips away_ special characters by default
 *
 * @example
 *   kebabCase('$catDog') === 'cat-dog'
 *
 * @example
 *   kebabCase('$catDog', { keepSpecialCharacters: true }) === '$cat-dog'
 */
export function kebabCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '-' })
    .join('')
    .toLowerCase()
}

/**
 * # 🐍 snake_case
 *
 * Converts a string to snake_case
 *
 * - Underscored lowercase
 * - _strips away_ special characters by default
 *
 * @example
 *   snakeCase('$catDog') === 'cat_dog'
 *
 * @example
 *   snakeCase('$catDog', { keepSpecialCharacters: true }) === '$cat_dog'
 */
export function snakeCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '_' })
    .join('')
    .toLowerCase()
}

/**
 * # 📣 CONSTANT_CASE
 *
 * Converts a string to CONSTANT_CASE
 *
 * - Underscored uppercase
 * - _strips away_ special characters by default
 *
 * @example
 *   constantCase('$catDog') === 'CAT_DOG'
 *
 * @example
 *   constantCase('$catDog', { keepSpecialCharacters: true }) === '$CAT_DOG'
 */
export function constantCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '_' })
    .join('')
    .toUpperCase()
}

/**
 * # 🚂 Train-Case
 *
 * Converts strings to Train-Case
 *
 * - Hyphenated & capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   trainCase('$catDog') === 'Cat-Dog'
 *
 * @example
 *   trainCase('$catDog', { keepSpecialCharacters: true }) === '$Cat-Dog'
 */
export function trainCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '-' })
    .map((word) => capitaliseWord(word))
    .join('')
}

/**
 * # 🕊 Ada_Case
 *
 * Converts a string to Ada_Case
 *
 * - Underscored & capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   adaCase('$catDog') === 'Cat_Dog'
 *
 * @example
 *   adaCase('$catDog', { keepSpecialCharacters: true }) === '$Cat_Dog'
 */
export function adaCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '_' })
    .map((part) => capitaliseWord(part))
    .join('')
}

/**
 * # 👔 COBOL-CASE
 *
 * Converts a string to COBOL-CASE
 *
 * - Hyphenated uppercase
 * - _strips away_ special characters by default
 *
 * @example
 *   cobolCase('$catDog') === 'CAT-DOG'
 *
 * @example
 *   cobolCase('$catDog', { keepSpecialCharacters: true }) === '$CAT-DOG'
 */
export function cobolCase(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '-' })
    .join('')
    .toUpperCase()
}

/**
 * # 📍 Dot.notation
 *
 * Converts a string to dot.notation
 *
 * - Adds dots, does not change casing
 * - _strips away_ special characters by default
 *
 * @example
 *   dotNotation('$catDog') === 'cat.Dog'
 *
 * @example
 *   dotNotation('$catDog', { keepSpecialCharacters: true }) === '$cat.Dog'
 */
export function dotNotation(
  string: string,
  options?: { keepSpecialCharacters?: boolean; keep?: string[] },
): string {
  return splitAndPrefix(string, { ...options, prefix: '.' }).join('')
}

/**
 * # 📂 Path/case
 *
 * Converts a string to path/case
 *
 * - Adds slashes, does not change casing
 * - _keeps_ special characters by default
 *
 * @example
 *   pathCase('$catDog') === '$cat/Dog'
 *
 * @example
 *   pathCase('$catDog', { keepSpecialCharacters: false }) === 'cat/Dog'
 */
export function pathCase(
  string: string,
  options: { keepSpecialCharacters?: boolean; keep?: string[] } = { keepSpecialCharacters: true },
): string {
  return splitAndPrefix(string, options).reduce((result, word, i) => {
    const prefix = i === 0 || word[0] === '/' ? '' : '/'
    return result + prefix + word
  }, '')
}

/**
 * # 🛰 Space case
 *
 * Converts a string to space case
 *
 * - Adds spaces, does not change casing
 * - _keeps_ special characters by default
 *
 * @example
 *   spaceCase('$catDog') === '$cat Dog'
 *
 * @example
 *   spaceCase('$catDog', { keepSpecialCharacters: false }) === 'cat Dog'
 */
export function spaceCase(
  string: string,
  options: { keepSpecialCharacters?: boolean; keep?: string[] } = { keepSpecialCharacters: true },
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' }).join('')
}

/**
 * # 🏛 Capital Case
 *
 * Converts a string to Capital Case
 *
 * - Capitalizes words and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   capitalCase('$catDog') === '$Cat Dog'
 *
 * @example
 *   capitalCase('$catDog', { keepSpecialCharacters: false }) === 'Cat Dog'
 *
 *   ⟪ if you do not want to add spaces, use `pascalCase()` ⟫
 */
export function capitalCase(
  string: string,
  options: { keepSpecialCharacters?: boolean; keep?: string[] } = { keepSpecialCharacters: true },
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' }).reduce((result, word) => {
    return result + capitaliseWord(word)
  }, '')
}

/**
 * # 🔡 lower case
 *
 * Converts a string to lower case
 *
 * - Makes words lowercase and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   lowerCase('$catDog') === '$cat dog'
 *
 * @example
 *   lowerCase('$catDog', { keepSpecialCharacters: false }) === 'cat dog'
 *
 *   ⟪ if you do not want to add spaces, use the native JS `toLowerCase()` ⟫
 */
export function lowerCase(
  string: string,
  options: { keepSpecialCharacters?: boolean; keep?: string[] } = { keepSpecialCharacters: true },
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' })
    .join('')
    .toLowerCase()
}

/**
 * # 🔠 UPPER CASE
 *
 * Converts a string to UPPER CASE
 *
 * - Makes words upper case and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   upperCase('$catDog') === '$CAT DOG'
 *
 * @example
 *   upperCase('$catDog', { keepSpecialCharacters: false }) === 'CAT DOG'
 *
 *   ⟪ if you do not want to add spaces, use the native JS `toUpperCase()` ⟫
 */
export function upperCase(
  string: string,
  options: { keepSpecialCharacters?: boolean; keep?: string[] } = { keepSpecialCharacters: true },
): string {
  return splitAndPrefix(string, { ...options, prefix: ' ' })
    .join('')
    .toUpperCase()
}
