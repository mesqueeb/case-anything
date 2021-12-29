// Latin-1 Supplement
// upper case ranges
// [À-ÖØ-ß]
// lower case ranges
// [à-öø-ÿ]

export const magicSplit = /^[a-zà-öø-ÿ]+|[A-ZÀ-ÖØ-ß][a-zà-öø-ÿ]+|[a-zà-öø-ÿ]+|[0-9]+|[A-ZÀ-ÖØ-ß]+(?![a-zà-öø-ÿ])/g
export const spaceSplit = /\S+/g

/**
 * A string.matchAll function that will return an array of "string parts" and the indexes at which it split each part
 */
export function getPartsAndIndexes(
  string: string,
  splitRegex: RegExp
): {
  parts: string[]
  prefixes: string[]
} {
  const result = { parts: [], prefixes: [] }
  const matches = string.matchAll(splitRegex)
  let lastWordEndIndex = 0
  for (const match of matches) {
    result.parts.push(match[0])
    const prefix = string.slice(lastWordEndIndex, match.index).trim()
    result.prefixes.push(prefix)
    lastWordEndIndex = match.index + match[0].length
  }
  return result
}

/**
 * A function that splits a string on words and returns an array of words.
 * - It can prefix each word with a given character
 * - It can strip or keep special characters, this affects the logic for adding a prefix as well
 */
export function splitAndPrefix(
  string: string,
  options?: { keepSpecialCharacters?: boolean; prefix?: string }
): string[] {
  const { keepSpecialCharacters = true, prefix = '' } = options
  const normalString = string.trim().normalize('NFC')
  const hasSpaces = normalString.includes(' ')
  const split = hasSpaces ? spaceSplit : magicSplit
  const partsAndIndexes = getPartsAndIndexes(normalString, split)
  return keepSpecialCharacters
    ? partsAndIndexes.parts.map((part, i) => {
        const _prefix = partsAndIndexes.prefixes[i]
        // the first word doesn't need a prefix, so only return the original prefix
        if (i === 0) {
          return _prefix + part
        }
        // space based sentence was split on spaces, so only return original prefixes
        if (hasSpaces) {
          if (!_prefix && prefix.match(/\s/)) {
            // in this case we have no more original _prefix, it was trimmed, but we're looking to add a space
            // so let's return that space
            return prefix + part
          }
          return _prefix + part
        }
        // return the original prefix OR fall back to a given prefix
        return (_prefix || prefix) + part
      })
    : partsAndIndexes.parts.map((part, i) => {
        const _part = part.normalize('NFD').replace(/[^a-zA-ZØßø0-9]/g, '')
        if (i === 0) {
          return _part
        }
        return prefix + _part
      })
}

/**
 * Capitalises a single word
 * @returns the word with the first character in uppercase and the rest in lowercase
 */
export function capitaliseWord(string: string): string {
  const firstLetterIndex = string.matchAll(magicSplit).next().value?.index || 0
  return string.slice(0, firstLetterIndex + 1).toUpperCase() + string.slice(firstLetterIndex + 1).toLowerCase()
}
