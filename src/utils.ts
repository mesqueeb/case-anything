// Latin-1 Supplement
// upper case ranges
// [À-ÖØ-ß]
// lower case ranges
// [à-öø-ÿ]

/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
export function splitOnSpecialChars (string: string): any[] {
  return string.match(/^[a-zà-öø-ÿ]+|[A-ZÀ-ÖØ-ß][a-zà-öø-ÿ]+|[a-zà-öø-ÿ]+|[0-9]+|[A-ZÀ-ÖØ-ß]+(?![a-zà-öø-ÿ])/g)
}

/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
export function getParts (string: string, noSpecialChars = false): any[] {
  const target = string.trim()
  const parts = target.includes(' ') ? target.split(' ').filter(Boolean) : splitOnSpecialChars(target)
  return noSpecialChars ? parts.map(part => part.replace(/[^a-zA-ZØßø0-9]/g, '')) : parts
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
