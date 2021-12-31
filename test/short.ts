import test from 'ava'
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

test('camelCase    (short)', (t) => t.is(   camelCase('$catDog'), 'catDog')) // prettier-ignore
test('pascalCase   (short)', (t) => t.is(  pascalCase('$catDog'), 'CatDog')) // prettier-ignore
test('kebabCase    (short)', (t) => t.is(   kebabCase('$catDog'), 'cat-dog')) // prettier-ignore
test('snakeCase    (short)', (t) => t.is(   snakeCase('$catDog'), 'cat_dog')) // prettier-ignore
test('constantCase (short)', (t) => t.is(constantCase('$catDog'), 'CAT_DOG')) // prettier-ignore
test('pathCase     (short)', (t) => t.is(    pathCase('$catDog'), '$cat/Dog')) // prettier-ignore
test('spaceCase    (short)', (t) => t.is(   spaceCase('$catDog'), '$cat Dog')) // prettier-ignore
test('capitalCase  (short)', (t) => t.is( capitalCase('$catDog'), '$Cat Dog')) // prettier-ignore
test('upperCase    (short)', (t) => t.is(   upperCase('$catDog'), '$CAT DOG')) // prettier-ignore
test('lowerCase    (short)', (t) => t.is(   lowerCase('$catDog'), '$cat dog')) // prettier-ignore
test('adaCase      (short)', (t) => t.is(     adaCase('$catDog'), 'Cat_Dog')) // prettier-ignore
test('cobolCase    (short)', (t) => t.is(   cobolCase('$catDog'), 'CAT-DOG')) // prettier-ignore
test('trainCase    (short)', (t) => t.is(   trainCase('$catDog'), 'Cat-Dog')) // prettier-ignore
test('dotNotation  (short)', (t) => t.is( dotNotation('$catDog'), 'cat.Dog')) // prettier-ignore

test('camelCase    (spaces short)', (t) => t.is(   camelCase('Cats & Dogs'), 'catsDogs')) // prettier-ignore
test('pascalCase   (spaces short)', (t) => t.is(  pascalCase('Cats & Dogs'), 'CatsDogs')) // prettier-ignore
test('kebabCase    (spaces short)', (t) => t.is(   kebabCase('Cats & Dogs'), 'cats--dogs')) // prettier-ignore
test('snakeCase    (spaces short)', (t) => t.is(   snakeCase('Cats & Dogs'), 'cats__dogs')) // prettier-ignore
test('constantCase (spaces short)', (t) => t.is(constantCase('Cats & Dogs'), 'CATS__DOGS')) // prettier-ignore
test('pathCase     (spaces short)', (t) => t.is(    pathCase('Cats & Dogs'), 'Cats/&/Dogs')) // prettier-ignore
test('spaceCase    (spaces short)', (t) => t.is(   spaceCase('Cats & Dogs'), 'Cats & Dogs')) // prettier-ignore
test('capitalCase  (spaces short)', (t) => t.is( capitalCase('Cats & Dogs'), 'Cats & Dogs')) // prettier-ignore
test('upperCase    (spaces short)', (t) => t.is(   upperCase('Cats & Dogs'), 'CATS & DOGS')) // prettier-ignore
test('lowerCase    (spaces short)', (t) => t.is(   lowerCase('Cats & Dogs'), 'cats & dogs')) // prettier-ignore
test('adaCase      (spaces short)', (t) => t.is(     adaCase('Cats & Dogs'), 'Cats__Dogs')) // prettier-ignore
test('cobolCase    (spaces short)', (t) => t.is(   cobolCase('Cats & Dogs'), 'CATS--DOGS')) // prettier-ignore
test('trainCase    (spaces short)', (t) => t.is(   trainCase('Cats & Dogs'), 'Cats--Dogs')) // prettier-ignore
test('dotNotation  (spaces short)', (t) => t.is( dotNotation('Cats & Dogs'), 'Cats..Dogs')) // prettier-ignore

test('camelCase    (spaces short 2)', (t) => t.is(   camelCase(`I'm O.K.!`), 'imOk')) // prettier-ignore
test('pascalCase   (spaces short 2)', (t) => t.is(  pascalCase(`I'm O.K.!`), 'ImOk')) // prettier-ignore
test('kebabCase    (spaces short 2)', (t) => t.is(   kebabCase(`I'm O.K.!`), 'im-ok')) // prettier-ignore
test('snakeCase    (spaces short 2)', (t) => t.is(   snakeCase(`I'm O.K.!`), 'im_ok')) // prettier-ignore
test('constantCase (spaces short 2)', (t) => t.is(constantCase(`I'm O.K.!`), 'IM_OK')) // prettier-ignore
test('pathCase     (spaces short 2)', (t) => t.is(    pathCase(`I'm O.K.!`), 'I\'m/O.K.!')) // prettier-ignore
test('spaceCase    (spaces short 2)', (t) => t.is(   spaceCase(`I'm O.K.!`), 'I\'m O.K.!')) // prettier-ignore
test('capitalCase  (spaces short 2)', (t) => t.is( capitalCase(`I'm O.K.!`), 'I\'m O.k.!')) // prettier-ignore
test('upperCase    (spaces short 2)', (t) => t.is(   upperCase(`I'm O.K.!`), 'I\'M O.K.!')) // prettier-ignore
test('lowerCase    (spaces short 2)', (t) => t.is(   lowerCase(`I'm O.K.!`), 'i\'m o.k.!')) // prettier-ignore
test('adaCase      (spaces short 2)', (t) => t.is(     adaCase(`I'm O.K.!`), 'Im_Ok')) // prettier-ignore
test('cobolCase    (spaces short 2)', (t) => t.is(   cobolCase(`I'm O.K.!`), 'IM-OK')) // prettier-ignore
test('trainCase    (spaces short 2)', (t) => t.is(   trainCase(`I'm O.K.!`), 'Im-Ok')) // prettier-ignore
test('dotNotation  (spaces short 2)', (t) => t.is( dotNotation(`I'm O.K.!`), 'Im.OK')) // prettier-ignore
