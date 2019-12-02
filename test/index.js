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
const testSentence = "I'm a M.O.F.O 101 OK?"

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
  t.is(spaceCase(testSentence), 'I m a M O F O 101 OK')
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
  t.is(pathCase(testSentence), 'I/m/a/M/O/F/O/101/OK')
})

test('capitalCase', t => {
  tests.forEach(w => {
    t.is(capitalCase(w), 'Ponyta Vaporeon Poliwrath Butterfree A')
  })
  t.is(capitalCase(testSentence), 'I M A M O F O 101 Ok')
  t.is(capitalCase(testSentence, s => s.split(' ')), 'I\'m A M.o.f.o 101 Ok?')
})

test('upperCase', t => {
  tests.forEach(w => {
    t.is(upperCase(w), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A')
  })
  t.is(upperCase(testSentence), 'I M A M O F O 101 OK')
})

test('lowerCase', t => {
  tests.forEach(w => {
    t.is(lowerCase(w), 'ponyta vaporeon poliwrath butterfree a')
  })
  t.is(lowerCase(testSentence), 'i m a m o f o 101 ok')
})

test('pascalCase', t => {
  tests.forEach(w => {
    t.is(pascalCase(w), 'PonytaVaporeonPoliwrathButterfreeA')
  })
  t.is(pascalCase(testSentence), 'IMAMOFO101Ok')
  t.is(pascalCase(testSentence, s => s.split(' ')), 'I\'mAM.o.f.o101Ok?')
})

test('camelCase', t => {
  tests.forEach(w => {
    t.is(camelCase(w), 'ponytaVaporeonPoliwrathButterfreeA')
  })
  t.is(camelCase(testSentence), 'iMAMOFO101Ok')
  t.is(camelCase(testSentence, s => s.split(' ')), 'i\'mAM.o.f.o101Ok?')
})

test('kebabCase', t => {
  tests.forEach(w => {
    t.is(kebabCase(w), 'ponyta-vaporeon-poliwrath-butterfree-a')
  })
  t.is(kebabCase(testSentence), 'i-m-a-m-o-f-o-101-ok')
})

test('snakeCase', t => {
  tests.forEach(w => {
    t.is(snakeCase(w), 'ponyta_vaporeon_poliwrath_butterfree_a')
  })
  t.is(snakeCase(testSentence), 'i_m_a_m_o_f_o_101_ok')
})

test('constantCase', t => {
  tests.forEach(w => {
    t.is(constantCase(w), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  })
  t.is(constantCase(testSentence), 'I_M_A_M_O_F_O_101_OK')
})
