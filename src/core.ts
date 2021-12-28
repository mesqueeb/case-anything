import { getParts, capitaliseWord, magicSplit } from './utils'

// const stripSpecialCharacters = true

/**
 * converts strings to camelCase
 * @param string
 * @returns in camelCase
 */
export function camelCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).reduce((result, match, index) => {
    return index === 0 || !match[0].match(magicSplit) ? result + match.toLowerCase() : result + capitaliseWord(match)
  }, '')
}

/**
 * converts strings to PascalCase
 * @param string
 * @returns in PascalCase
 */
export function pascalCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).reduce((result, match) => {
    return result + capitaliseWord(match)
  }, '')
}

/**
 * converts strings to kebab-case
 * @param string
 * @returns in kebab-case
 */
export function kebabCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('-').toLowerCase()
}

/**
 * converts strings to snake_case
 * @param string
 * @returns in snake_case
 */
export function snakeCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('_').toLowerCase()
}

/**
 * converts strings to CONSTANT_CASE
 * @param string
 * @returns in CONSTANT_CASE
 */
export function constantCase(string: string, stripSpecialCharacters = true): string {
  return getParts(string, stripSpecialCharacters).join('_').toUpperCase()
}

/**
 * converts strings to path/case
 * @param string
 * @returns in path/case
 */
export function pathCase(string: string, stripSpecialCharacters = false): string {
  return getParts(string, stripSpecialCharacters)
    .map((p) => p.replaceAll('/', ''))
    .join('/')
}

/**
 * converts strings to space case (will add spaces but not change casing)
 * @param string
 * @returns in path case
 */
export function spaceCase(string: string, stripSpecialCharacters = false): string {
  return getParts(string, stripSpecialCharacters).join(' ')
}

/**
 * converts strings to Capital Case (with spaces)
 * @param string
 * @returns in Capital Case (with spaces)
 */
export function capitalCase(string: string, stripSpecialCharacters = false): string {
  return getParts(string, stripSpecialCharacters)
    .reduce((result, match) => {
      return `${result} ${capitaliseWord(match)}`
    }, '')
    .trim()
}

/**
 * converts strings to lower case (with spaces)
 * @param string
 * @returns in lower case (with spaces)
 */
export function lowerCase(string: string, stripSpecialCharacters = false): string {
  const parts = getParts(string, stripSpecialCharacters)
  return parts.join(' ').toLowerCase()
}

/**
 * converts strings to UPPER CASE (with spaces)
 * @param string
 * @returns in UPPER CASE (with spaces)
 */
export function upperCase(string: string, stripSpecialCharacters = false): string {
  return getParts(string, stripSpecialCharacters).join(' ').toUpperCase()
}
