/**
 * A string.match function that will return an array of "string parts"
 *
 * @param {string} string
 * @returns {string[]}
 */
function getParts(string) {
    return string.match(/^[a-z]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g);
}
/**
 * converts strings to camelCase
 *
 * @export
 * @param {string} string
 * @returns {string} in camelCase
 */
function camelCase(string) {
    return getParts(string)
        .reduce(function (result, match, index) {
        return (index === 0)
            ? match.toLowerCase()
            : result + match[0].toUpperCase() + match.slice(1).toLowerCase();
    }, '');
}
/**
 * converts strings to PascalCase
 *
 * @export
 * @param {string} string
 * @returns {string} in PascalCase
 */
function pascalCase(string) {
    return getParts(string)
        .reduce(function (result, match) {
        return result + match[0].toUpperCase() + match.slice(1).toLowerCase();
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
 * @returns {string} in Capital Case (with spaces)
 */
function capitalCase(string) {
    return spaceCase(pascalCase(string));
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

export { camelCase, capitalCase, constantCase, getParts, kebabCase, lowerCase, pascalCase, pathCase, snakeCase, spaceCase, upperCase };
