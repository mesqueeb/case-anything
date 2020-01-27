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

// 1
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

test('capitalCase', t => {
  tests.forEach(w => { t.is(capitalCase(w), 'Ponyta Vaporeon Poliwrath Butterfree A') }) // prettier-ignore
})
test('upperCase', t => {
  tests.forEach(w => { t.is(upperCase(w), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') }) // prettier-ignore
})
test('lowerCase', t => {
  tests.forEach(w => { t.is(lowerCase(w), 'ponyta vaporeon poliwrath butterfree a') }) // prettier-ignore
})
test('pascalCase', t => {
  tests.forEach(w => { t.is(pascalCase(w), 'PonytaVaporeonPoliwrathButterfreeA') }) // prettier-ignore
})
test('camelCase', t => {
  tests.forEach(w => { t.is(camelCase(w), 'ponytaVaporeonPoliwrathButterfreeA') }) // prettier-ignore
})
test('kebabCase', t => {
  tests.forEach(w => { t.is(kebabCase(w), 'ponyta-vaporeon-poliwrath-butterfree-a') }) // prettier-ignore
})
test('snakeCase', t => {
  tests.forEach(w => { t.is(snakeCase(w), 'ponyta_vaporeon_poliwrath_butterfree_a') }) // prettier-ignore
})
test('constantCase', t => {
  tests.forEach(w => { t.is(constantCase(w), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') }) // prettier-ignore
})

// 2
const QTableA = 'QTableA'

test('spaceCase - QTableA', t => { t.is(spaceCase(QTableA), 'Q Table A') }) // prettier-ignore
test('pathCase - QTableA', t => { t.is(pathCase(QTableA), 'Q/Table/A') }) // prettier-ignore
test('capitalCase - QTableA', t => { t.is(capitalCase(QTableA), 'Q Table A') }) // prettier-ignore
test('upperCase - QTableA', t => { t.is(upperCase(QTableA), 'Q TABLE A') }) // prettier-ignore
test('lowerCase - QTableA', t => { t.is(lowerCase(QTableA), 'q table a') }) // prettier-ignore
test('pascalCase - QTableA', t => { t.is(pascalCase(QTableA), 'QTableA') }) // prettier-ignore
test('camelCase - QTableA', t => { t.is(camelCase(QTableA), 'qTableA') }) // prettier-ignore
test('kebabCase - QTableA', t => { t.is(kebabCase(QTableA), 'q-table-a') }) // prettier-ignore
test('snakeCase - QTableA', t => { t.is(snakeCase(QTableA), 'q_table_a') }) // prettier-ignore
test('constantCase - QTableA', t => { t.is(constantCase(QTableA), 'Q_TABLE_A') }) // prettier-ignore

// 3
const ImaMIB101OK = "I'm a M.I.B. 101 OK?"

test('spaceCase I\'m a M.I.B. 101 OK?', t => { t.is(spaceCase(ImaMIB101OK), 'I m a M I B 101 OK') }) // prettier-ignore
test('pathCase I\'m a M.I.B. 101 OK?', t => { t.is(pathCase(ImaMIB101OK), 'I/m/a/M/I/B/101/OK') }) // prettier-ignore
test('capitalCase I\'m a M.I.B. 101 OK?', t => { t.is(capitalCase(ImaMIB101OK), 'I M A M I B 101 Ok') }) // prettier-ignore
test('upperCase I\'m a M.I.B. 101 OK?', t => { t.is(upperCase(ImaMIB101OK), 'I M A M I B 101 OK') }) // prettier-ignore
test('lowerCase I\'m a M.I.B. 101 OK?', t => { t.is(lowerCase(ImaMIB101OK), 'i m a m i b 101 ok') }) // prettier-ignore
test('pascalCase I\'m a M.I.B. 101 OK?', t => { t.is(pascalCase(ImaMIB101OK), 'IMAMIB101Ok') }) // prettier-ignore
test('camelCase I\'m a M.I.B. 101 OK?', t => { t.is(camelCase(ImaMIB101OK), 'iMAMIB101Ok') }) // prettier-ignore
test('kebabCase I\'m a M.I.B. 101 OK?', t => { t.is(kebabCase(ImaMIB101OK), 'i-m-a-m-i-b-101-ok') }) // prettier-ignore
test('snakeCase I\'m a M.I.B. 101 OK?', t => { t.is(snakeCase(ImaMIB101OK), 'i_m_a_m_i_b_101_ok') }) // prettier-ignore
test('constantCase I\'m a M.I.B. 101 OK?', t => { t.is(constantCase(ImaMIB101OK), 'I_M_A_M_I_B_101_OK') }) // prettier-ignore

test('capitalCase -_-', t => {
  t.is(capitalCase(ImaMIB101OK, s => s.split(' ')), "I'm A M.i.b. 101 Ok?") // prettier-ignore
})
test('pascalCase -_-', t => {
  t.is(pascalCase(ImaMIB101OK, s => s.split(' ')), "I'mAM.i.b.101Ok?") // prettier-ignore
})
test('camelCase -_-', t => {
  t.is(camelCase(ImaMIB101OK, s => s.split(' ')), "i'mAM.i.b.101Ok?") // prettier-ignore
})
