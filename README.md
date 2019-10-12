# Case anything 🐫

```
npm i case-anything
```

camelCase, kebab-case, PascalCase... a simple integration with nano package size. (SMALL footprint!)

## Motivation

I created this package because most other packages that do simple case changing are so big...

I wanted to try my hand at the smallest iteration possible.

## Meet the family

- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)

## Usage

case-anything supports tree-shaking.

```js
import { camelCase, pascalCase, kebabCase, snakeCase, constantCase, pathCase } from 'case-anything'

const testString = 'PonytaVaporeon_Poliwrath-BUTTERFREE'
// or any variant on this

camelCase(testString)
  === 'ponytaVaporeonPoliwrathButterfree'

pascalCase(testString)
  === 'PonytaVaporeonPoliwrathButterfree'

kebabCase(testString)
  === 'ponyta-vaporeon-poliwrath-butterfree'

snakeCase(testString)
  === 'ponyta_vaporeon_poliwrath_butterfree'

constantCase(testString)
  === 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE'

pathCase(testString)
  === 'Ponyta/Vaporeon/Poliwrath/BUTTERFREE'
```

## Package size

We'll compare this package with [blakeembrey/change-case](https://github.com/blakeembrey/change-case), a very famous package on npm.

|  | case-anything  | change-case |
| ---  | --- | --- |
| camelCase | 1.1K (572) | 27.2K (6K) |
| pascalCase | 1.1K (561) | 27.4K (6.1K) |
| kebabCase | 1.1K (541) | 26.8K (5.9K) |
| snakeCase | 1.1K (540) | 26.8K (5.9K) |
| constantCase | 1.1K (540) | 27.2K (6K) |
| pathCase | 1K (530) | 26.8K (5.9K) |

## Source code

It is literally just this code:

```js
function getParts (string) {
  return string.match(/^[a-z]+|[A-Z][a-z]+|[A-Z]+|[a-z]+/g)
}

export function camelCase (string) {
  return getParts(string)
    .reduce((result, match, index) => {
      return (index === 0)
        ? match.toLowerCase()
        : result + match[0].toUpperCase() + match.slice(1).toLowerCase()
    }, '')
}

export function kebabCase (string) {
  return getParts(string)
    .join('-').toLowerCase()
}

// etc...
```
