/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
function getParts(string) {
    return string.match(/^[a-z]+|[0-9]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g);
}
/**
 * Capitalises a single word
 *
 * @export
 * @param {string} string the word
 * @returns {string} the word with the first character in uppercase and the rest in lowercase
 */
function capitaliseWord(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @param {function} [splitFn=getParts] the function to split the string. Defaults to `getParts`
 * @returns {string} in camelCase
 */
function camelCase(string, splitFn) {
    if (splitFn === void 0) { splitFn = getParts; }
    return splitFn(string)
        .reduce(function (result, match, index) {
        return (index === 0)
            ? match.toLowerCase()
            : result + capitaliseWord(match);
    }, '');
}
/**
 * converts strings to PascalCase
 *
 * @export
 * @param {string} string
 * @param {function} [splitFn=getParts] the function to split the string. Defaults to `getParts`
 * @returns {string} in PascalCase
 */
function pascalCase(string, splitFn) {
    if (splitFn === void 0) { splitFn = getParts; }
    return splitFn(string)
        .reduce(function (result, match) {
        return result + capitaliseWord(match);
    }, '');
}
/**
 * converts strings to kebab-case
 *
 * @export
 * @param {string} string
 * @returns {string} in kebab-case
 */
function kebabCase(string) {
    return getParts(string)
        .join('-').toLowerCase();
}
/**
 * converts strings to snake_case
 *
 * @export
 * @param {string} string
 * @returns {string} in snake_case
 */
function snakeCase(string) {
    return getParts(string)
        .join('_').toLowerCase();
}
/**
 * converts strings to CONSTANT_CASE
 *
 * @export
 * @param {string} string
 * @returns {string} in CONSTANT_CASE
 */
function constantCase(string) {
    return getParts(string)
        .join('_').toUpperCase();
}
/**
 * converts strings to path/case
 *
 * @export
 * @param {string} string
 * @returns {string} in path/case
 */
function pathCase(string) {
    return getParts(string)
        .join('/');
}
/**
 * converts strings to space case (will add spaces but not change casing)
 *
 * @export
 * @param {string} string
 * @returns {string} in path case
 */
function spaceCase(string) {
    return getParts(string)
        .join(' ');
}
/**
 * converts strings to Capital Case (with spaces)
 *
 * @export
 * @param {string} string
 * @param {function} [splitFn=getParts] the function to split the string. Defaults to `getParts`
 * @returns {string} in Capital Case (with spaces)
 */
function capitalCase(string, splitFn) {
    if (splitFn === void 0) { splitFn = getParts; }
    return splitFn(string)
        .reduce(function (result, match) {
        return result + " " + capitaliseWord(match);
    }, '')
        .trim();
}
/**
 * converts strings to lower case (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in lower case (with spaces)
 */
function lowerCase(string) {
    return getParts(string)
        .join(' ').toLowerCase();
}
/**
 * converts strings to UPPER CASE (with spaces)
 *
 * @export
 * @param {string} string
 * @returns {string} in UPPER CASE (with spaces)
 */
function upperCase(string) {
    return getParts(string)
        .join(' ').toUpperCase();
}

export { camelCase, capitalCase, constantCase, kebabCase, lowerCase, pascalCase, pathCase, snakeCase, spaceCase, upperCase };
