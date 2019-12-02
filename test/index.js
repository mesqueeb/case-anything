import test from 'ava'
import {
  spaceCase,
  camelCase,
  pascalCase,
  kebabCase,
  snakeCase,
  constantCase,
  pathCase,
  capitalCase,
  upperCase,
  lowerCase,
} from '../dist/index.cjs'

const tests = [
  'ponytaVaporeonPOLIWRATH ButterfreeA',
  'PonytaVaporeonPOLIWRATH ButterfreeA',
  'ponyta-vaporeon-POLIWRATH-ButterfreeA',
  'Ponyta vaporeon POLIWRATH ButterfreeA',
  'ponyta_vaporeon_POLIWRATH_ButterfreeA',
  'ponyta_Vaporeon_POLIWRATH_ButterfreeA',
  'ponyta.Vaporeon.POLIWRATH.ButterfreeA',
]

test('spaceCase', t => {
  t.deepEqual(tests.map(spaceCase), [
    'ponyta Vaporeon POLIWRATH Butterfree A',
    'Ponyta Vaporeon POLIWRATH Butterfree A',
    'ponyta vaporeon POLIWRATH Butterfree A',
    'Ponyta vaporeon POLIWRATH Butterfree A',
    'ponyta vaporeon POLIWRATH Butterfree A',
    'ponyta Vaporeon POLIWRATH Butterfree A',
    'ponyta Vaporeon POLIWRATH Butterfree A',
  ])
})

test('capitalCase', t => {
  t.deepEqual(tests.map(capitalCase), [
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
    'Ponyta Vaporeon Poliwrath Butterfree A',
  ])
})

test('upperCase', t => {
  t.deepEqual(tests.map(upperCase), [
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
    'PONYTA VAPOREON POLIWRATH BUTTERFREE A',
  ])
})

test('lowerCase', t => {
  t.deepEqual(tests.map(lowerCase), [
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
    'ponyta vaporeon poliwrath butterfree a',
  ])
})

test('camelCase', t => {
  tests.forEach(w => {
    t.is(camelCase(w), 'ponytaVaporeonPoliwrathButterfreeA')
  })
})

test('kebabCase', t => {
  tests.forEach(w => {
    t.is(kebabCase(w), 'ponyta-vaporeon-poliwrath-butterfree-a')
  })
})

test('pascalCase', t => {
  tests.forEach(w => {
    t.is(pascalCase(w), 'PonytaVaporeonPoliwrathButterfreeA')
  })
})

test('snakeCase', t => {
  tests.forEach(w => {
    t.is(snakeCase(w), 'ponyta_vaporeon_poliwrath_butterfree_a')
  })
})

test('constantCase', t => {
  tests.forEach(w => {
    t.is(constantCase(w), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  })
})

test('pathCase', t => {
  t.deepEqual(tests.map(pathCase), [
    'ponyta/Vaporeon/POLIWRATH/Butterfree/A',
    'Ponyta/Vaporeon/POLIWRATH/Butterfree/A',
    'ponyta/vaporeon/POLIWRATH/Butterfree/A',
    'Ponyta/vaporeon/POLIWRATH/Butterfree/A',
    'ponyta/vaporeon/POLIWRATH/Butterfree/A',
    'ponyta/Vaporeon/POLIWRATH/Butterfree/A',
    'ponyta/Vaporeon/POLIWRATH/Butterfree/A',
  ])
})
