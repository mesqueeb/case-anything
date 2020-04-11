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

case-anything supports tree-shaking and is side-effect free!

```js
import { camelCase, pascalCase, kebabCase, snakeCase, constantCase } from 'case-anything'

const str = 'PonytaVaporeon_poliwrath-BUTTERFREE'
// or any variant on this

camelCase(str) === 'ponytaVaporeonPoliwrathButterfree'

pascalCase(str) === 'PonytaVaporeonPoliwrathButterfree'

kebabCase(str) === 'ponyta-vaporeon-poliwrath-butterfree'

snakeCase(str) === 'ponyta_vaporeon_poliwrath_butterfree'

constantCase(str) === 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE'
```

There is also `spaceCase` and `pathCase`, which does **not convert the casing**:

```js
import { spaceCase, pathCase } from 'case-anything'

const str = 'PonytaVaporeon_poliwrath-BUTTERFREE'

spaceCase(str) === 'Ponyta Vaporeon poliwrath BUTTERFREE'

pathCase(str) === 'Ponyta/Vaporeon/poliwrath/BUTTERFREE'
```

There is also upper, lower and capital case. These will all convert the casing & also add spaces in between:

```js
import { upperCase, lowerCase, capitalCase } from 'case-anything'

const str = 'PonytaVaporeon_poliwrath-BUTTERFREE'

upperCase(str) === 'PONYTA VAPOREON POLIWRATH BUTTERFREE'
lowerCase(str) === 'ponyta vaporeon poliwrath butterfree'
capitalCase(str) === 'Ponyta Vaporeon Poliwrath Butterfree'
```

### When spaces are involved

As soon as there is a space in the target string, it will regard the input as a "sentence" and only split each part at the spaces.

See this example to understand each case:

<!-- prettier-ignore-start -->
```js
const str = "listen I'm O.K.!"

// splits on spaces & removes special characters
camelCase(str) ===    'listenImOk'
pascalCase(str) ===   'ListenImOk'
kebabCase(str) ===    'listen-im-ok'
snakeCase(str) ===    'listen_im_ok'
constantCase(str) === 'LISTEN_IM_OK'

// splits on spaces & keeps special characters
spaceCase(str) ===    "listen I'm O.K.!"
pathCase(str) ===     "listen/I'm/O.K.!"
lowerCase(str) ===    "listen i'm o.k.!"
upperCase(str) ===    "LISTEN I'M O.K.!"
capitalCase(str) ===  "Listen I'm O.k.!"
```
<!-- prettier-ignore-end -->

Also note, that multiple sequential spaces are treated as one space.

### When special characters are involved

I have extended regular alphabet with the most common "Latin-1 Supplement" special characters.

The coolest thing about this library is that it will **"convert" special characters into regular alphabet** for the cases used as variable names! 😎

<!-- prettier-ignore-start -->
```js
const str = 'Çâfé Ågård'

// CONVERTS special characters:
camelCase(str) ===    'cafeAgard'
pascalCase(str) ===   'CafeAgard'
kebabCase(str) ===    'cafe-agard'
snakeCase(str) ===    'cafe_agard'
constantCase(str) === 'CAFE_AGARD'

// DOES NOT convert special characters:
spaceCase(str) ===    "Çâfé Ågård"
pathCase(str) ===     "Çâfé/Ågård"
lowerCase(str) ===    "çâfé ågård"
upperCase(str) ===    "ÇÂFÉ ÅGÅRD"
capitalCase(str) ===  "Çâfé Ågård"
```
<!-- prettier-ignore-end -->

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

What keeps my package small, is that it's literally just a regex:

```js
export function splitOnSpecialChars (string: string): any[] {
  return string.match(/^[a-z]+|[A-Z][a-z]+|[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g)
}
```
