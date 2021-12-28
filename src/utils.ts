// Latin-1 Supplement
// upper case ranges
// [À-ÖØ-ß]
// lower case ranges
// [à-öø-ÿ]

/**
 * A string.match function that will return an array of "string parts"
 */
export function splitOnSpecialChars(string: string): string[] {
  return string.match(/^[a-zà-öø-ÿ]+|[A-ZÀ-ÖØ-ß][a-zà-öø-ÿ]+|[a-zà-öø-ÿ]+|[0-9]+|[A-ZÀ-ÖØ-ß]+(?![a-zà-öø-ÿ])/g)
}

/**
 * A string.match function that will return an array of "string parts"
 */
export function splitOnSpecialChars2(string: string): {
  parts: string[],
  indexes: number[],
} {
  const matches = string.matchAll(/^[a-zà-öø-ÿ]+|[A-ZÀ-ÖØ-ß][a-zà-öø-ÿ]+|[a-zà-öø-ÿ]+|[0-9]+|[A-ZÀ-ÖØ-ß]+(?![a-zà-öø-ÿ])/g)
  for (const match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}

/**
 * A string.match function that will return an array of "string parts"
 */
export function getParts(string: string, stripSpecialCharacters = false): string[] {
  const target = string.trim().normalize('NFC')
  const parts = target.includes(' ') ? target.split(' ').filter(Boolean) : splitOnSpecialChars(target)
  return stripSpecialCharacters ? parts.map((part) => part.normalize('NFD').replace(/[^a-zA-ZØßø0-9]/g, '')) : parts
}

/**
 * Capitalises a single word
 * @returns the word with the first character in uppercase and the rest in lowercase
 */
export function capitaliseWord(string: string): string {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}
