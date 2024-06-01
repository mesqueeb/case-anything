export declare const magicSplit: RegExp;
export declare const spaceSplit: RegExp;
/**
 * A string.matchAll function that will return an array of "string parts" and the indexes at which it split each part
 */
export declare function getPartsAndIndexes(string: string, splitRegex: RegExp): {
    parts: string[];
    prefixes: string[];
};
/**
 * A function that splits a string on words and returns an array of words.
 * - It can prefix each word with a given character
 * - It can strip or keep special characters, this affects the logic for adding a prefix as well
 */
export declare function splitAndPrefix(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
    prefix?: string;
}): string[];
/**
 * Capitalises a single word
 * @returns the word with the first character in uppercase and the rest in lowercase
 */
export declare function capitaliseWord(string: string): string;
