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
test('adaCase      (short)', (t) => t.is(     adaCase('$catDog'), 'Cat_Dog')) // prettier-ignore
test('cobolCase    (short)', (t) => t.is(   cobolCase('$catDog'), 'CAT-DOG')) // prettier-ignore
test('trainCase    (short)', (t) => t.is(   trainCase('$catDog'), 'Cat-Dog')) // prettier-ignore
test('dotNotation  (short)', (t) => t.is( dotNotation('$catDog'), 'cat.Dog')) // prettier-ignore
test('pathCase     (short)', (t) => t.is(    pathCase('$catDog'), '$cat/Dog')) // prettier-ignore
test('spaceCase    (short)', (t) => t.is(   spaceCase('$catDog'), '$cat Dog')) // prettier-ignore
test('capitalCase  (short)', (t) => t.is( capitalCase('$catDog'), '$Cat Dog')) // prettier-ignore
test('upperCase    (short)', (t) => t.is(   upperCase('$catDog'), '$CAT DOG')) // prettier-ignore
test('lowerCase    (short)', (t) => t.is(   lowerCase('$catDog'), '$cat dog')) // prettier-ignore

test('camelCase    (spaces)', (t) => t.is(   camelCase('Cats? & Dogs!'), 'catsDogs')) // prettier-ignore
test('pascalCase   (spaces)', (t) => t.is(  pascalCase('Cats? & Dogs!'), 'CatsDogs')) // prettier-ignore
test('kebabCase    (spaces)', (t) => t.is(   kebabCase('Cats? & Dogs!'), 'cats--dogs')) // prettier-ignore
test('snakeCase    (spaces)', (t) => t.is(   snakeCase('Cats? & Dogs!'), 'cats__dogs')) // prettier-ignore
test('constantCase (spaces)', (t) => t.is(constantCase('Cats? & Dogs!'), 'CATS__DOGS')) // prettier-ignore
test('adaCase      (spaces)', (t) => t.is(     adaCase('Cats? & Dogs!'), 'Cats__Dogs')) // prettier-ignore
test('cobolCase    (spaces)', (t) => t.is(   cobolCase('Cats? & Dogs!'), 'CATS--DOGS')) // prettier-ignore
test('trainCase    (spaces)', (t) => t.is(   trainCase('Cats? & Dogs!'), 'Cats--Dogs')) // prettier-ignore
test('dotNotation  (spaces)', (t) => t.is( dotNotation('Cats? & Dogs!'), 'Cats..Dogs')) // prettier-ignore
test('pathCase     (spaces)', (t) => t.is(    pathCase('Cats? & Dogs!'), 'Cats?/&/Dogs!')) // prettier-ignore
test('spaceCase    (spaces)', (t) => t.is(   spaceCase('Cats? & Dogs!'), 'Cats? & Dogs!')) // prettier-ignore
test('capitalCase  (spaces)', (t) => t.is( capitalCase('Cats? & Dogs!'), 'Cats? & Dogs!')) // prettier-ignore
test('upperCase    (spaces)', (t) => t.is(   upperCase('Cats? & Dogs!'), 'CATS? & DOGS!')) // prettier-ignore
test('lowerCase    (spaces)', (t) => t.is(   lowerCase('Cats? & Dogs!'), 'cats? & dogs!')) // prettier-ignore

