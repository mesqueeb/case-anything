// Latin-1 Supplement
// upper case ranges
// [À-ÖØ-ß]
// lower case ranges
// [à-öø-ÿ]
export const magicSplit = /^[a-zà-öø-ÿа-я]+|[A-ZÀ-ÖØ-ßА-Я][a-zà-öø-ÿа-я]+|[a-zà-öø-ÿа-я]+|[0-9]+|[A-ZÀ-ÖØ-ßА-Я]+(?![a-zà-öø-ÿа-я])/g;
export const spaceSplit = /\S+/g;
/**
 * A string.matchAll function that will return an array of "string parts" and the indexes at which it split each part
 */
export function getPartsAndIndexes(string, splitRegex) {
    const result = { parts: [], prefixes: [] };
    const matches = string.matchAll(splitRegex);
    let lastWordEndIndex = 0;
    for (const match of matches) {
        if (typeof match.index !== 'number')
            continue;
        const word = match[0];
        result.parts.push(word);
        const prefix = string.slice(lastWordEndIndex, match.index).trim();
        result.prefixes.push(prefix);
        lastWordEndIndex = match.index + word.length;
    }
    const tail = string.slice(lastWordEndIndex).trim();
    if (tail) {
        result.parts.push('');
        result.prefixes.push(tail);
    }
    return result;
}
/**
 * A function that splits a string on words and returns an array of words.
 * - It can prefix each word with a given character
 * - It can strip or keep special characters, this affects the logic for adding a prefix as well
 */
export function splitAndPrefix(string, options) {
    const { keepSpecialCharacters = false, keep, prefix = '' } = options || {};
    const normalString = string.trim().normalize('NFC');
    const hasSpaces = normalString.includes(' ');
    const split = hasSpaces ? spaceSplit : magicSplit;
    const partsAndIndexes = getPartsAndIndexes(normalString, split);
    return partsAndIndexes.parts
        .map((_part, i) => {
        let foundPrefix = partsAndIndexes.prefixes[i] || '';
        let part = _part;
        if (keepSpecialCharacters === false) {
            if (keep) {
                part = part
                    .normalize('NFD')
                    .replace(new RegExp(`[^a-zA-ZØßø0-9${keep.join('')}]`, 'g'), '');
            }
            if (!keep) {
                part = part.normalize('NFD').replace(/[^a-zA-ZØßø0-9]/g, '');
                foundPrefix = '';
            }
        }
        if (keep && foundPrefix) {
            foundPrefix = foundPrefix.replace(new RegExp(`[^${keep.join('')}]`, 'g'), '');
        }
        // the first word doesn't need a prefix, so only return the found prefix
        if (i === 0) {
            // console.log(`foundPrefix → `, foundPrefix)
            return foundPrefix + part;
        }
        if (!foundPrefix && !part)
            return '';
        if (!hasSpaces) {
            // return the found prefix OR fall back to a given prefix
            return (foundPrefix || prefix) + part;
        }
        // space based sentence was split on spaces, so only return found prefixes
        if (!foundPrefix && prefix.match(/\s/)) {
            // in this case we have no more found prefix, it was trimmed, but we're looking to add a space
            // so let's return that space
            return ' ' + part;
        }
        return (foundPrefix || prefix) + part;
    })
        .filter(Boolean);
}
/**
 * Capitalises a single word
 * @returns the word with the first character in uppercase and the rest in lowercase
 */
export function capitaliseWord(string) {
    const match = string.matchAll(magicSplit).next().value;
    const firstLetterIndex = match ? match.index : 0;
    return (string.slice(0, firstLetterIndex + 1).toUpperCase() +
        string.slice(firstLetterIndex + 1).toLowerCase());
}
