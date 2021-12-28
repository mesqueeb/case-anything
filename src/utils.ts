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
  indexes: number[]
} {
  const result = { parts: [], indexes: [] }
  const matches = string.matchAll(splitRegex)
  for (const match of matches) {
    result.parts.push(match[0])
    result.indexes.push(match.index)
  }
  return result
}

/**
 * A string.match function that will return an array of "string parts"
 */
export function getParts(string: string, stripSpecialCharacters = false): string[] {
  const normalString = string.trim().normalize('NFC')
  const hasSpaces = normalString.includes(' ')
  const split = hasSpaces ? spaceSplit : magicSplit
  const partsAndIndexes = getPartsAndIndexes(normalString, split)
  return stripSpecialCharacters
    ? partsAndIndexes.parts.map((part) => part.normalize('NFD').replace(/[^a-zA-ZØßø0-9]/g, ''))
    : partsAndIndexes.parts.map((part, i) => {
        const splitIndex = partsAndIndexes.indexes[i]
        const characterBeforeSplit = normalString[splitIndex - 1] || ''
        if (hasSpaces || characterBeforeSplit.match(split)) {
          return part
        }
        return characterBeforeSplit + part
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
