# Case anything 🐫

<a href="https://www.npmjs.com/package/case-anything"><img src="https://img.shields.io/npm/v/case-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/case-anything"><img src="https://img.shields.io/npm/dw/case-anything.svg" alt="Latest Stable Version"></a>

```
npm i case-anything
```

10 case changing functions: camelCase, kebab-case, PascalCase **and more**...<br />
A simple integration with nano package size. (SMALL footprint!)

## Motivation

I created this package because most other packages that do simple case changing are so big...

I wanted to try my hand at the smallest iteration possible. (and it's [12+ times smaller](#package-size) than the next popular case changing package!!)

There's also a Better Touch Tool preset with [keyboard shortcuts](#keyboard-shortcuts) to convert selected text system wide!

## Usage

case-anything supports tree-shaking and is side-effect free!

### Strings without spaces

| Name                              | Input example                                 | Output example |
| --------------------------------- | --------------------------------------------- | -------------- |
| 🐪 camelCase                      | `camelCase('$catDog')`                        | `catDog`       |
| 🐫 PascalCase<br />UpperCamelCase | `pascalCase('$catDog')`<br />`upperCamelCase` | `CatDog`       |
| 🥙 kebab-case                     | `kebabCase('$catDog')`                        | `cat-dog`      |
| 🐍 snake_case                     | `snakeCase('$catDog')`                        | `cat_dog`      |
| 📣 CONSTANT_CASE                  | `constantCase('$catDog')`                     | `CAT_DOG`      |
| 🚂 Train-Case                     | `trainCase('$catDog')`                        | `Cat-Dog`      |
| 🕊 Ada_Case                        | `adaCase('$catDog')`                          | `Cat_Dog`      |
| 👔 COBOL-CASE                     | `cobolCase('$catDog')`                        | `CAT-DOG`      |
| 📍 Dot.notation                   | `dotNotation('$catDog')`                      | `cat.Dog`      |
| 📂 Path/case                      | `pathCase('$catDog')`                         | `$cat/Dog`     |
| 🛰 Space case                      | `spaceCase('$catDog')`                        | `$cat Dog`     |
| 🏛 Capital Case                    | `capitalCase('$catDog')`                      | `$Cat Dog`     |
| 🔡 lower case                     | `lowerCase('$catDog')`                        | `$cat dog`     |
| 🔠 UPPER CASE                     | `upperCase('$catDog')`                        | `$CAT DOG`     |

These cases _**strip away special characters**_ by default:

- camelCase
- pascalCase
- kebabCase
- snakeCase
- constantCase
- trainCase
- adaCase
- cobolCase
- dotNotation

These cases _**keep special characters**_ by default:

- pathCase
- spaceCase
- capitalCase
- lowerCase
- upperCase

These cases _**do not change the casing**_ of the words:

- dotNotation
- pathCase
- spaceCase

### Strings with spaces

As soon as there is a space in the target string, it will regard the input as a _sentence_ and only split each part at the spaces.

| Name                              | Input example                                   | Output example |
| --------------------------------- | ----------------------------------------------- | -------------- |
| 🐪 camelCase                      | `camelCase("I'm O.K.!")`                        | `imOk`         |
| 🐫 PascalCase<br />UpperCamelCase | `pascalCase("I'm O.K.!")`<br />`upperCamelCase` | `ImOk`         |
| 🥙 kebab-case                     | `kebabCase("I'm O.K.!")`                        | `im-ok`        |
| 🐍 snake_case                     | `snakeCase("I'm O.K.!")`                        | `im_ok`        |
| 📣 CONSTANT_CASE                  | `constantCase("I'm O.K.!")`                     | `IM_OK`        |
| 🚂 Train-Case                     | `trainCase("I'm O.K.!")`                        | `Im-Ok`        |
| 🕊 Ada_Case                        | `adaCase("I'm O.K.!")`                          | `Im_Ok`        |
| 👔 COBOL-CASE                     | `cobolCase("I'm O.K.!")`                        | `IM-OK`        |
| 📍 Dot.notation                   | `dotNotation("I'm O.K.!")`                      | `Im.OK`        |
| 📂 Path/case                      | `pathCase("I'm O.K.!")`                         | `I\'m/O.K.!`   |
| 🛰 Space case                      | `spaceCase("I'm O.K.!")`                        | `I\'m O.K.!`   |
| 🏛 Capital Case                    | `capitalCase("I'm O.K.!")`                      | `I\'m O.k.!`   |
| 🔡 lower case                     | `lowerCase("I'm O.K.!")`                        | `i\'m o.k.!`   |
| 🔠 UPPER CASE                     | `upperCase("I'm O.K.!")`                        | `I\'M O.K.!`   |

Also note, that multiple sequential spaces are treated as one space.

### When special characters are involved

I have extended regular alphabet with the most common _Latin-1 Supplement_ special characters.

The coolest thing about this library is that it will **"convert" special characters into regular alphabet** for the cases used as variable names! 😎

<!-- prettier-ignore-start -->
```js
// CONVERTS special characters:
camelCase('Çâfé Ågård')    === 'cafeAgard'
pascalCase('Çâfé Ågård')   === 'CafeAgard'
kebabCase('Çâfé Ågård')    === 'cafe-agard'
snakeCase('Çâfé Ågård')    === 'cafe_agard'
constantCase('Çâfé Ågård') === 'CAFE_AGARD'
trainCase('Çâfé Ågård')    === 'Cafe-Agard'
adaCase('Çâfé Ågård')      === 'Cafe_Agard'
cobolCase('Çâfé Ågård')    === 'CAFE-AGARD'
dotNotation('Çâfé Ågård')  === 'Cafe.Agard'

// DOES NOT convert special characters:
spaceCase('Çâfé Ågård')    === 'Çâfé Ågård'
pathCase('Çâfé Ågård')     === 'Çâfé/Ågård'
lowerCase('Çâfé Ågård')    === 'çâfé ågård'
upperCase('Çâfé Ågård')    === 'ÇÂFÉ ÅGÅRD'
capitalCase('Çâfé Ågård')  === 'Çâfé Ågård'
```
<!-- prettier-ignore-end -->

## Keyboard shortcuts

With [Better Touch Tool](https://folivora.ai) you can set up keyboard shortcuts to convert selected text with JavaScript. This repo provides an easy to install preset that has shortcuts for pascal, kebab and camel case! (thanks to [@AndrewKoch](https://github.com/AndrewKoch)) It even supports multi-cursors in VSCode!

Here is an example triggering keyboard shortcuts to convert the selected text to PascalCase; kebab-case; camelCase:

![keyboard shortcuts example](.media/case-anything%20VSCode.gif?raw=true)

You can download the BTT preset from the source code: [case-anything.bttpreset](case-anything.bttpreset).

## Package size

We'll compare this package with [blakeembrey/change-case](https://github.com/blakeembrey/change-case), a very famous package on npm.

|              | case-anything | change-case  |
| ------------ | ------------- | ------------ |
| camelCase    | 1.1K (572)    | 27.2K (6K)   |
| pascalCase   | 1.1K (561)    | 27.4K (6.1K) |
| kebabCase    | 1.1K (541)    | 26.8K (5.9K) |
| snakeCase    | 1.1K (540)    | 26.8K (5.9K) |
| constantCase | 1.1K (540)    | 27.2K (6K)   |
| pathCase     | 1K (530)      | 26.8K (5.9K) |

## Source code

What keeps my package small, is that literally just uses a regex to separate "words".

```js
// the source code is similar to:
export function splitOnSpecialChars(string: string): any[] {
  return string.match(/^[a-z]+|[A-Z][a-z]+|[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g)
}
```

The actual regex used is a little bit more comprehensive and can be found [here](https://github.com/mesqueeb/case-anything/blob/production/src/utils.ts#L7).

## Meet the family (other utils)

- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)
