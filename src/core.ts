import { getParts, capitaliseWord } from './utils'

// const stripSpecialCharacters = true

/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @returns {string} in camelCase
 */
export function camelCase(string: string, stripSpecialCharacters = true): string {
  console.log(`getParts(string, stripSpecialCharacters) → `, getParts(string, stripSpecialCharacters))
  return getParts(string, stripSpecialCharacters).reduce((result, match, index) => {
    return index === 0 ? match.toLowerCase() : result + capitaliseWord(match)
  }, '')
}

/**
 * converts strings to PascalCase
 *
 * @export
 * @param {string} string
 * @returns {string} in PascalCase
 */
export function pascalCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).reduce((result, match) => {
    return result + capitaliseWord(match)
  }, '')
}

/**
 * converts strings to kebab-case
 *
 * @export
 * @param {string} string
 * @returns {string} in kebab-case
 */
export function kebabCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('-').toLowerCase()
}

/**
 * converts strings to snake_case
 *
 * @export
 * @param {string} string
 * @returns {string} in snake_case
 */
export function snakeCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('_').toLowerCase()
}

/**
 * converts strings to CONSTANT_CASE
 *
 * @export
 * @param {string} string
 * @returns {string} in CONSTANT_CASE
 */
export function constantCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('_').toUpperCase()
}

/**
 * converts strings to path/case
 *
 * @export
 * @param {string} string
 * @returns {string} in path/case
 */
export function pathCase(string: string): string {
  return getParts(string).join('/')
}

/**
 * converts strings to space case (will add spaces but not change casing)
 *
 * @export
 * @param {string} string
 * @returns {string} in path case
 */
export function spaceCase(string: string): string {
  return getParts(string).join(' ')
}

/**
 * converts strings to Capital Case (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in Capital Case (with spaces)
 */
export function capitalCase(string: string): string {
  return getParts(string)
    .reduce((result, match) => {
      return `${result} ${capitaliseWord(match)}`
    }, '')
    .trim()
}

/**
 * converts strings to lower case (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in lower case (with spaces)
 */
export function lowerCase(string: string): string {
  return getParts(string).join(' ').toLowerCase()
}

/**
 * converts strings to UPPER CASE (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in UPPER CASE (with spaces)
 */
export function upperCase(string: string): string {
  return getParts(string).join(' ').toUpperCase()
}
