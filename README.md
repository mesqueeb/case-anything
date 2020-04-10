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

const testString = 'PonytaVaporeon_poliwrath-BUTTERFREE'
// or any variant on this

camelCase(testString) === 'ponytaVaporeonPoliwrathButterfree'

pascalCase(testString) === 'PonytaVaporeonPoliwrathButterfree'

kebabCase(testString) === 'ponyta-vaporeon-poliwrath-butterfree'

snakeCase(testString) === 'ponyta_vaporeon_poliwrath_butterfree'

constantCase(testString) === 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE'
```

There is also `spaceCase` and `pathCase`, which does **not convert the casing**:

```js
import { spaceCase, pathCase } from 'case-anything'

const testString = 'PonytaVaporeon_poliwrath-BUTTERFREE'

spaceCase(testString) === 'Ponyta Vaporeon poliwrath BUTTERFREE'

pathCase(testString) === 'Ponyta/Vaporeon/poliwrath/BUTTERFREE'
```

There is also upper, lower and capital case. These will all convert the casing & also add spaces in between:

```js
import { upperCase, lowerCase, capitalCase } from 'case-anything'

const testString = 'PonytaVaporeon_poliwrath-BUTTERFREE'

upperCase(testString) === 'PONYTA VAPOREON POLIWRATH BUTTERFREE'
lowerCase(testString) === 'ponyta vaporeon poliwrath butterfree'
capitalCase(testString) === 'Ponyta Vaporeon Poliwrath Butterfree'
```

### When spaces are involved

As soon as there is a space in the target string, it will regard the input as a "sentence" and only split each part at the spaces.

See this example to understand each case:

<!-- prettier-ignore-start -->
```js
const testString = "listen I'm O.K.!"

// splits on spaces & removes special characters
camelCase(listenImOK) ===    'listenImOk'
pascalCase(listenImOK) ===   'ListenImOk'
kebabCase(listenImOK) ===    'listen-im-ok'
snakeCase(listenImOK) ===    'listen_im_ok'
constantCase(listenImOK) === 'LISTEN_IM_OK'

// splits on spaces & keeps special characters
spaceCase(listenImOK) ===    "listen I'm O.K.!"
pathCase(listenImOK) ===     "listen/I'm/O.K.!"
lowerCase(listenImOK) ===    "listen i'm o.k.!"
upperCase(listenImOK) ===    "LISTEN I'M O.K.!"
capitalCase(listenImOK) ===  "Listen I'm O.k.!"
```
<!-- prettier-ignore-end -->

Also note, that multiple sequential spaces are treated as one space.

### When special alphabet is involved

Currently what keeps the package small is the fact that I use a simple regex to find all the parts in a string:

- `/^[a-z]+|[A-Z][a-z]+|[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g`

That means that alphabet letters like é, ç, ü, ī and many others aren't compatible.

If there is a simple way to include these via unicode ranges in the regex, please feel free to open a PR or issue!

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
