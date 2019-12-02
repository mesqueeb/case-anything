
/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
export function getParts (string: string): any[] {
  return string.match(/^[a-z]+|[0-9]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g)
}

/**
 * Capitalises a single word
 *
 * @export
 * @param {string} string the word
 * @returns {string} the word with the first character in uppercase and the rest in lowercase
 */
export function capitaliseWord (string: string): string {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}
