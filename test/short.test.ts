import { test, expect } from 'vitest'
import {
  adaCase,
  camelCase,
  capitalCase,
  cobolCase,
  constantCase,
  dotNotation,
  kebabCase,
  lowerCase,
  pascalCase,
  pathCase,
  snakeCase,
  spaceCase,
  trainCase,
  upperCase,
} from '../src/index'

test('camelCase    (short)', () => expect(   camelCase('$catDog')).toEqual('catDog')) // prettier-ignore
test('pascalCase   (short)', () => expect(  pascalCase('$catDog')).toEqual('CatDog')) // prettier-ignore
test('kebabCase    (short)', () => expect(   kebabCase('$catDog')).toEqual('cat-dog')) // prettier-ignore
test('snakeCase    (short)', () => expect(   snakeCase('$catDog')).toEqual('cat_dog')) // prettier-ignore
test('constantCase (short)', () => expect(constantCase('$catDog')).toEqual('CAT_DOG')) // prettier-ignore
test('adaCase      (short)', () => expect(     adaCase('$catDog')).toEqual('Cat_Dog')) // prettier-ignore
test('cobolCase    (short)', () => expect(   cobolCase('$catDog')).toEqual('CAT-DOG')) // prettier-ignore
test('trainCase    (short)', () => expect(   trainCase('$catDog')).toEqual('Cat-Dog')) // prettier-ignore
test('dotNotation  (short)', () => expect( dotNotation('$catDog')).toEqual('cat.Dog')) // prettier-ignore
test('pathCase     (short)', () => expect(    pathCase('$catDog')).toEqual('$cat/Dog')) // prettier-ignore
test('spaceCase    (short)', () => expect(   spaceCase('$catDog')).toEqual('$cat Dog')) // prettier-ignore
test('capitalCase  (short)', () => expect( capitalCase('$catDog')).toEqual('$Cat Dog')) // prettier-ignore
test('upperCase    (short)', () => expect(   upperCase('$catDog')).toEqual('$CAT DOG')) // prettier-ignore
test('lowerCase    (short)', () => expect(   lowerCase('$catDog')).toEqual('$cat dog')) // prettier-ignore

test('camelCase    (spaces)', () => expect(   camelCase('Cats? & Dogs!')).toEqual('catsDogs')) // prettier-ignore
test('pascalCase   (spaces)', () => expect(  pascalCase('Cats? & Dogs!')).toEqual('CatsDogs')) // prettier-ignore
test('kebabCase    (spaces)', () => expect(   kebabCase('Cats? & Dogs!')).toEqual('cats--dogs')) // prettier-ignore
test('snakeCase    (spaces)', () => expect(   snakeCase('Cats? & Dogs!')).toEqual('cats__dogs')) // prettier-ignore
test('constantCase (spaces)', () => expect(constantCase('Cats? & Dogs!')).toEqual('CATS__DOGS')) // prettier-ignore
test('adaCase      (spaces)', () => expect(     adaCase('Cats? & Dogs!')).toEqual('Cats__Dogs')) // prettier-ignore
test('cobolCase    (spaces)', () => expect(   cobolCase('Cats? & Dogs!')).toEqual('CATS--DOGS')) // prettier-ignore
test('trainCase    (spaces)', () => expect(   trainCase('Cats? & Dogs!')).toEqual('Cats--Dogs')) // prettier-ignore
test('dotNotation  (spaces)', () => expect( dotNotation('Cats? & Dogs!')).toEqual('Cats..Dogs')) // prettier-ignore
test('pathCase     (spaces)', () => expect(    pathCase('Cats? & Dogs!')).toEqual('Cats?/&/Dogs!')) // prettier-ignore
test('spaceCase    (spaces)', () => expect(   spaceCase('Cats? & Dogs!')).toEqual('Cats? & Dogs!')) // prettier-ignore
test('capitalCase  (spaces)', () => expect( capitalCase('Cats? & Dogs!')).toEqual('Cats? & Dogs!')) // prettier-ignore
test('upperCase    (spaces)', () => expect(   upperCase('Cats? & Dogs!')).toEqual('CATS? & DOGS!')) // prettier-ignore
test('lowerCase    (spaces)', () => expect(   lowerCase('Cats? & Dogs!')).toEqual('cats? & dogs!')) // prettier-ignore

