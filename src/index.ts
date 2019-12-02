
/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
export function getParts (string: string): any[] {
  return string.match(/^[a-z]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g)
}

/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @returns {string} in camelCase
 */
export function camelCase (string: string): string {
  return getParts(string)
    .reduce((result, match, index) => {
      return (index === 0)
        ? match.toLowerCase()
        : result + match[0].toUpperCase() + match.slice(1).toLowerCase()
    }, '')
}

/**
 * converts strings to PascalCase
 *
 * @export
 * @param {string} string
 * @returns {string} in PascalCase
 */
export function pascalCase (string: string): string {
  return getParts(string)
    .reduce((result, match) => {
      return result + match[0].toUpperCase() + match.slice(1).toLowerCase()
    }, '')
}

/**
 * converts strings to kebab-case
 *
 * @export
 * @param {string} string
 * @returns {string} in kebab-case
 */
export function kebabCase (string: string): string {
  return getParts(string)
    .join('-').toLowerCase()
}

/**
 * converts strings to snake_case
 *
 * @export
 * @param {string} string
 * @returns {string} in snake_case
 */
export function snakeCase (string: string): string {
  return getParts(string)
    .join('_').toLowerCase()
}

/**
 * converts strings to CONSTANT_CASE
 *
 * @export
 * @param {string} string
 * @returns {string} in CONSTANT_CASE
 */
export function constantCase (string: string): string {
  return getParts(string)
    .join('_').toUpperCase()
}

/**
 * converts strings to path/case
 *
 * @export
 * @param {string} string
 * @returns {string} in path/case
 */
export function pathCase (string: string): string {
  return getParts(string)
    .join('/')
}

/**
 * converts strings to space case (will add spaces but not change casing)
 *
 * @export
 * @param {string} string
 * @returns {string} in path case
 */
export function spaceCase (string: string): string {
  return getParts(string)
    .join(' ')
}

/**
 * converts strings to Capital Case (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in Capital Case (with spaces)
 */
export function capitalCase (string: string): string {
  return spaceCase(pascalCase(string))
}

/**
 * converts strings to lower case (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in lower case (with spaces)
 */
export function lowerCase (string: string): string {
  return getParts(string)
    .join(' ').toLowerCase()
}

/**
 * converts strings to UPPER CASE (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in UPPER CASE (with spaces)
 */
export function upperCase (string: string): string {
  return getParts(string)
    .join(' ').toUpperCase()
}
