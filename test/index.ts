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
  t.is(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta vaporeon poliwrath_butterfree a') // prettier-ignore
  t.is(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta vaporeon poliwrath_butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta-vaporeon-poliwrath-butterfree a') // prettier-ignore
  t.is(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'ponyta~vaporeon~poliwrath/butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_vaporeon_poliwrath_butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta.vaporeon.poliwrath.butterfree a') // prettier-ignore
})
test('upperCase', (t) => {
  t.is(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA VAPOREON POLIWRATH_BUTTERFREE A') // prettier-ignore
  t.is(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'PONYTA VAPOREON POLIWRATH_BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'PONYTA-VAPOREON-POLIWRATH-BUTTERFREE A') // prettier-ignore
  t.is(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'PONYTA~VAPOREON~POLIWRATH/BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'PONYTA_VAPOREON_POLIWRATH_BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'PONYTA.VAPOREON.POLIWRATH.BUTTERFREE A') // prettier-ignore
})
test('capitalCase', (t) => {
  t.is(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon Poliwrath_Butterfree A') // prettier-ignore
  t.is(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon Poliwrath_Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'Ponyta-Vaporeon-Poliwrath-Butterfree A') // prettier-ignore
  t.is(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'Ponyta~Vaporeon~Poliwrath/Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'Ponyta_Vaporeon_Poliwrath_Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'Ponyta_Vaporeon_Poliwrath_Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'Ponyta.Vaporeon.Poliwrath.Butterfree A') // prettier-ignore
})
test('spaceCase', (t) => {
  t.is(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA'), 'ponyta Vaporeon POLIWRATH_Butterfree A') // prettier-ignore
  t.is(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA'), 'Ponyta Vaporeon POLIWRATH_Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA'), 'ponyta-vaporeon-POLIWRATH-Butterfree A') // prettier-ignore
  t.is(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA'), 'Ponyta~vaporeon~POLIWRATH/Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_vaporeon_POLIWRATH_Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA'), 'ponyta_Vaporeon_POLIWRATH_Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA'), 'ponyta.Vaporeon.POLIWRATH.Butterfree A') // prettier-ignore
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
  t.is(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  t.is(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon poliwrath butterfree a') // prettier-ignore
})
test('upperCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `upperCase`, made `true` it these examples below.
   */
  t.is(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  t.is(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false }), 'PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
})
test('capitalCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `capitalCase`, made `true` it these examples below.
   */
  t.is(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  t.is(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
})
test('spaceCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `spaceCase`, made `true` it these examples below.
   */
  t.is(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  t.is(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false }), 'ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
})

test('pathCase & strip special characters', (t) => {
  /**
   * Wether or not to strip special characters.
   * defaults to `false` for `pathCase`, made `true` it these examples below.
   */
  t.is(pathCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false }), 'ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false }), 'Ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false }), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  t.is(pathCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false }), 'ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
})

// single capital
test('camelCase - QTableA', (t) => { t.is(camelCase('QTableA'), 'qTableA') }) // prettier-ignore
test('pascalCase - QTableA', (t) => { t.is(pascalCase('QTableA'), 'QTableA') }) // prettier-ignore
test('kebabCase - QTableA', (t) => { t.is(kebabCase('QTableA'), 'q-table-a') }) // prettier-ignore
test('snakeCase - QTableA', (t) => { t.is(snakeCase('QTableA'), 'q_table_a') }) // prettier-ignore
test('constantCase - QTableA', (t) => { t.is(constantCase('QTableA'), 'Q_TABLE_A') }) // prettier-ignore
test('spaceCase - QTableA', (t) => { t.is(spaceCase('QTableA'), 'Q Table A') }) // prettier-ignore
test('pathCase - QTableA', (t) => { t.is(pathCase('QTableA'), 'Q/Table/A') }) // prettier-ignore
test('lowerCase - QTableA', (t) => { t.is(lowerCase('QTableA'), 'q table a') }) // prettier-ignore
test('upperCase - QTableA', (t) => { t.is(upperCase('QTableA'), 'Q TABLE A') }) // prettier-ignore
test('capitalCase - QTableA', (t) => { t.is(capitalCase('QTableA'), 'Q Table A') }) // prettier-ignore

// spaces & non alphabet characters
test("camelCase I'm a M.I.B. 101 OK?", (t) => { t.is(camelCase(`I'm a M.I.B. 101 OK?`),       'imAMib101Ok') }) // prettier-ignore
test("pascalCase I'm a M.I.B. 101 OK?", (t) => { t.is(pascalCase(`I'm a M.I.B. 101 OK?`),     'ImAMib101Ok') }) // prettier-ignore
test("kebabCase I'm a M.I.B. 101 OK?", (t) => { t.is(kebabCase(`I'm a M.I.B. 101 OK?`),       'im-a-mib-101-ok') }) // prettier-ignore
test("snakeCase I'm a M.I.B. 101 OK?", (t) => { t.is(snakeCase(`I'm a M.I.B. 101 OK?`),       'im_a_mib_101_ok') }) // prettier-ignore
test("constantCase I'm a M.I.B. 101 OK?", (t) => { t.is(constantCase(`I'm a M.I.B. 101 OK?`), 'IM_A_MIB_101_OK') }) // prettier-ignore
test("spaceCase I'm a M.I.B. 101 OK?", (t) => { t.is(spaceCase(`I'm a M.I.B. 101 OK?`),       "I'm a M.I.B. 101 OK?") }) // prettier-ignore
test("pathCase I'm a M.I.B. 101 OK?", (t) => { t.is(pathCase(`I'm a M.I.B. 101 OK?`),         "I'm/a/M.I.B./101/OK?") }) // prettier-ignore
test("lowerCase I'm a M.I.B. 101 OK?", (t) => { t.is(lowerCase(`I'm a M.I.B. 101 OK?`),       "i'm a m.i.b. 101 ok?") }) // prettier-ignore
test("upperCase I'm a M.I.B. 101 OK?", (t) => { t.is(upperCase(`I'm a M.I.B. 101 OK?`),       "I'M A M.I.B. 101 OK?") }) // prettier-ignore
test("capitalCase I'm a M.I.B. 101 OK?", (t) => { t.is(capitalCase(`I'm a M.I.B. 101 OK?`),   "I'm A M.i.b. 101 Ok?") }) // prettier-ignore

// spaces & non alphabet characters
test("camelCase listen I'm O.K.!", (t) => { t.is(camelCase(`listen I'm O.K.!`),       'listenImOk') }) // prettier-ignore
test("pascalCase listen I'm O.K.!", (t) => { t.is(pascalCase(`listen I'm O.K.!`),     'ListenImOk') }) // prettier-ignore
test("kebabCase listen I'm O.K.!", (t) => { t.is(kebabCase(`listen I'm O.K.!`),       'listen-im-ok') }) // prettier-ignore
test("snakeCase listen I'm O.K.!", (t) => { t.is(snakeCase(`listen I'm O.K.!`),       'listen_im_ok') }) // prettier-ignore
test("constantCase listen I'm O.K.!", (t) => { t.is(constantCase(`listen I'm O.K.!`), 'LISTEN_IM_OK') }) // prettier-ignore
test("spaceCase listen I'm O.K.!", (t) => { t.is(spaceCase(`listen I'm O.K.!`),       "listen I'm O.K.!") }) // prettier-ignore
test("pathCase listen I'm O.K.!", (t) => { t.is(pathCase(`listen I'm O.K.!`),         "listen/I'm/O.K.!") }) // prettier-ignore
test("lowerCase listen I'm O.K.!", (t) => { t.is(lowerCase(`listen I'm O.K.!`),       "listen i'm o.k.!") }) // prettier-ignore
test("upperCase listen I'm O.K.!", (t) => { t.is(upperCase(`listen I'm O.K.!`),       "LISTEN I'M O.K.!") }) // prettier-ignore
test("capitalCase listen I'm O.K.!", (t) => { t.is(capitalCase(`listen I'm O.K.!`),   "Listen I'm O.k.!") }) // prettier-ignore

// double spacing
test("camelCase Double  Rainbow", (t) => { t.is(camelCase('Double  Rainbow'),       'doubleRainbow') }) // prettier-ignore
test("pascalCase Double  Rainbow", (t) => { t.is(pascalCase('Double  Rainbow'),     'DoubleRainbow') }) // prettier-ignore
test("kebabCase Double  Rainbow", (t) => { t.is(kebabCase('Double  Rainbow'),       'double-rainbow') }) // prettier-ignore
test("snakeCase Double  Rainbow", (t) => { t.is(snakeCase('Double  Rainbow'),       'double_rainbow') }) // prettier-ignore
test("constantCase Double  Rainbow", (t) => { t.is(constantCase('Double  Rainbow'), 'DOUBLE_RAINBOW') }) // prettier-ignore
test("spaceCase Double  Rainbow", (t) => { t.is(spaceCase('Double  Rainbow'),       "Double Rainbow") }) // prettier-ignore
test("pathCase Double  Rainbow", (t) => { t.is(pathCase('Double  Rainbow'),         "Double/Rainbow") }) // prettier-ignore
test("lowerCase Double  Rainbow", (t) => { t.is(lowerCase('Double  Rainbow'),       "double rainbow") }) // prettier-ignore
test("upperCase Double  Rainbow", (t) => { t.is(upperCase('Double  Rainbow'),       "DOUBLE RAINBOW") }) // prettier-ignore
test("capitalCase Double  Rainbow", (t) => { t.is(capitalCase('Double  Rainbow'),   "Double Rainbow") }) // prettier-ignore

const n = (str: string) => str.normalize()

// special characters with Canonical Composition:
const specialCharsNFC = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFC')

test("camelCase specialChars NFC", (t) => { t.is(n(camelCase(specialCharsNFC)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFC", (t) => { t.is(n(pascalCase(specialCharsNFC)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFC", (t) => { t.is(n(kebabCase(specialCharsNFC)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFC", (t) => { t.is(n(snakeCase(specialCharsNFC)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFC", (t) => { t.is(n(constantCase(specialCharsNFC)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFC", (t) => { t.is(n(spaceCase(specialCharsNFC)),       n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFC", (t) => { t.is(n(pathCase(specialCharsNFC)),         n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFC", (t) => { t.is(n(lowerCase(specialCharsNFC)),       n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFC", (t) => { t.is(n(upperCase(specialCharsNFC)),       n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFC", (t) => { t.is(n(capitalCase(specialCharsNFC)),   n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition:
const specialCharsNFD = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFD')

test("camelCase specialChars NFD", (t) => { t.is(n(camelCase(specialCharsNFD)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFD", (t) => { t.is(n(pascalCase(specialCharsNFD)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFD", (t) => { t.is(n(kebabCase(specialCharsNFD)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFD", (t) => { t.is(n(snakeCase(specialCharsNFD)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFD", (t) => { t.is(n(constantCase(specialCharsNFD)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFD", (t) => { t.is(n(spaceCase(specialCharsNFD)),       n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFD", (t) => { t.is(n(pathCase(specialCharsNFD)),         n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFD", (t) => { t.is(n(lowerCase(specialCharsNFD)),       n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFD", (t) => { t.is(n(upperCase(specialCharsNFD)),       n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFD", (t) => { t.is(n(capitalCase(specialCharsNFD)),   n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Composition without spaces:
const specialCharsNFCnoSpace = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFC')

test("camelCase specialChars NFC - no spaces", (t) => { t.is(n(camelCase(specialCharsNFCnoSpace)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFC - no spaces", (t) => { t.is(n(pascalCase(specialCharsNFCnoSpace)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFC - no spaces", (t) => { t.is(n(kebabCase(specialCharsNFCnoSpace)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFC - no spaces", (t) => { t.is(n(snakeCase(specialCharsNFCnoSpace)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFC - no spaces", (t) => { t.is(n(constantCase(specialCharsNFCnoSpace)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFC - no spaces", (t) => { t.is(n(spaceCase(specialCharsNFCnoSpace)),       n(`Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFC - no spaces", (t) => { t.is(n(pathCase(specialCharsNFCnoSpace)),         n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFC - no spaces", (t) => { t.is(n(lowerCase(specialCharsNFCnoSpace)),       n(`ågård_î_garçons_çafé_château_voilà_ñoël_été_laïeul_ågård_àöøß_àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFC - no spaces", (t) => { t.is(n(upperCase(specialCharsNFCnoSpace)),       n(`ÅGÅRD_Î_GARÇONS_ÇAFÉ_CHÂTEAU_VOILÀ_ÑOËL_ÉTÉ_LAÏEUL_ÅGÅRD_ÀÖØSS_ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFC - no spaces", (t) => { t.is(n(capitalCase(specialCharsNFCnoSpace)),   n(`Ågård_Î_Garçons_Çafé_Château_Voilà_Ñoël_Été_Laïeul_Ågård_Àöøß_Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces:
const specialCharsNFDnoSpace = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFD')

test("camelCase specialChars NFD - no spaces", (t) => { t.is(n(camelCase(specialCharsNFDnoSpace)),       n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("pascalCase specialChars NFD - no spaces", (t) => { t.is(n(pascalCase(specialCharsNFDnoSpace)),     n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test("kebabCase specialChars NFD - no spaces", (t) => { t.is(n(kebabCase(specialCharsNFDnoSpace)),       n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test("snakeCase specialChars NFD - no spaces", (t) => { t.is(n(snakeCase(specialCharsNFDnoSpace)),       n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test("constantCase specialChars NFD - no spaces", (t) => { t.is(n(constantCase(specialCharsNFDnoSpace)), n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test("spaceCase specialChars NFD - no spaces", (t) => { t.is(n(spaceCase(specialCharsNFDnoSpace)),       n(`Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`)) }) // prettier-ignore
test("pathCase specialChars NFD - no spaces", (t) => { t.is(n(pathCase(specialCharsNFDnoSpace)),         n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test("lowerCase specialChars NFD - no spaces", (t) => { t.is(n(lowerCase(specialCharsNFDnoSpace)),       n(`ågård_î_garçons_çafé_château_voilà_ñoël_été_laïeul_ågård_àöøß_àöøÿ`)) }) // prettier-ignore
test("upperCase specialChars NFD - no spaces", (t) => { t.is(n(upperCase(specialCharsNFDnoSpace)),       n(`ÅGÅRD_Î_GARÇONS_ÇAFÉ_CHÂTEAU_VOILÀ_ÑOËL_ÉTÉ_LAÏEUL_ÅGÅRD_ÀÖØSS_ÀÖØŸ`)) }) // prettier-ignore
test("capitalCase specialChars NFD - no spaces", (t) => { t.is(n(capitalCase(specialCharsNFDnoSpace)),   n(`Ågård_Î_Garçons_Çafé_Château_Voilà_Ñoël_Été_Laïeul_Ågård_Àöøß_Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Composition without spaces - short example:
test("camelCase specialChars NFC - no spaces s", (t) => { t.is(n(camelCase(`ÇaféÅgård`.normalize('NFC'))),       n(`cafeAgard`)) }) // prettier-ignore
test("pascalCase specialChars NFC - no spaces s", (t) => { t.is(n(pascalCase(`ÇaféÅgård`.normalize('NFC'))),     n(`CafeAgard`)) }) // prettier-ignore
test("kebabCase specialChars NFC - no spaces s", (t) => { t.is(n(kebabCase(`ÇaféÅgård`.normalize('NFC'))),       n(`cafe-agard`)) }) // prettier-ignore
test("snakeCase specialChars NFC - no spaces s", (t) => { t.is(n(snakeCase(`ÇaféÅgård`.normalize('NFC'))),       n(`cafe_agard`)) }) // prettier-ignore
test("constantCase specialChars NFC - no spaces s", (t) => { t.is(n(constantCase(`ÇaféÅgård`.normalize('NFC'))), n(`CAFE_AGARD`)) }) // prettier-ignore
test("spaceCase specialChars NFC - no spaces s", (t) => { t.is(n(spaceCase(`ÇaféÅgård`.normalize('NFC'))),       n(`Çafé Ågård`)) }) // prettier-ignore
test("pathCase specialChars NFC - no spaces s", (t) => { t.is(n(pathCase(`ÇaféÅgård`.normalize('NFC'))),         n(`Çafé/Ågård`)) }) // prettier-ignore
test("lowerCase specialChars NFC - no spaces s", (t) => { t.is(n(lowerCase(`ÇaféÅgård`.normalize('NFC'))),       n(`çafé ågård`)) }) // prettier-ignore
test("upperCase specialChars NFC - no spaces s", (t) => { t.is(n(upperCase(`ÇaféÅgård`.normalize('NFC'))),       n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test("capitalCase specialChars NFC - no spaces s", (t) => { t.is(n(capitalCase(`ÇaféÅgård`.normalize('NFC'))),   n(`Çafé Ågård`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces - short example:
test("camelCase specialChars NFD - no spaces s", (t) => { t.is(n(camelCase(`ÇaféÅgård`.normalize('NFD'))),       n(`cafeAgard`)) }) // prettier-ignore
test("pascalCase specialChars NFD - no spaces s", (t) => { t.is(n(pascalCase(`ÇaféÅgård`.normalize('NFD'))),     n(`CafeAgard`)) }) // prettier-ignore
test("kebabCase specialChars NFD - no spaces s", (t) => { t.is(n(kebabCase(`ÇaféÅgård`.normalize('NFD'))),       n(`cafe-agard`)) }) // prettier-ignore
test("snakeCase specialChars NFD - no spaces s", (t) => { t.is(n(snakeCase(`ÇaféÅgård`.normalize('NFD'))),       n(`cafe_agard`)) }) // prettier-ignore
test("constantCase specialChars NFD - no spaces s", (t) => { t.is(n(constantCase(`ÇaféÅgård`.normalize('NFD'))), n(`CAFE_AGARD`)) }) // prettier-ignore
test("spaceCase specialChars NFD - no spaces s", (t) => { t.is(n(spaceCase(`ÇaféÅgård`.normalize('NFD'))),       n(`Çafé Ågård`)) }) // prettier-ignore
test("pathCase specialChars NFD - no spaces s", (t) => { t.is(n(pathCase(`ÇaféÅgård`.normalize('NFD'))),         n(`Çafé/Ågård`)) }) // prettier-ignore
test("lowerCase specialChars NFD - no spaces s", (t) => { t.is(n(lowerCase(`ÇaféÅgård`.normalize('NFD'))),       n(`çafé ågård`)) }) // prettier-ignore
test("upperCase specialChars NFD - no spaces s", (t) => { t.is(n(upperCase(`ÇaféÅgård`.normalize('NFD'))),       n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test("capitalCase specialChars NFD - no spaces s", (t) => { t.is(n(capitalCase(`ÇaféÅgård`.normalize('NFD'))),   n(`Çafé Ågård`)) }) // prettier-ignore

// No spaces involved
test("camelCase remove special characters", (t) => { t.is(camelCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `mesqueebBluesJazzGithubCom`) }) // prettier-ignore
test("camelCase keep special characters", (t) => { t.is(camelCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$mesqueeb.bluesJazz@github.com`) }) // prettier-ignore
test("pascalCase remove special characters", (t) => { t.is(pascalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),     `MesqueebBluesJazzGithubCom`) }) // prettier-ignore
test("pascalCase keep special characters", (t) => { t.is(pascalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),        `$Mesqueeb.BluesJazz@Github.Com`) }) // prettier-ignore
test("kebabCase remove special characters", (t) => { t.is(kebabCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `mesqueeb-blues-jazz-github-com`) }) // prettier-ignore
test("kebabCase keep special characters", (t) => { t.is(kebabCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$mesqueeb.blues-jazz@github.com`) }) // prettier-ignore
test("snakeCase remove special characters", (t) => { t.is(snakeCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `mesqueeb_blues_jazz_github_com`) }) // prettier-ignore
test("snakeCase keep special characters", (t) => { t.is(snakeCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$mesqueeb.blues_jazz@github.com`) }) // prettier-ignore
test("constantCase remove special characters", (t) => { t.is(constantCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }), `MESQUEEB_BLUES_JAZZ_GITHUB_COM`) }) // prettier-ignore
test("constantCase keep special characters", (t) => { t.is(constantCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),    `$MESQUEEB.BLUES_JAZZ@GITHUB.COM`) }) // prettier-ignore

test("spaceCase keep special characters", (t) => { t.is(spaceCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$mesqueeb.Blues Jazz@github.com`) }) // prettier-ignore
test("spaceCase remove special characters", (t) => { t.is(spaceCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `mesqueeb Blues Jazz github com`) }) // prettier-ignore
test("pathCase keep special characters", (t) => { t.is(pathCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),            `$mesqueeb/.Blues/Jazz/@github/.com`) }) // prettier-ignore
test("pathCase remove special characters", (t) => { t.is(pathCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),         `mesqueeb/Blues/Jazz/github/com`) }) // prettier-ignore
test("lowerCase keep special characters", (t) => { t.is(lowerCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$mesqueeb.blues jazz@github.com`) }) // prettier-ignore
test("lowerCase remove special characters", (t) => { t.is(lowerCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `mesqueeb blues jazz github com`) }) // prettier-ignore
test("upperCase keep special characters", (t) => { t.is(upperCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),          `$MESQUEEB.BLUES JAZZ@GITHUB.COM`) }) // prettier-ignore
test("upperCase remove special characters", (t) => { t.is(upperCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),       `MESQUEEB BLUES JAZZ GITHUB COM`) }) // prettier-ignore
test("capitalCase keep special characters", (t) => { t.is(capitalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),      `$Mesqueeb.Blues Jazz@Github.Com`) }) // prettier-ignore
test("capitalCase remove special characters", (t) => { t.is(capitalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),   `Mesqueeb Blues Jazz Github Com`) }) // prettier-ignore

// Spaces involved
test("spaced — camelCase remove special characters", (t) => { t.is(camelCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `mesqueebBluesjazzGithubPower`) }) // prettier-ignore
test("spaced — camelCase keep special characters", (t) => { t.is(camelCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$mesqueeb.bluesjazz@github_power`) }) // prettier-ignore
test("spaced — pascalCase remove special characters", (t) => { t.is(pascalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),     `MesqueebBluesjazzGithubPower`) }) // prettier-ignore
test("spaced — pascalCase keep special characters", (t) => { t.is(pascalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),        `$Mesqueeb.Bluesjazz@Github_Power`) }) // prettier-ignore
test("spaced — kebabCase remove special characters", (t) => { t.is(kebabCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `mesqueeb-bluesjazz-github-power`) }) // prettier-ignore
test("spaced — kebabCase keep special characters", (t) => { t.is(kebabCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$mesqueeb.bluesjazz@github_power`) }) // prettier-ignore
test("spaced — snakeCase remove special characters", (t) => { t.is(snakeCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `mesqueeb_bluesjazz_github_power`) }) // prettier-ignore
test("spaced — snakeCase keep special characters", (t) => { t.is(snakeCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$mesqueeb.bluesjazz@github_power`) }) // prettier-ignore
test("spaced — constantCase remove special characters", (t) => { t.is(constantCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }), `MESQUEEB_BLUESJAZZ_GITHUB_POWER`) }) // prettier-ignore
test("spaced — constantCase keep special characters", (t) => { t.is(constantCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),    `$MESQUEEB.BLUESJAZZ@GITHUB_POWER`) }) // prettier-ignore

test("spaced — spaceCase keep special characters", (t) => { t.is(spaceCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$mesqueeb .BluesJazz @github _POWER`) }) // prettier-ignore
test("spaced — spaceCase remove special characters", (t) => { t.is(spaceCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `mesqueeb BluesJazz github POWER`) }) // prettier-ignore
test("spaced — pathCase keep special characters", (t) => { t.is(pathCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),            `$mesqueeb/.BluesJazz/@github/_POWER`) }) // prettier-ignore
test("spaced — pathCase remove special characters", (t) => { t.is(pathCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),         `mesqueeb/BluesJazz/github/POWER`) }) // prettier-ignore
test("spaced — lowerCase keep special characters", (t) => { t.is(lowerCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$mesqueeb .bluesjazz @github _power`) }) // prettier-ignore
test("spaced — lowerCase remove special characters", (t) => { t.is(lowerCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `mesqueeb bluesjazz github power`) }) // prettier-ignore
test("spaced — upperCase keep special characters", (t) => { t.is(upperCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),          `$MESQUEEB .BLUESJAZZ @GITHUB _POWER`) }) // prettier-ignore
test("spaced — upperCase remove special characters", (t) => { t.is(upperCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),       `MESQUEEB BLUESJAZZ GITHUB POWER`) }) // prettier-ignore
test("spaced — capitalCase keep special characters", (t) => { t.is(capitalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true }),      `$Mesqueeb .Bluesjazz @Github _Power`) }) // prettier-ignore
test("spaced — capitalCase remove special characters", (t) => { t.is(capitalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false }),   `Mesqueeb Bluesjazz Github Power`) }) // prettier-ignore

// DON'T strip special characters -- query without spaces
test('camelCase(query) - dont strip', (t) =>
  t.is(camelCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderBy=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                                )) // prettier-ignore
test('pascalCase(query) - dont strip', (t) =>
  t.is(pascalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$OrderBy=Name&Skip=3&Sort=True&Name=James-P&Email=Sullivan@Monsters.Inc'                                 )) // prettier-ignore
test('kebabCase(query) - dont strip', (t) =>
  t.is(kebabCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$order-by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                               )) // prettier-ignore
test('snakeCase(query) - dont strip', (t) =>
  t.is(snakeCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$order_by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                               )) // prettier-ignore
test('constantCase(query) - dont strip', (t) =>
  t.is(constantCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$ORDER_BY=NAME&SKIP=3&SORT=TRUE&NAME=JAMES-P&EMAIL=SULLIVAN@MONSTERS.INC'                                 )) // prettier-ignore
test('spaceCase(query) - dont strip', (t) =>
  t.is(spaceCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$order By=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc'                               )) // prettier-ignore
test('pathCase(query) - dont strip', (t) =>
  t.is(pathCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$order/By/=name/&skip/=3/&sort/=true/&name/=James/-P/&email/=sullivan/@monsters/.inc'                  )) // prettier-ignore
test('lowerCase(query) - dont strip', (t) =>
  t.is(lowerCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$order by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                               )) // prettier-ignore
test('upperCase(query) - dont strip', (t) =>
  t.is(upperCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$ORDER BY=NAME&SKIP=3&SORT=TRUE&NAME=JAMES-P&EMAIL=SULLIVAN@MONSTERS.INC'                               )) // prettier-ignore
test('capitalCase(query) - dont strip', (t) =>
  t.is(capitalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$Order By=Name&Skip=3&Sort=True&Name=James-P&Email=Sullivan@Monsters.Inc'                                 )) // prettier-ignore

// strip special characters -- query without spaces
test('camelCase(query) - strip', (t) =>
  t.is(camelCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderByNameSkip3SortTrueNameJamesPEmailSullivanMonstersInc'                                              )) // prettier-ignore
test('pascalCase(query) - strip', (t) =>
  t.is(pascalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'OrderByNameSkip3SortTrueNameJamesPEmailSullivanMonstersInc'                                               )) // prettier-ignore
test('kebabCase(query) - strip', (t) =>
  t.is(kebabCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'order-by-name-skip-3-sort-true-name-james-p-email-sullivan-monsters-inc'                                 )) // prettier-ignore
test('snakeCase(query) - strip', (t) =>
  t.is(snakeCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'order_by_name_skip_3_sort_true_name_james_p_email_sullivan_monsters_inc'                                 )) // prettier-ignore
test('constantCase(query) - strip', (t) =>
  t.is(constantCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'ORDER_BY_NAME_SKIP_3_SORT_TRUE_NAME_JAMES_P_EMAIL_SULLIVAN_MONSTERS_INC'                                    )) // prettier-ignore
test('spaceCase(query) - strip', (t) =>
  t.is(spaceCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'order By name skip 3 sort true name James P email sullivan monsters inc'                                 )) // prettier-ignore
test('pathCase(query) - strip', (t) =>
  t.is(pathCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'order/By/name/skip/3/sort/true/name/James/P/email/sullivan/monsters/inc'                                )) // prettier-ignore
test('lowerCase(query) - strip', (t) =>
  t.is(lowerCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'order by name skip 3 sort true name james p email sullivan monsters inc'                                 )) // prettier-ignore
test('upperCase(query) - strip', (t) =>
  t.is(upperCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'ORDER BY NAME SKIP 3 SORT TRUE NAME JAMES P EMAIL SULLIVAN MONSTERS INC'                                 )) // prettier-ignore
test('capitalCase(query) - strip', (t) =>
  t.is(capitalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'Order By Name Skip 3 Sort True Name James P Email Sullivan Monsters Inc'                                   )) // prettier-ignore

// DON'T strip special characters -- spaced query
test('camelCase(spacedQuery) - dont strip', (t) =>
  t.is(camelCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderby=name&skip=3&sort=true&name=jamesPSullivan&email=sullivan@monsters.inc'                                  )) // prettier-ignore
test('pascalCase(spacedQuery) - dont strip', (t) =>
  t.is(pascalCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$Orderby=name&skip=3&sort=true&name=jamesPSullivan&email=sullivan@monsters.inc'                                   )) // prettier-ignore
test('kebabCase(spacedQuery) - dont strip', (t) =>
  t.is(kebabCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderby=name&skip=3&sort=true&name=jamespsullivan&email=sullivan@monsters.inc'                                  )) // prettier-ignore
test('snakeCase(spacedQuery) - dont strip', (t) =>
  t.is(snakeCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderby=name&skip=3&sort=true&name=jamespsullivan&email=sullivan@monsters.inc'                                  )) // prettier-ignore
test('constantCase(spacedQuery) - dont strip', (t) =>
  t.is(constantCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$ORDERBY=NAME&SKIP=3&SORT=TRUE&NAME=JAMESPSULLIVAN&EMAIL=SULLIVAN@MONSTERS.INC'                                     )) // prettier-ignore
test('spaceCase(spacedQuery) - dont strip', (t) =>
  t.is(spaceCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc'                                )) // prettier-ignore
test('pathCase(spacedQuery) - dont strip', (t) =>
  t.is(pathCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderBy=name&skip=3&sort=true&name=James/P/Sullivan&email=sullivan@monsters.inc'                               )) // prettier-ignore
test('lowerCase(spacedQuery) - dont strip', (t) =>
  t.is(lowerCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$orderby=name&skip=3&sort=true&name=james p sullivan&email=sullivan@monsters.inc'                                )) // prettier-ignore
test('upperCase(spacedQuery) - dont strip', (t) =>
  t.is(upperCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$ORDERBY=NAME&SKIP=3&SORT=TRUE&NAME=JAMES P SULLIVAN&EMAIL=SULLIVAN@MONSTERS.INC'                                )) // prettier-ignore
test('capitalCase(spacedQuery) - dont strip', (t) =>
  t.is(capitalCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: true }), // prettier-ignore
                 '$Orderby=name&skip=3&sort=true&name=james P Sullivan&email=sullivan@monsters.inc'                                  )) // prettier-ignore

// strip special characters -- spaced query
test('camelCase(spacedQuery) - strip', (t) =>
  t.is(camelCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderbynameskip3sorttruenamejamesPSullivanemailsullivanmonstersinc'                                               )) // prettier-ignore
test('pascalCase(spacedQuery) - strip', (t) =>
  t.is(pascalCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'Orderbynameskip3sorttruenamejamesPSullivanemailsullivanmonstersinc'                                                )) // prettier-ignore
test('kebabCase(spacedQuery) - strip', (t) =>
  t.is(kebabCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderbynameskip3sorttruenamejames-p-sullivanemailsullivanmonstersinc'                                             )) // prettier-ignore
test('snakeCase(spacedQuery) - strip', (t) =>
  t.is(snakeCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderbynameskip3sorttruenamejames_p_sullivanemailsullivanmonstersinc'                                             )) // prettier-ignore
test('constantCase(spacedQuery) - strip', (t) =>
  t.is(constantCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'ORDERBYNAMESKIP3SORTTRUENAMEJAMES_P_SULLIVANEMAILSULLIVANMONSTERSINC'                                                )) // prettier-ignore
test('spaceCase(spacedQuery) - strip', (t) =>
  t.is(spaceCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderBynameskip3sorttruenameJames P Sullivanemailsullivanmonstersinc'                                             )) // prettier-ignore
test('pathCase(spacedQuery) - strip', (t) =>
  t.is(pathCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderBynameskip3sorttruenameJames/P/Sullivanemailsullivanmonstersinc'                                            )) // prettier-ignore
test('lowerCase(spacedQuery) - strip', (t) =>
  t.is(lowerCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'orderbynameskip3sorttruenamejames p sullivanemailsullivanmonstersinc'                                             )) // prettier-ignore
test('upperCase(spacedQuery) - strip', (t) =>
  t.is(upperCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'ORDERBYNAMESKIP3SORTTRUENAMEJAMES P SULLIVANEMAILSULLIVANMONSTERSINC'                                             )) // prettier-ignore
test('capitalCase(spacedQuery) - strip', (t) =>
  t.is(capitalCase(`$orderBy=name&skip=3&sort=true&name=James P Sullivan&email=sullivan@monsters.inc`, { keepSpecialCharacters: false }), // prettier-ignore
                 'Orderbynameskip3sorttruenamejames P Sullivanemailsullivanmonstersinc'                                               )) // prettier-ignore
