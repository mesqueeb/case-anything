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
} from '../src/index'

// a bunch of different combinations
const tests = [
  'ponytaVaporeonPOLIWRATH_ButterfreeA',
  'PonytaVaporeonPOLIWRATH_ButterfreeA',
  'ponyta-vaporeon-POLIWRATH-ButterfreeA',
  'Ponyta~vaporeon~POLIWRATH/ButterfreeA',
  'ponyta_vaporeon_POLIWRATH_ButterfreeA',
  'ponyta_Vaporeon_POLIWRATH_ButterfreeA',
  'ponyta.Vaporeon.POLIWRATH.ButterfreeA',
]

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

// single capital
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

// spaces & non alphabet characters
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

// spaces & non alphabet characters
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

// double spacing
const doubleRainbow = 'Double  Rainbow'

test("camelCase Double  Rainbow", t => { t.is(camelCase(doubleRainbow),       'doubleRainbow') }) // prettier-ignore
test("pascalCase Double  Rainbow", t => { t.is(pascalCase(doubleRainbow),     'DoubleRainbow') }) // prettier-ignore
test("kebabCase Double  Rainbow", t => { t.is(kebabCase(doubleRainbow),       'double-rainbow') }) // prettier-ignore
test("snakeCase Double  Rainbow", t => { t.is(snakeCase(doubleRainbow),       'double_rainbow') }) // prettier-ignore
test("constantCase Double  Rainbow", t => { t.is(constantCase(doubleRainbow), 'DOUBLE_RAINBOW') }) // prettier-ignore
test("spaceCase Double  Rainbow", t => { t.is(spaceCase(doubleRainbow),       "Double Rainbow") }) // prettier-ignore
test("pathCase Double  Rainbow", t => { t.is(pathCase(doubleRainbow),         "Double/Rainbow") }) // prettier-ignore
test("lowerCase Double  Rainbow", t => { t.is(lowerCase(doubleRainbow),       "double rainbow") }) // prettier-ignore
test("upperCase Double  Rainbow", t => { t.is(upperCase(doubleRainbow),       "DOUBLE RAINBOW") }) // prettier-ignore
test("capitalCase Double  Rainbow", t => { t.is(capitalCase(doubleRainbow),   "Double Rainbow") }) // prettier-ignore

const n = (str: string) => str.normalize()

// special characters with Canonical Composition:
const specialCharsNFC = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`

test("camelCase specialChars NFC", t => { t.is(n(camelCase(specialCharsNFC)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFC", t => { t.is(n(pascalCase(specialCharsNFC)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFC", t => { t.is(n(kebabCase(specialCharsNFC)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFC", t => { t.is(n(snakeCase(specialCharsNFC)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFC", t => { t.is(n(constantCase(specialCharsNFC)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFC", t => { t.is(n(spaceCase(specialCharsNFC)),       n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFC", t => { t.is(n(pathCase(specialCharsNFC)),         n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFC", t => { t.is(n(lowerCase(specialCharsNFC)),       n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFC", t => { t.is(n(upperCase(specialCharsNFC)),       n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFC", t => { t.is(n(capitalCase(specialCharsNFC)),   n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition:
const specialCharsNFD = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`

test("camelCase specialChars NFD", t => { t.is(n(camelCase(specialCharsNFD)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFD", t => { t.is(n(pascalCase(specialCharsNFD)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFD", t => { t.is(n(kebabCase(specialCharsNFD)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFD", t => { t.is(n(snakeCase(specialCharsNFD)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFD", t => { t.is(n(constantCase(specialCharsNFD)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFD", t => { t.is(n(spaceCase(specialCharsNFD)),       n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFD", t => { t.is(n(pathCase(specialCharsNFD)),         n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFD", t => { t.is(n(lowerCase(specialCharsNFD)),       n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFD", t => { t.is(n(upperCase(specialCharsNFD)),       n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFD", t => { t.is(n(capitalCase(specialCharsNFD)),   n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore
