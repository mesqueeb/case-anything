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

test('camelCase', (t) => {
  t.is(camelCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(camelCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponytaVaporeonPoliwrathButterfreeA') // prettier-ignore
})
test('pascalCase', (t) => {
  t.is(pascalCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
  t.is(pascalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'PonytaVaporeonPoliwrathButterfreeA') // prettier-ignore
})
test('kebabCase', (t) => {
  t.is(kebabCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
  t.is(kebabCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree-a') // prettier-ignore
})
test('snakeCase', (t) => {
  t.is(snakeCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
  t.is(snakeCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree_a') // prettier-ignore
})
test('constantCase', (t) => {
  t.is(constantCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
  t.is(constantCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A') // prettier-ignore
})
test('lowerCase', (t) => {
  t.is(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta vaporeon poliwrath _butterfree a') // prettier-ignore
  t.is(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta vaporeon poliwrath _butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta -vaporeon -poliwrath -butterfree a') // prettier-ignore
  t.is(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'ponyta ~vaporeon ~poliwrath /butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta _vaporeon _poliwrath _butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta _vaporeon _poliwrath _butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta .vaporeon .poliwrath .butterfree a') // prettier-ignore
})
test('upperCase', (t) => {
  t.is(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA VAPOREON POLIWRATH _BUTTERFREE A') // prettier-ignore
  t.is(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA VAPOREON POLIWRATH _BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'PONYTA -VAPOREON -POLIWRATH -BUTTERFREE A') // prettier-ignore
  t.is(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'PONYTA ~VAPOREON ~POLIWRATH /BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA _VAPOREON _POLIWRATH _BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA _VAPOREON _POLIWRATH _BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'PONYTA .VAPOREON .POLIWRATH .BUTTERFREE A') // prettier-ignore
})
test('capitalCase', (t) => {
  t.is(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon Poliwrath _Butterfree A') // prettier-ignore
  t.is(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon Poliwrath _Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'Ponyta -Vaporeon -Poliwrath -Butterfree A') // prettier-ignore
  t.is(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'Ponyta ~Vaporeon ~Poliwrath /Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'Ponyta _Vaporeon _Poliwrath _Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'Ponyta _Vaporeon _Poliwrath _Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'Ponyta .Vaporeon .Poliwrath .Butterfree A') // prettier-ignore
})
test('spaceCase', (t) => {
  t.is(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta Vaporeon POLIWRATH _Butterfree A') // prettier-ignore
  t.is(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon POLIWRATH _Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta -vaporeon -POLIWRATH -Butterfree A') // prettier-ignore
  t.is(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'Ponyta ~vaporeon ~POLIWRATH /Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta _vaporeon _POLIWRATH _Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta _Vaporeon _POLIWRATH _Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta .Vaporeon .POLIWRATH .Butterfree A') // prettier-ignore
})

test('pathCase', (t) => {
  t.is(pathCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta/Vaporeon/POLIWRATH/_Butterfree/A') // prettier-ignore
  t.is(pathCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta/Vaporeon/POLIWRATH/_Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta/-vaporeon/-POLIWRATH/-Butterfree/A') // prettier-ignore
  t.is(pathCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'Ponyta/~vaporeon/~POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta/_vaporeon/_POLIWRATH/_Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta/_Vaporeon/_POLIWRATH/_Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta/.Vaporeon/.POLIWRATH/.Butterfree/A') // prettier-ignore
})
test('lowerCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `lowerCase`, made `true` it these examples below.
   */
  const strip = true
  t.is(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', strip), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
})
test('upperCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `upperCase`, made `true` it these examples below.
   */
  const strip = true
  t.is(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', strip), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
})
test('capitalCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `capitalCase`, made `true` it these examples below.
   */
  const strip = true
  t.is(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', strip), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
})
test('spaceCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `spaceCase`, made `true` it these examples below.
   */
  const strip = true
  t.is(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA', strip), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA', strip), 'Ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', strip), 'ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', strip), 'Ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', strip), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
})

test('pathCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `pathCase`, made `true` it these examples below.
   */
  const strip = true
  t.is(pathCase('ponytaVaporeonPOLIWRATH_ButterfreeA', strip), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('PonytaVaporeonPOLIWRATH_ButterfreeA', strip), 'Ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', strip), 'ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', strip), 'Ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', strip), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', strip), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
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
const specialCharsNFC = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFC')

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
const specialCharsNFD = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFD')

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

// special characters with Canonical Composition without spaces:
const specialCharsNFCnoSpace = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFC')

test("camelCase specialChars NFC - no spaces", t => { t.is(n(camelCase(specialCharsNFCnoSpace)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFC - no spaces", t => { t.is(n(pascalCase(specialCharsNFCnoSpace)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFC - no spaces", t => { t.is(n(kebabCase(specialCharsNFCnoSpace)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFC - no spaces", t => { t.is(n(snakeCase(specialCharsNFCnoSpace)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFC - no spaces", t => { t.is(n(constantCase(specialCharsNFCnoSpace)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFC - no spaces", t => { t.is(n(spaceCase(specialCharsNFCnoSpace)),       n(`Ågård _î _garçons _Çafé _château _voilà _ñoël _été _laïeul _Ågård _ÀÖØß _àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFC - no spaces", t => { t.is(n(pathCase(specialCharsNFCnoSpace)),         n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFC - no spaces", t => { t.is(n(lowerCase(specialCharsNFCnoSpace)),       n(`ågård _î _garçons _çafé _château _voilà _ñoël _été _laïeul _ågård _àöøß _àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFC - no spaces", t => { t.is(n(upperCase(specialCharsNFCnoSpace)),       n(`ÅGÅRD _Î _GARÇONS _ÇAFÉ _CHÂTEAU _VOILÀ _ÑOËL _ÉTÉ _LAÏEUL _ÅGÅRD _ÀÖØSS _ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFC - no spaces", t => { t.is(n(capitalCase(specialCharsNFCnoSpace)),   n(`Ågård _Î _Garçons _Çafé _Château _Voilà _Ñoël _Été _Laïeul _Ågård _Àöøß _Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces:
const specialCharsNFDnoSpace = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFD')

test("camelCase specialChars NFD - no spaces", t => { t.is(n(camelCase(specialCharsNFDnoSpace)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFD - no spaces", t => { t.is(n(pascalCase(specialCharsNFDnoSpace)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFD - no spaces", t => { t.is(n(kebabCase(specialCharsNFDnoSpace)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFD - no spaces", t => { t.is(n(snakeCase(specialCharsNFDnoSpace)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFD - no spaces", t => { t.is(n(constantCase(specialCharsNFDnoSpace)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFD - no spaces", t => { t.is(n(spaceCase(specialCharsNFDnoSpace)),       n(`Ågård _î _garçons _Çafé _château _voilà _ñoël _été _laïeul _Ågård _ÀÖØß _àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFD - no spaces", t => { t.is(n(pathCase(specialCharsNFDnoSpace)),         n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFD - no spaces", t => { t.is(n(lowerCase(specialCharsNFDnoSpace)),       n(`ågård _î _garçons _çafé _château _voilà _ñoël _été _laïeul _ågård _àöøß _àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFD - no spaces", t => { t.is(n(upperCase(specialCharsNFDnoSpace)),       n(`ÅGÅRD _Î _GARÇONS _ÇAFÉ _CHÂTEAU _VOILÀ _ÑOËL _ÉTÉ _LAÏEUL _ÅGÅRD _ÀÖØSS _ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFD - no spaces", t => { t.is(n(capitalCase(specialCharsNFDnoSpace)),   n(`Ågård _Î _Garçons _Çafé _Château _Voilà _Ñoël _Été _Laïeul _Ågård _Àöøß _Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Composition without spaces - short example:
const specialCharsNFCnoSpaceS = `ÇaféÅgård`.normalize('NFC')

test("camelCase specialChars NFC - no spaces s", t => { t.is(n(camelCase(specialCharsNFCnoSpaceS)),       n(`cafeAgard`)) }) // prettier-ignore
test("pascalCase specialChars NFC - no spaces s", t => { t.is(n(pascalCase(specialCharsNFCnoSpaceS)),     n(`CafeAgard`)) }) // prettier-ignore
test("kebabCase specialChars NFC - no spaces s", t => { t.is(n(kebabCase(specialCharsNFCnoSpaceS)),       n(`cafe-agard`)) }) // prettier-ignore
test("snakeCase specialChars NFC - no spaces s", t => { t.is(n(snakeCase(specialCharsNFCnoSpaceS)),       n(`cafe_agard`)) }) // prettier-ignore
test("constantCase specialChars NFC - no spaces s", t => { t.is(n(constantCase(specialCharsNFCnoSpaceS)), n(`CAFE_AGARD`)) }) // prettier-ignore
test("spaceCase specialChars NFC - no spaces s", t => { t.is(n(spaceCase(specialCharsNFCnoSpaceS)),       n(`Çafé Ågård`)) }) // prettier-ignore
test("pathCase specialChars NFC - no spaces s", t => { t.is(n(pathCase(specialCharsNFCnoSpaceS)),         n(`Çafé/Ågård`)) }) // prettier-ignore
test("lowerCase specialChars NFC - no spaces s", t => { t.is(n(lowerCase(specialCharsNFCnoSpaceS)),       n(`çafé ågård`)) }) // prettier-ignore
test("upperCase specialChars NFC - no spaces s", t => { t.is(n(upperCase(specialCharsNFCnoSpaceS)),       n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test("capitalCase specialChars NFC - no spaces s", t => { t.is(n(capitalCase(specialCharsNFCnoSpaceS)),   n(`Çafé Ågård`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces - short example:
const specialCharsNFDnoSpaceS = `ÇaféÅgård`.normalize('NFD')

test("camelCase specialChars NFD - no spaces s", t => { t.is(n(camelCase(specialCharsNFDnoSpaceS)),       n(`cafeAgard`)) }) // prettier-ignore
test("pascalCase specialChars NFD - no spaces s", t => { t.is(n(pascalCase(specialCharsNFDnoSpaceS)),     n(`CafeAgard`)) }) // prettier-ignore
test("kebabCase specialChars NFD - no spaces s", t => { t.is(n(kebabCase(specialCharsNFDnoSpaceS)),       n(`cafe-agard`)) }) // prettier-ignore
test("snakeCase specialChars NFD - no spaces s", t => { t.is(n(snakeCase(specialCharsNFDnoSpaceS)),       n(`cafe_agard`)) }) // prettier-ignore
test("constantCase specialChars NFD - no spaces s", t => { t.is(n(constantCase(specialCharsNFDnoSpaceS)), n(`CAFE_AGARD`)) }) // prettier-ignore
test("spaceCase specialChars NFD - no spaces s", t => { t.is(n(spaceCase(specialCharsNFDnoSpaceS)),       n(`Çafé Ågård`)) }) // prettier-ignore
test("pathCase specialChars NFD - no spaces s", t => { t.is(n(pathCase(specialCharsNFDnoSpaceS)),         n(`Çafé/Ågård`)) }) // prettier-ignore
test("lowerCase specialChars NFD - no spaces s", t => { t.is(n(lowerCase(specialCharsNFDnoSpaceS)),       n(`çafé ågård`)) }) // prettier-ignore
test("upperCase specialChars NFD - no spaces s", t => { t.is(n(upperCase(specialCharsNFDnoSpaceS)),       n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test("capitalCase specialChars NFD - no spaces s", t => { t.is(n(capitalCase(specialCharsNFDnoSpaceS)),   n(`Çafé Ågård`)) }) // prettier-ignore

// No spaces involved

// 2nd param `stripSpecialCharacters` — `true` by default for...
test("camelCase remove special characters", t => { t.is(n(camelCase(`$mesqueeb.BluesJazz@github.com`)),       n(`mesqueebBluesJazzGithubCom`)) }) // prettier-ignore
test("pascalCase remove special characters", t => { t.is(n(pascalCase(`$mesqueeb.BluesJazz@github.com`)),     n(`MesqueebBluesJazzGithubCom`)) }) // prettier-ignore
test("kebabCase remove special characters", t => { t.is(n(kebabCase(`$mesqueeb.BluesJazz@github.com`)),       n(`mesqueeb-blues-jazz-github-com`)) }) // prettier-ignore
test("snakeCase remove special characters", t => { t.is(n(snakeCase(`$mesqueeb.BluesJazz@github.com`)),       n(`mesqueeb_blues_jazz_github_com`)) }) // prettier-ignore
test("constantCase remove special characters", t => { t.is(n(constantCase(`$mesqueeb.BluesJazz@github.com`)), n(`MESQUEEB_BLUES_JAZZ_GITHUB_COM`)) }) // prettier-ignore
// when `stripSpecialCharacters` is `false`...
test("camelCase keep special characters", t => { t.is(n(camelCase(`$mesqueeb.BluesJazz@github.com`, false)),       n(`$mesqueeb.bluesJazz@github.com`)) }) // prettier-ignore
test("pascalCase keep special characters", t => { t.is(n(pascalCase(`$mesqueeb.BluesJazz@github.com`, false)),     n(`$Mesqueeb.BluesJazz@Github.Com`)) }) // prettier-ignore
test("kebabCase keep special characters", t => { t.is(n(kebabCase(`$mesqueeb.BluesJazz@github.com`, false)),       n(`$mesqueeb-.blues-jazz-@github-.com`)) }) // prettier-ignore
test("snakeCase keep special characters", t => { t.is(n(snakeCase(`$mesqueeb.BluesJazz@github.com`, false)),       n(`$mesqueeb_.blues_jazz_@github_.com`)) }) // prettier-ignore
test("constantCase keep special characters", t => { t.is(n(constantCase(`$mesqueeb.BluesJazz@github.com`, false)), n(`$MESQUEEB_.BLUES_JAZZ_@GITHUB_.COM`)) }) // prettier-ignore
// 2nd param `stripSpecialCharacters` — `false` by default for...
test("spaceCase keep special characters", t => { t.is(n(spaceCase(`$mesqueeb.BluesJazz@github.com`)),       n(`$mesqueeb .Blues Jazz @github .com`)) }) // prettier-ignore
test("pathCase keep special characters", t => { t.is(n(pathCase(`$mesqueeb.BluesJazz@github.com`)),         n(`$mesqueeb/.Blues/Jazz/@github/.com`)) }) // prettier-ignore
test("lowerCase keep special characters", t => { t.is(n(lowerCase(`$mesqueeb.BluesJazz@github.com`)),       n(`$mesqueeb .blues jazz @github .com`)) }) // prettier-ignore
test("upperCase keep special characters", t => { t.is(n(upperCase(`$mesqueeb.BluesJazz@github.com`)),       n(`$MESQUEEB .BLUES JAZZ @GITHUB .COM`)) }) // prettier-ignore
test("capitalCase keep special characters", t => { t.is(n(capitalCase(`$mesqueeb.BluesJazz@github.com`)),   n(`$Mesqueeb .Blues Jazz @Github .Com`)) }) // prettier-ignore
// when `stripSpecialCharacters` is `true`...
test("spaceCase remove special characters", t => { t.is(n(spaceCase(`$mesqueeb.BluesJazz@github.com`, true)),       n(`mesqueeb Blues Jazz github com`)) }) // prettier-ignore
test("pathCase remove special characters", t => { t.is(n(pathCase(`$mesqueeb.BluesJazz@github.com`, true)),         n(`mesqueeb/Blues/Jazz/github/com`)) }) // prettier-ignore
test("lowerCase remove special characters", t => { t.is(n(lowerCase(`$mesqueeb.BluesJazz@github.com`, true)),       n(`mesqueeb blues jazz github com`)) }) // prettier-ignore
test("upperCase remove special characters", t => { t.is(n(upperCase(`$mesqueeb.BluesJazz@github.com`, true)),       n(`MESQUEEB BLUES JAZZ GITHUB COM`)) }) // prettier-ignore
test("capitalCase remove special characters", t => { t.is(n(capitalCase(`$mesqueeb.BluesJazz@github.com`, true)),   n(`Mesqueeb Blues Jazz Github Com`)) }) // prettier-ignore

// Spaces involved

// 2nd param `stripSpecialCharacters` — `true` by default for...
test("spaced — camelCase remove special characters", t => { t.is(n(camelCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`mesqueebBluesjazzGithubPower`)) }) // prettier-ignore
test("spaced — pascalCase remove special characters", t => { t.is(n(pascalCase(`$mesqueeb .BluesJazz @github _POWER`)),     n(`MesqueebBluesjazzGithubPower`)) }) // prettier-ignore
test("spaced — kebabCase remove special characters", t => { t.is(n(kebabCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`mesqueeb-bluesjazz-github-power`)) }) // prettier-ignore
test("spaced — snakeCase remove special characters", t => { t.is(n(snakeCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`mesqueeb_bluesjazz_github_power`)) }) // prettier-ignore
test("spaced — constantCase remove special characters", t => { t.is(n(constantCase(`$mesqueeb .BluesJazz @github _POWER`)), n(`MESQUEEB_BLUESJAZZ_GITHUB_POWER`)) }) // prettier-ignore
// when `stripSpecialCharacters` is `false`...
test("spaced — camelCase keep special characters", t => { t.is(n(camelCase(`$mesqueeb .BluesJazz @github _POWER`, false)),       n(`$mesqueeb.bluesjazz@github_power`)) }) // prettier-ignore
test("spaced — pascalCase keep special characters", t => { t.is(n(pascalCase(`$mesqueeb .BluesJazz @github _POWER`, false)),     n(`$Mesqueeb.Bluesjazz@Github_Power`)) }) // prettier-ignore
test("spaced — kebabCase keep special characters", t => { t.is(n(kebabCase(`$mesqueeb .BluesJazz @github _POWER`, false)),       n(`$mesqueeb-.bluesjazz-@github-_power`)) }) // prettier-ignore
test("spaced — snakeCase keep special characters", t => { t.is(n(snakeCase(`$mesqueeb .BluesJazz @github _POWER`, false)),       n(`$mesqueeb_.bluesjazz_@github__power`)) }) // prettier-ignore
test("spaced — constantCase keep special characters", t => { t.is(n(constantCase(`$mesqueeb .BluesJazz @github _POWER`, false)), n(`$MESQUEEB_.BLUESJAZZ_@GITHUB__POWER`)) }) // prettier-ignore
// 2nd param `stripSpecialCharacters` — `false` by default for...
test("spaced — spaceCase keep special characters", t => { t.is(n(spaceCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`$mesqueeb .BluesJazz @github _POWER`)) }) // prettier-ignore
test("spaced — pathCase keep special characters", t => { t.is(n(pathCase(`$mesqueeb .BluesJazz @github _POWER`)),         n(`$mesqueeb/.BluesJazz/@github/_POWER`)) }) // prettier-ignore
test("spaced — lowerCase keep special characters", t => { t.is(n(lowerCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`$mesqueeb .bluesjazz @github _power`)) }) // prettier-ignore
test("spaced — upperCase keep special characters", t => { t.is(n(upperCase(`$mesqueeb .BluesJazz @github _POWER`)),       n(`$MESQUEEB .BLUESJAZZ @GITHUB _POWER`)) }) // prettier-ignore
test("spaced — capitalCase keep special characters", t => { t.is(n(capitalCase(`$mesqueeb .BluesJazz @github _POWER`)),   n(`$Mesqueeb .Bluesjazz @Github _Power`)) }) // prettier-ignore
// when `stripSpecialCharacters` is `true`...
test("spaced — spaceCase remove special characters", t => { t.is(n(spaceCase(`$mesqueeb .BluesJazz @github _POWER`, true)),       n(`mesqueeb BluesJazz github POWER`)) }) // prettier-ignore
test("spaced — pathCase remove special characters", t => { t.is(n(pathCase(`$mesqueeb .BluesJazz @github _POWER`, true)),         n(`mesqueeb/BluesJazz/github/POWER`)) }) // prettier-ignore
test("spaced — lowerCase remove special characters", t => { t.is(n(lowerCase(`$mesqueeb .BluesJazz @github _POWER`, true)),       n(`mesqueeb bluesjazz github power`)) }) // prettier-ignore
test("spaced — upperCase remove special characters", t => { t.is(n(upperCase(`$mesqueeb .BluesJazz @github _POWER`, true)),       n(`MESQUEEB BLUESJAZZ GITHUB POWER`)) }) // prettier-ignore
test("spaced — capitalCase remove special characters", t => { t.is(n(capitalCase(`$mesqueeb .BluesJazz @github _POWER`, true)),   n(`Mesqueeb Bluesjazz Github Power`)) }) // prettier-ignore