test('camelCase    (spaces 2)', (t) => t.is(   camelCase(`I'm O.K.!`), 'imOk')) // prettier-ignore
test('pascalCase   (spaces 2)', (t) => t.is(  pascalCase(`I'm O.K.!`), 'ImOk')) // prettier-ignore
test('kebabCase    (spaces 2)', (t) => t.is(   kebabCase(`I'm O.K.!`), 'im-ok')) // prettier-ignore
test('snakeCase    (spaces 2)', (t) => t.is(   snakeCase(`I'm O.K.!`), 'im_ok')) // prettier-ignore
test('constantCase (spaces 2)', (t) => t.is(constantCase(`I'm O.K.!`), 'IM_OK')) // prettier-ignore
test('adaCase      (spaces 2)', (t) => t.is(     adaCase(`I'm O.K.!`), 'Im_Ok')) // prettier-ignore
test('cobolCase    (spaces 2)', (t) => t.is(   cobolCase(`I'm O.K.!`), 'IM-OK')) // prettier-ignore
test('trainCase    (spaces 2)', (t) => t.is(   trainCase(`I'm O.K.!`), 'Im-Ok')) // prettier-ignore
test('dotNotation  (spaces 2)', (t) => t.is( dotNotation(`I'm O.K.!`), 'Im.OK')) // prettier-ignore
test('pathCase     (spaces 2)', (t) => t.is(    pathCase(`I'm O.K.!`), 'I\'m/O.K.!')) // prettier-ignore
test('spaceCase    (spaces 2)', (t) => t.is(   spaceCase(`I'm O.K.!`), 'I\'m O.K.!')) // prettier-ignore
test('capitalCase  (spaces 2)', (t) => t.is( capitalCase(`I'm O.K.!`), 'I\'m O.k.!')) // prettier-ignore
test('upperCase    (spaces 2)', (t) => t.is(   upperCase(`I'm O.K.!`), 'I\'M O.K.!')) // prettier-ignore
test('lowerCase    (spaces 2)', (t) => t.is(   lowerCase(`I'm O.K.!`), 'i\'m o.k.!')) // prettier-ignore

test('camelCase    (keep)', (t) => t.is(   camelCase('$cat-Dog!', { keep: ['$'] }), '$catDog')) // prettier-ignore
test('pascalCase   (keep)', (t) => t.is(  pascalCase('$cat-Dog!', { keep: ['$'] }), '$CatDog')) // prettier-ignore
test('kebabCase    (keep)', (t) => t.is(   kebabCase('$cat-Dog!', { keep: ['$'] }), '$cat-dog')) // prettier-ignore
test('snakeCase    (keep)', (t) => t.is(   snakeCase('$cat-Dog!', { keep: ['$'] }), '$cat_dog')) // prettier-ignore
test('constantCase (keep)', (t) => t.is(constantCase('$cat-Dog!', { keep: ['$'] }), '$CAT_DOG')) // prettier-ignore
test('pathCase     (keep)', (t) => t.is(    pathCase('$cat-Dog!', { keep: ['$'] }), '$cat/Dog')) // prettier-ignore
test('spaceCase    (keep)', (t) => t.is(   spaceCase('$cat-Dog!', { keep: ['$'] }), '$cat Dog')) // prettier-ignore
test('capitalCase  (keep)', (t) => t.is( capitalCase('$cat-Dog!', { keep: ['$'] }), '$Cat Dog')) // prettier-ignore
test('upperCase    (keep)', (t) => t.is(   upperCase('$cat-Dog!', { keep: ['$'] }), '$CAT DOG')) // prettier-ignore
test('lowerCase    (keep)', (t) => t.is(   lowerCase('$cat-Dog!', { keep: ['$'] }), '$cat dog')) // prettier-ignore
test('adaCase      (keep)', (t) => t.is(     adaCase('$cat-Dog!', { keep: ['$'] }), '$Cat_Dog')) // prettier-ignore
test('cobolCase    (keep)', (t) => t.is(   cobolCase('$cat-Dog!', { keep: ['$'] }), '$CAT-DOG')) // prettier-ignore
test('trainCase    (keep)', (t) => t.is(   trainCase('$cat-Dog!', { keep: ['$'] }), '$Cat-Dog')) // prettier-ignore
test('dotNotation  (keep)', (t) => t.is( dotNotation('$cat-Dog!', { keep: ['$'] }), '$cat.Dog')) // prettier-ignore

