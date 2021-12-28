/**
 * A string.match function that will return an array of "string parts"
 */
export declare function splitOnSpecialChars(string: string): string[];
/**
 * A string.matchAll function that will return an array of "string parts" and the indexes at which it split each part
 */
export declare function getPartsAndIndexes(string: string): {
    parts: string[];
    indexes: number[];
};
/**
 * A string.match function that will return an array of "string parts"
 */
export declare function getParts(string: string, stripSpecialCharacters?: boolean): string[];
/**
 * Capitalises a single word
 * @returns the word with the first character in uppercase and the rest in lowercase
 */
export declare function capitaliseWord(string: string): string;
