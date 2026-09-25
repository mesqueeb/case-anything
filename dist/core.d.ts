/**
 * # 🐪 camelCase
 *
 * Converts a string to camelCase
 *
 * - First lowercase then all capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   camelCase('$catDog') === 'catDog'
 *
 * @example
 *   camelCase('$catDog', { keepSpecialCharacters: true }) === '$catDog'
 */
export declare function camelCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🐫 PascalCase
 *
 * Converts a string to PascalCase (also called UpperCamelCase)
 *
 * - All capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   pascalCase('$catDog') === 'CatDog'
 *
 * @example
 *   pascalCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export declare function pascalCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🐫 UpperCamelCase
 *
 * Converts a string to UpperCamelCase (also called PascalCase)
 *
 * - All capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   upperCamelCase('$catDog') === 'CatDog'
 *
 * @example
 *   upperCamelCase('$catDog', { keepSpecialCharacters: true }) === '$CatDog'
 */
export declare const upperCamelCase: typeof pascalCase;
/**
 * # 🥙 kebab-case
 *
 * Converts a string to kebab-case
 *
 * - Hyphenated lowercase
 * - _strips away_ special characters by default
 *
 * @example
 *   kebabCase('$catDog') === 'cat-dog'
 *
 * @example
 *   kebabCase('$catDog', { keepSpecialCharacters: true }) === '$cat-dog'
 */
export declare function kebabCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🐍 snake_case
 *
 * Converts a string to snake_case
 *
 * - Underscored lowercase
 * - _strips away_ special characters by default
 *
 * @example
 *   snakeCase('$catDog') === 'cat_dog'
 *
 * @example
 *   snakeCase('$catDog', { keepSpecialCharacters: true }) === '$cat_dog'
 */
export declare function snakeCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 📣 CONSTANT_CASE
 *
 * Converts a string to CONSTANT_CASE
 *
 * - Underscored uppercase
 * - _strips away_ special characters by default
 *
 * @example
 *   constantCase('$catDog') === 'CAT_DOG'
 *
 * @example
 *   constantCase('$catDog', { keepSpecialCharacters: true }) === '$CAT_DOG'
 */
export declare function constantCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🚂 Train-Case
 *
 * Converts strings to Train-Case
 *
 * - Hyphenated & capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   trainCase('$catDog') === 'Cat-Dog'
 *
 * @example
 *   trainCase('$catDog', { keepSpecialCharacters: true }) === '$Cat-Dog'
 */
export declare function trainCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🕊 Ada_Case
 *
 * Converts a string to Ada_Case
 *
 * - Underscored & capitalised
 * - _strips away_ special characters by default
 *
 * @example
 *   adaCase('$catDog') === 'Cat_Dog'
 *
 * @example
 *   adaCase('$catDog', { keepSpecialCharacters: true }) === '$Cat_Dog'
 */
export declare function adaCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 👔 COBOL-CASE
 *
 * Converts a string to COBOL-CASE
 *
 * - Hyphenated uppercase
 * - _strips away_ special characters by default
 *
 * @example
 *   cobolCase('$catDog') === 'CAT-DOG'
 *
 * @example
 *   cobolCase('$catDog', { keepSpecialCharacters: true }) === '$CAT-DOG'
 */
export declare function cobolCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 📍 Dot.notation
 *
 * Converts a string to dot.notation
 *
 * - Adds dots, does not change casing
 * - _strips away_ special characters by default
 *
 * @example
 *   dotNotation('$catDog') === 'cat.Dog'
 *
 * @example
 *   dotNotation('$catDog', { keepSpecialCharacters: true }) === '$cat.Dog'
 */
export declare function dotNotation(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 📂 Path/case
 *
 * Converts a string to path/case
 *
 * - Adds slashes, does not change casing
 * - _keeps_ special characters by default
 *
 * @example
 *   pathCase('$catDog') === '$cat/Dog'
 *
 * @example
 *   pathCase('$catDog', { keepSpecialCharacters: false }) === 'cat/Dog'
 */
export declare function pathCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🛰 Space case
 *
 * Converts a string to space case
 *
 * - Adds spaces, does not change casing
 * - _keeps_ special characters by default
 *
 * @example
 *   spaceCase('$catDog') === '$cat Dog'
 *
 * @example
 *   spaceCase('$catDog', { keepSpecialCharacters: false }) === 'cat Dog'
 */
export declare function spaceCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🏛 Capital Case
 *
 * Converts a string to Capital Case
 *
 * - Capitalizes words and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   capitalCase('$catDog') === '$Cat Dog'
 *
 * @example
 *   capitalCase('$catDog', { keepSpecialCharacters: false }) === 'Cat Dog'
 *
 *   ⟪ if you do not want to add spaces, use `pascalCase()` ⟫
 */
export declare function capitalCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🔡 lower case
 *
 * Converts a string to lower case
 *
 * - Makes words lowercase and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   lowerCase('$catDog') === '$cat dog'
 *
 * @example
 *   lowerCase('$catDog', { keepSpecialCharacters: false }) === 'cat dog'
 *
 *   ⟪ if you do not want to add spaces, use the native JS `toLowerCase()` ⟫
 */
export declare function lowerCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
/**
 * # 🔠 UPPER CASE
 *
 * Converts a string to UPPER CASE
 *
 * - Makes words upper case and adds spaces
 * - _keeps_ special characters by default
 *
 * @example
 *   upperCase('$catDog') === '$CAT DOG'
 *
 * @example
 *   upperCase('$catDog', { keepSpecialCharacters: false }) === 'CAT DOG'
 *
 *   ⟪ if you do not want to add spaces, use the native JS `toUpperCase()` ⟫
 */
export declare function upperCase(string: string, options?: {
    keepSpecialCharacters?: boolean;
    keep?: string[];
}): string;
