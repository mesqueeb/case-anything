
/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
function getParts (string) {
  return string.match(/^[a-z]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g)
}

/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @returns {string} in camelCase
 */
export function camelCase (string) {
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
export function pascalCase (string) {
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
export function kebabCase (string) {
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
export function snakeCase (string) {
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
export function constantCase (string) {
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
export function pathCase (string) {
  return getParts(string)
    .join('/')
}
