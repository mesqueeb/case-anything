import { getParts, capitaliseWord } from './utils'

const noSpecialChars = true

/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @returns {string} in camelCase
 */
export function camelCase(string: string): string {
  return getParts(string, noSpecialChars).reduce((result, match, index) => {
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
export function pascalCase(string: string): string {
  return getParts(string, noSpecialChars).reduce((result, match) => {
    return result + capitaliseWord(match)
  }, '')
}

/**
 * converts strings to dot.notation
 *
 * @export
 * @param {string} string
 * @returns {string} in dot.notation
 */
export function dotCase(string: string): string {
  return getParts(string, noSpecialChars).join('.').toLowerCase()
}

/**
 * converts strings to kebab-case
 *
 * @export
 * @param {string} string
 * @returns {string} in kebab-case
 */
export function kebabCase(string: string): string {
  return getParts(string, noSpecialChars).join('-').toLowerCase()
}

/**
 * converts strings to snake_case
 *
 * @export
 * @param {string} string
 * @returns {string} in snake_case
 */
export function snakeCase(string: string): string {
  return getParts(string, noSpecialChars).join('_').toLowerCase()
}

/**
 * converts strings to Ada-Case
 *
 * @export
 * @param {string} string
 * @returns {string} in Ada-Case
 */
export function adaCase(string) {
  return getParts(string, noSpecialChars)
    .map(part => capitaliseWord(part))
    .join('_')
}

/**
 * converts strings to CONSTANT_CASE
 *
 * @export
 * @param {string} string
 * @returns {string} in CONSTANT_CASE
 */
export function constantCase(string: string): string {
  return getParts(string, noSpecialChars).join('_').toUpperCase()
}

/**
 * converts strings to COBOL-CASE
 *
 * @export
 * @param {string} string
 * @returns {string} in COBOL-CASE
 */
export function cobolCase(string: string): string {
  return getParts(string, noSpecialChars).join('-').toUpperCase()
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

/**
 * converts strings to Train-Case
 *
 * @export
 * @param {string} string
 * @returns {string} in Train-Case
 */
export function trainCase(string) {
  return getParts(string, noSpecialChars)
    .map(part => capitaliseWord(part))
    .join('-')
}
