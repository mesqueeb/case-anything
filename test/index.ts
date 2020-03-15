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
  'ponytaVaporeonPOLIWRATH_ButterfreeA',
  'PonytaVaporeonPOLIWRATH_ButterfreeA',
  'ponyta-vaporeon-POLIWRATH-ButterfreeA',
  'Ponyta~vaporeon~POLIWRATH/ButterfreeA',
  'ponyta_vaporeon_POLIWRATH_ButterfreeA',
  'ponyta_Vaporeon_POLIWRATH_ButterfreeA',
  'ponyta.Vaporeon.POLIWRATH.ButterfreeA',
]

// 1
test('camelCase', t => {
  tests.forEach(w => { t.is(camelCase(w), 'ponytaVaporeonPoliwrathButterfreeA') }) // prettier-ignore
})
test('pascalCase', t => {
  tests.forEach(w => { t.is(pascalCase(w), 'PonytaVaporeonPoliwrathButterfreeA') }) // prettier-ignore
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
test('lowerCase', t => {
  tests.forEach(w => { t.is(lowerCase(w), 'ponyta vaporeon poliwrath butterfree a') }) // prettier-ignore
})
test('upperCase', t => {
  tests.forEach(w => { t.is(upperCase(w), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') }) // prettier-ignore
})
test('capitalCase', t => {
  tests.forEach(w => { t.is(capitalCase(w), 'Ponyta Vaporeon Poliwrath Butterfree A') }) // prettier-ignore
})
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

// 2
const QTableA = 'QTableA'

test('camelCase - QTableA', t => { t.is(camelCase(QTableA), 'qTableA') }) // prettier-ignore
test('pascalCase - QTableA', t => { t.is(pascalCase(QTableA), 'QTableA') }) // prettier-ignore
test('kebabCase - QTableA', t => { t.is(kebabCase(QTableA), 'q-table-a') }) // prettier-ignore
test('snakeCase - QTableA', t => { t.is(snakeCase(QTableA), 'q_table_a') }) // prettier-ignore
test('constantCase - QTableA', t => { t.is(constantCase(QTableA), 'Q_TABLE_A') }) // prettier-ignore
test('spaceCase - QTableA', t => { t.is(spaceCase(QTableA), 'Q Table A') }) // prettier-ignore
test('pathCase - QTableA', t => { t.is(pathCase(QTableA), 'Q/Table/A') }) // prettier-ignore
test('lowerCase - QTableA', t => { t.is(lowerCase(QTableA), 'q table a') }) // prettier-ignore
test('upperCase - QTableA', t => { t.is(upperCase(QTableA), 'Q TABLE A') }) // prettier-ignore
test('capitalCase - QTableA', t => { t.is(capitalCase(QTableA), 'Q Table A') }) // prettier-ignore

// 3
const ImaMIB101OK = "I'm a M.I.B. 101 OK?"

test("camelCase I'm a M.I.B. 101 OK?", t => { t.is(camelCase(ImaMIB101OK),       'imAMib101Ok') }) // prettier-ignore
test("pascalCase I'm a M.I.B. 101 OK?", t => { t.is(pascalCase(ImaMIB101OK),     'ImAMib101Ok') }) // prettier-ignore
test("kebabCase I'm a M.I.B. 101 OK?", t => { t.is(kebabCase(ImaMIB101OK),       'im-a-mib-101-ok') }) // prettier-ignore
test("snakeCase I'm a M.I.B. 101 OK?", t => { t.is(snakeCase(ImaMIB101OK),       'im_a_mib_101_ok') }) // prettier-ignore
test("constantCase I'm a M.I.B. 101 OK?", t => { t.is(constantCase(ImaMIB101OK), 'IM_A_MIB_101_OK') }) // prettier-ignore
test("spaceCase I'm a M.I.B. 101 OK?", t => { t.is(spaceCase(ImaMIB101OK),       "I'm a M.I.B. 101 OK?") }) // prettier-ignore
test("pathCase I'm a M.I.B. 101 OK?", t => { t.is(pathCase(ImaMIB101OK),         "I'm/a/M.I.B./101/OK?") }) // prettier-ignore
test("lowerCase I'm a M.I.B. 101 OK?", t => { t.is(lowerCase(ImaMIB101OK),       "i'm a m.i.b. 101 ok?") }) // prettier-ignore
test("upperCase I'm a M.I.B. 101 OK?", t => { t.is(upperCase(ImaMIB101OK),       "I'M A M.I.B. 101 OK?") }) // prettier-ignore
test("capitalCase I'm a M.I.B. 101 OK?", t => { t.is(capitalCase(ImaMIB101OK),   "I'm A M.i.b. 101 Ok?") }) // prettier-ignore

const listenImOK = "listen I'm O.K.!"

test("camelCase listen I'm O.K.!", t => { t.is(camelCase(listenImOK),       'listenImOk') }) // prettier-ignore
test("pascalCase listen I'm O.K.!", t => { t.is(pascalCase(listenImOK),     'ListenImOk') }) // prettier-ignore
test("kebabCase listen I'm O.K.!", t => { t.is(kebabCase(listenImOK),       'listen-im-ok') }) // prettier-ignore
test("snakeCase listen I'm O.K.!", t => { t.is(snakeCase(listenImOK),       'listen_im_ok') }) // prettier-ignore
test("constantCase listen I'm O.K.!", t => { t.is(constantCase(listenImOK), 'LISTEN_IM_OK') }) // prettier-ignore
test("spaceCase listen I'm O.K.!", t => { t.is(spaceCase(listenImOK),       "listen I'm O.K.!") }) // prettier-ignore
test("pathCase listen I'm O.K.!", t => { t.is(pathCase(listenImOK),         "listen/I'm/O.K.!") }) // prettier-ignore
test("lowerCase listen I'm O.K.!", t => { t.is(lowerCase(listenImOK),       "listen i'm o.k.!") }) // prettier-ignore
test("upperCase listen I'm O.K.!", t => { t.is(upperCase(listenImOK),       "LISTEN I'M O.K.!") }) // prettier-ignore
test("capitalCase listen I'm O.K.!", t => { t.is(capitalCase(listenImOK),   "Listen I'm O.k.!") }) // prettier-ignore