test('camelCase    (spaces 2)', () => expect(   camelCase(`I'm O.K.!`)).toEqual('imOk')) // prettier-ignore
test('pascalCase   (spaces 2)', () => expect(  pascalCase(`I'm O.K.!`)).toEqual('ImOk')) // prettier-ignore
test('kebabCase    (spaces 2)', () => expect(   kebabCase(`I'm O.K.!`)).toEqual('im-ok')) // prettier-ignore
test('snakeCase    (spaces 2)', () => expect(   snakeCase(`I'm O.K.!`)).toEqual('im_ok')) // prettier-ignore
test('constantCase (spaces 2)', () => expect(constantCase(`I'm O.K.!`)).toEqual('IM_OK')) // prettier-ignore
test('adaCase      (spaces 2)', () => expect(     adaCase(`I'm O.K.!`)).toEqual('Im_Ok')) // prettier-ignore
test('cobolCase    (spaces 2)', () => expect(   cobolCase(`I'm O.K.!`)).toEqual('IM-OK')) // prettier-ignore
test('trainCase    (spaces 2)', () => expect(   trainCase(`I'm O.K.!`)).toEqual('Im-Ok')) // prettier-ignore
test('dotNotation  (spaces 2)', () => expect( dotNotation(`I'm O.K.!`)).toEqual('Im.OK')) // prettier-ignore
test('pathCase     (spaces 2)', () => expect(    pathCase(`I'm O.K.!`)).toEqual('I\'m/O.K.!')) // prettier-ignore
test('spaceCase    (spaces 2)', () => expect(   spaceCase(`I'm O.K.!`)).toEqual('I\'m O.K.!')) // prettier-ignore
test('capitalCase  (spaces 2)', () => expect( capitalCase(`I'm O.K.!`)).toEqual('I\'m O.k.!')) // prettier-ignore
test('upperCase    (spaces 2)', () => expect(   upperCase(`I'm O.K.!`)).toEqual('I\'M O.K.!')) // prettier-ignore
test('lowerCase    (spaces 2)', () => expect(   lowerCase(`I'm O.K.!`)).toEqual('i\'m o.k.!')) // prettier-ignore

test('camelCase    (keep)', () => expect(   camelCase('$cat-Dog!', { keep: ['$'] })).toEqual('$catDog')) // prettier-ignore
test('pascalCase   (keep)', () => expect(  pascalCase('$cat-Dog!', { keep: ['$'] })).toEqual('$CatDog')) // prettier-ignore
test('kebabCase    (keep)', () => expect(   kebabCase('$cat-Dog!', { keep: ['$'] })).toEqual('$cat-dog')) // prettier-ignore
test('snakeCase    (keep)', () => expect(   snakeCase('$cat-Dog!', { keep: ['$'] })).toEqual('$cat_dog')) // prettier-ignore
test('constantCase (keep)', () => expect(constantCase('$cat-Dog!', { keep: ['$'] })).toEqual('$CAT_DOG')) // prettier-ignore
test('pathCase     (keep)', () => expect(    pathCase('$cat-Dog!', { keep: ['$'] })).toEqual('$cat/Dog')) // prettier-ignore
test('spaceCase    (keep)', () => expect(   spaceCase('$cat-Dog!', { keep: ['$'] })).toEqual('$cat Dog')) // prettier-ignore
test('capitalCase  (keep)', () => expect( capitalCase('$cat-Dog!', { keep: ['$'] })).toEqual('$Cat Dog')) // prettier-ignore
test('upperCase    (keep)', () => expect(   upperCase('$cat-Dog!', { keep: ['$'] })).toEqual('$CAT DOG')) // prettier-ignore
test('lowerCase    (keep)', () => expect(   lowerCase('$cat-Dog!', { keep: ['$'] })).toEqual('$cat dog')) // prettier-ignore
test('adaCase      (keep)', () => expect(     adaCase('$cat-Dog!', { keep: ['$'] })).toEqual('$Cat_Dog')) // prettier-ignore
test('cobolCase    (keep)', () => expect(   cobolCase('$cat-Dog!', { keep: ['$'] })).toEqual('$CAT-DOG')) // prettier-ignore
test('trainCase    (keep)', () => expect(   trainCase('$cat-Dog!', { keep: ['$'] })).toEqual('$Cat-Dog')) // prettier-ignore
test('dotNotation  (keep)', () => expect( dotNotation('$cat-Dog!', { keep: ['$'] })).toEqual('$cat.Dog')) // prettier-ignore