test('camelCase    (spaces keep)', (t) => t.is(   camelCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'cats&Dogs!')) // prettier-ignore
test('pascalCase   (spaces keep)', (t) => t.is(  pascalCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats&Dogs!')) // prettier-ignore
test('kebabCase    (spaces keep)', (t) => t.is(   kebabCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'cats-&-dogs!')) // prettier-ignore
test('snakeCase    (spaces keep)', (t) => t.is(   snakeCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'cats_&_dogs!')) // prettier-ignore
test('constantCase (spaces keep)', (t) => t.is(constantCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'CATS_&_DOGS!')) // prettier-ignore
test('pathCase     (spaces keep)', (t) => t.is(    pathCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats/&/Dogs!')) // prettier-ignore
test('spaceCase    (spaces keep)', (t) => t.is(   spaceCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats & Dogs!')) // prettier-ignore
test('capitalCase  (spaces keep)', (t) => t.is( capitalCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats & Dogs!')) // prettier-ignore
test('upperCase    (spaces keep)', (t) => t.is(   upperCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'CATS & DOGS!')) // prettier-ignore
test('lowerCase    (spaces keep)', (t) => t.is(   lowerCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'cats & dogs!')) // prettier-ignore
test('adaCase      (spaces keep)', (t) => t.is(     adaCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats_&_Dogs!')) // prettier-ignore
test('cobolCase    (spaces keep)', (t) => t.is(   cobolCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'CATS-&-DOGS!')) // prettier-ignore
test('trainCase    (spaces keep)', (t) => t.is(   trainCase('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats-&-Dogs!')) // prettier-ignore
test('dotNotation  (spaces keep)', (t) => t.is( dotNotation('Cats? & Dogs!', { keep: ['&', '!'] }), 'Cats.&.Dogs!')) // prettier-ignore

test('camelCase    (spaces keep 2)', (t) => t.is(   camelCase(`I'm O.K.!`, { keep: ['.'] }), 'imO.k.')) // prettier-ignore
test('pascalCase   (spaces keep 2)', (t) => t.is(  pascalCase(`I'm O.K.!`, { keep: ['.'] }), 'ImO.k.')) // prettier-ignore
test('kebabCase    (spaces keep 2)', (t) => t.is(   kebabCase(`I'm O.K.!`, { keep: ['.'] }), 'im-o.k.')) // prettier-ignore
test('snakeCase    (spaces keep 2)', (t) => t.is(   snakeCase(`I'm O.K.!`, { keep: ['.'] }), 'im_o.k.')) // prettier-ignore
test('constantCase (spaces keep 2)', (t) => t.is(constantCase(`I'm O.K.!`, { keep: ['.'] }), 'IM_O.K.')) // prettier-ignore
test('pathCase     (spaces keep 2)', (t) => t.is(    pathCase(`I'm O.K.!`, { keep: ['.'] }), 'Im/O.K.')) // prettier-ignore
test('spaceCase    (spaces keep 2)', (t) => t.is(   spaceCase(`I'm O.K.!`, { keep: ['.'] }), 'Im O.K.')) // prettier-ignore
test('capitalCase  (spaces keep 2)', (t) => t.is( capitalCase(`I'm O.K.!`, { keep: ['.'] }), 'Im O.k.')) // prettier-ignore
test('upperCase    (spaces keep 2)', (t) => t.is(   upperCase(`I'm O.K.!`, { keep: ['.'] }), 'IM O.K.')) // prettier-ignore
test('lowerCase    (spaces keep 2)', (t) => t.is(   lowerCase(`I'm O.K.!`, { keep: ['.'] }), 'im o.k.')) // prettier-ignore
test('adaCase      (spaces keep 2)', (t) => t.is(     adaCase(`I'm O.K.!`, { keep: ['.'] }), 'Im_O.k.')) // prettier-ignore
test('cobolCase    (spaces keep 2)', (t) => t.is(   cobolCase(`I'm O.K.!`, { keep: ['.'] }), 'IM-O.K.')) // prettier-ignore
test('trainCase    (spaces keep 2)', (t) => t.is(   trainCase(`I'm O.K.!`, { keep: ['.'] }), 'Im-O.k.')) // prettier-ignore
test('dotNotation  (spaces keep 2)', (t) => t.is( dotNotation(`I'm O.K.!`, { keep: ['.'] }), 'Im.O.K.')) // prettier-ignore