test('camelCase    (spaces keep)', () => expect(   camelCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('cats&Dogs!')) // prettier-ignore
test('pascalCase   (spaces keep)', () => expect(  pascalCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats&Dogs!')) // prettier-ignore
test('kebabCase    (spaces keep)', () => expect(   kebabCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('cats-&-dogs!')) // prettier-ignore
test('snakeCase    (spaces keep)', () => expect(   snakeCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('cats_&_dogs!')) // prettier-ignore
test('constantCase (spaces keep)', () => expect(constantCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('CATS_&_DOGS!')) // prettier-ignore
test('pathCase     (spaces keep)', () => expect(    pathCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats/&/Dogs!')) // prettier-ignore
test('spaceCase    (spaces keep)', () => expect(   spaceCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats & Dogs!')) // prettier-ignore
test('capitalCase  (spaces keep)', () => expect( capitalCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats & Dogs!')) // prettier-ignore
test('upperCase    (spaces keep)', () => expect(   upperCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('CATS & DOGS!')) // prettier-ignore
test('lowerCase    (spaces keep)', () => expect(   lowerCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('cats & dogs!')) // prettier-ignore
test('adaCase      (spaces keep)', () => expect(     adaCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats_&_Dogs!')) // prettier-ignore
test('cobolCase    (spaces keep)', () => expect(   cobolCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('CATS-&-DOGS!')) // prettier-ignore
test('trainCase    (spaces keep)', () => expect(   trainCase('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats-&-Dogs!')) // prettier-ignore
test('dotNotation  (spaces keep)', () => expect( dotNotation('Cats? & Dogs!', { keep: ['&', '!'] })).toEqual('Cats.&.Dogs!')) // prettier-ignore

test('camelCase    (spaces keep 2)', () => expect(   camelCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('imO.k.')) // prettier-ignore
test('pascalCase   (spaces keep 2)', () => expect(  pascalCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('ImO.k.')) // prettier-ignore
test('kebabCase    (spaces keep 2)', () => expect(   kebabCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('im-o.k.')) // prettier-ignore
test('snakeCase    (spaces keep 2)', () => expect(   snakeCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('im_o.k.')) // prettier-ignore
test('constantCase (spaces keep 2)', () => expect(constantCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('IM_O.K.')) // prettier-ignore
test('pathCase     (spaces keep 2)', () => expect(    pathCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im/O.K.')) // prettier-ignore
test('spaceCase    (spaces keep 2)', () => expect(   spaceCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im O.K.')) // prettier-ignore
test('capitalCase  (spaces keep 2)', () => expect( capitalCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im O.k.')) // prettier-ignore
test('upperCase    (spaces keep 2)', () => expect(   upperCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('IM O.K.')) // prettier-ignore
test('lowerCase    (spaces keep 2)', () => expect(   lowerCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('im o.k.')) // prettier-ignore
test('adaCase      (spaces keep 2)', () => expect(     adaCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im_O.k.')) // prettier-ignore
test('cobolCase    (spaces keep 2)', () => expect(   cobolCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('IM-O.K.')) // prettier-ignore
test('trainCase    (spaces keep 2)', () => expect(   trainCase(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im-O.k.')) // prettier-ignore
test('dotNotation  (spaces keep 2)', () => expect( dotNotation(`I'm O.K.!`, { keep: ['.'] })).toEqual('Im.O.K.')) // prettier-ignore
