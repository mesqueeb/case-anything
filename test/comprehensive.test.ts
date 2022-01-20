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

// a bunch of different combinations

test(`camelCase`, () => {
  expect(camelCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
  expect(camelCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponytaVaporeonPoliwrathButterfreeA')
})
test(`pascalCase`, () => {
  expect(pascalCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
  expect(pascalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('PonytaVaporeonPoliwrathButterfreeA')
})
test(`kebabCase`, () => {
  expect(kebabCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
  expect(kebabCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree-a')
})
test(`snakeCase`, () => {
  expect(snakeCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
  expect(snakeCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree_a')
})
test(`constantCase`, () => {
  expect(constantCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
  expect(constantCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE_A')
})
test(`dotNotation`, () => {
  expect(dotNotation('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta.Vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta.Vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta.vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta.vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta.vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta.Vaporeon.POLIWRATH.Butterfree.A')
  expect(dotNotation('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta.Vaporeon.POLIWRATH.Butterfree.A')
})
test(`adaCase`, () => {
  expect(adaCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
  expect(adaCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree_A')
})
test(`cobolCase`, () => {
  expect(cobolCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
  expect(cobolCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE-A')
})
test(`trainCase`, () => {
  expect(trainCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
  expect(trainCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree-A')
})
test(`lowerCase`, () => {
  expect(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta vaporeon poliwrath_butterfree a')
  expect(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta vaporeon poliwrath_butterfree a')
  expect(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta-vaporeon-poliwrath-butterfree a')
  expect(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('ponyta~vaporeon~poliwrath/butterfree a')
  expect(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree a')
  expect(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_poliwrath_butterfree a')
  expect(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta.vaporeon.poliwrath.butterfree a')
})
test(`upperCase`, () => {
  expect(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA VAPOREON POLIWRATH_BUTTERFREE A')
  expect(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('PONYTA VAPOREON POLIWRATH_BUTTERFREE A')
  expect(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('PONYTA-VAPOREON-POLIWRATH-BUTTERFREE A')
  expect(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('PONYTA~VAPOREON~POLIWRATH/BUTTERFREE A')
  expect(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE A')
  expect(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('PONYTA_VAPOREON_POLIWRATH_BUTTERFREE A')
  expect(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('PONYTA.VAPOREON.POLIWRATH.BUTTERFREE A')
})
test(`capitalCase`, () => {
  expect(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta Vaporeon Poliwrath_Butterfree A')
  expect(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta Vaporeon Poliwrath_Butterfree A')
  expect(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('Ponyta-Vaporeon-Poliwrath-Butterfree A')
  expect(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta~Vaporeon~Poliwrath/Butterfree A')
  expect(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree A')
  expect(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('Ponyta_Vaporeon_Poliwrath_Butterfree A')
  expect(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('Ponyta.Vaporeon.Poliwrath.Butterfree A')
})
test(`spaceCase`, () => {
  expect(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta Vaporeon POLIWRATH_Butterfree A')
  expect(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta Vaporeon POLIWRATH_Butterfree A')
  expect(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta-vaporeon-POLIWRATH-Butterfree A')
  expect(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta~vaporeon~POLIWRATH/Butterfree A')
  expect(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_vaporeon_POLIWRATH_Butterfree A')
  expect(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta_Vaporeon_POLIWRATH_Butterfree A')
  expect(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta.Vaporeon.POLIWRATH.Butterfree A')
})

test(`pathCase`, () => {
  expect(pathCase('ponytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('ponyta/Vaporeon/POLIWRATH/_Butterfree/A')
  expect(pathCase('PonytaVaporeonPOLIWRATH_ButterfreeA')).toEqual('Ponyta/Vaporeon/POLIWRATH/_Butterfree/A')
  expect(pathCase('ponyta-vaporeon-POLIWRATH-ButterfreeA')).toEqual('ponyta/-vaporeon/-POLIWRATH/-Butterfree/A')
  expect(pathCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA')).toEqual('Ponyta/~vaporeon/~POLIWRATH/Butterfree/A')
  expect(pathCase('ponyta_vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta/_vaporeon/_POLIWRATH/_Butterfree/A')
  expect(pathCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA')).toEqual('ponyta/_Vaporeon/_POLIWRATH/_Butterfree/A')
  expect(pathCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA')).toEqual('ponyta/.Vaporeon/.POLIWRATH/.Butterfree/A')
})
test(`lowerCase & strip special characters`, () => {
  expect(lowerCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
  expect(lowerCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon poliwrath butterfree a') // prettier-ignore
})
test(`upperCase & strip special characters`, () => {
  expect(upperCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
  expect(upperCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false })).toEqual('PONYTA VAPOREON POLIWRATH BUTTERFREE A') // prettier-ignore
})
test(`capitalCase & strip special characters`, () => {
  expect(capitalCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
  expect(capitalCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon Poliwrath Butterfree A') // prettier-ignore
})
test(`spaceCase & strip special characters`, () => {
  expect(spaceCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
  expect(spaceCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta Vaporeon POLIWRATH Butterfree A') // prettier-ignore
})

test(`pathCase & strip special characters`, () => {
  expect(pathCase('ponytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('PonytaVaporeonPOLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('ponyta-vaporeon-POLIWRATH-ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('Ponyta~vaporeon~POLIWRATH/ButterfreeA', { keepSpecialCharacters: false })).toEqual('Ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('ponyta_vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta/vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('ponyta_Vaporeon_POLIWRATH_ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
  expect(pathCase('ponyta.Vaporeon.POLIWRATH.ButterfreeA', { keepSpecialCharacters: false })).toEqual('ponyta/Vaporeon/POLIWRATH/Butterfree/A') // prettier-ignore
})

// single capital
test(`camelCase    QTableA`, () => { expect(    camelCase('QTableA')).toEqual('qTableA') }) // prettier-ignore
test(`pascalCase   QTableA`, () => { expect(   pascalCase('QTableA')).toEqual('QTableA') }) // prettier-ignore
test(`kebabCase    QTableA`, () => { expect(    kebabCase('QTableA')).toEqual('q-table-a') }) // prettier-ignore
test(`snakeCase    QTableA`, () => { expect(    snakeCase('QTableA')).toEqual('q_table_a') }) // prettier-ignore
test(`constantCase QTableA`, () => { expect( constantCase('QTableA')).toEqual('Q_TABLE_A') }) // prettier-ignore
test(`dotNotation  QTableA`, () => { expect(  dotNotation('QTableA')).toEqual('Q.Table.A') }) // prettier-ignore
test(`adaCase      QTableA`, () => { expect(      adaCase('QTableA')).toEqual('Q_Table_A') }) // prettier-ignore
test(`cobolCase    QTableA`, () => { expect(    cobolCase('QTableA')).toEqual('Q-TABLE-A') }) // prettier-ignore
test(`trainCase    QTableA`, () => { expect(    trainCase('QTableA')).toEqual('Q-Table-A') }) // prettier-ignore
test(`spaceCase    QTableA`, () => { expect(    spaceCase('QTableA')).toEqual('Q Table A') }) // prettier-ignore
test(`pathCase     QTableA`, () => { expect(     pathCase('QTableA')).toEqual('Q/Table/A') }) // prettier-ignore
test(`lowerCase    QTableA`, () => { expect(    lowerCase('QTableA')).toEqual('q table a') }) // prettier-ignore
test(`upperCase    QTableA`, () => { expect(    upperCase('QTableA')).toEqual('Q TABLE A') }) // prettier-ignore
test(`capitalCase  QTableA`, () => { expect(  capitalCase('QTableA')).toEqual('Q Table A') }) // prettier-ignore

// spaces & special characters
test(`camelCase    I'm a M.I.B. 101 OK?`, () => { expect(    camelCase(`I'm a M.I.B. 101 OK?`)).toEqual(`imAMib101Ok`) }) // prettier-ignore
test(`pascalCase   I'm a M.I.B. 101 OK?`, () => { expect(   pascalCase(`I'm a M.I.B. 101 OK?`)).toEqual(`ImAMib101Ok`) }) // prettier-ignore
test(`kebabCase    I'm a M.I.B. 101 OK?`, () => { expect(    kebabCase(`I'm a M.I.B. 101 OK?`)).toEqual(`im-a-mib-101-ok`) }) // prettier-ignore
test(`snakeCase    I'm a M.I.B. 101 OK?`, () => { expect(    snakeCase(`I'm a M.I.B. 101 OK?`)).toEqual(`im_a_mib_101_ok`) }) // prettier-ignore
test(`constantCase I'm a M.I.B. 101 OK?`, () => { expect( constantCase(`I'm a M.I.B. 101 OK?`)).toEqual(`IM_A_MIB_101_OK`) }) // prettier-ignore
test(`dotNotation  I'm a M.I.B. 101 OK?`, () => { expect(  dotNotation(`I'm a M.I.B. 101 OK?`)).toEqual(`Im.a.MIB.101.OK`) }) // prettier-ignore
test(`adaCase      I'm a M.I.B. 101 OK?`, () => { expect(      adaCase(`I'm a M.I.B. 101 OK?`)).toEqual(`Im_A_Mib_101_Ok`) }) // prettier-ignore
test(`cobolCase    I'm a M.I.B. 101 OK?`, () => { expect(    cobolCase(`I'm a M.I.B. 101 OK?`)).toEqual(`IM-A-MIB-101-OK`) }) // prettier-ignore
test(`trainCase    I'm a M.I.B. 101 OK?`, () => { expect(    trainCase(`I'm a M.I.B. 101 OK?`)).toEqual(`Im-A-Mib-101-Ok`) }) // prettier-ignore
test(`spaceCase    I'm a M.I.B. 101 OK?`, () => { expect(    spaceCase(`I'm a M.I.B. 101 OK?`)).toEqual(`I'm a M.I.B. 101 OK?`) }) // prettier-ignore
test(`pathCase     I'm a M.I.B. 101 OK?`, () => { expect(     pathCase(`I'm a M.I.B. 101 OK?`)).toEqual(`I'm/a/M.I.B./101/OK?`) }) // prettier-ignore
test(`lowerCase    I'm a M.I.B. 101 OK?`, () => { expect(    lowerCase(`I'm a M.I.B. 101 OK?`)).toEqual(`i'm a m.i.b. 101 ok?`) }) // prettier-ignore
test(`upperCase    I'm a M.I.B. 101 OK?`, () => { expect(    upperCase(`I'm a M.I.B. 101 OK?`)).toEqual(`I'M A M.I.B. 101 OK?`) }) // prettier-ignore
test(`capitalCase  I'm a M.I.B. 101 OK?`, () => { expect(  capitalCase(`I'm a M.I.B. 101 OK?`)).toEqual(`I'm A M.i.b. 101 Ok?`) }) // prettier-ignore

// spaces & special characters
test(`camelCase    listen I'm O.K.!`, () => { expect(    camelCase(`listen I'm O.K.!`)).toEqual(`listenImOk`) }) // prettier-ignore
test(`pascalCase   listen I'm O.K.!`, () => { expect(   pascalCase(`listen I'm O.K.!`)).toEqual(`ListenImOk`) }) // prettier-ignore
test(`kebabCase    listen I'm O.K.!`, () => { expect(    kebabCase(`listen I'm O.K.!`)).toEqual(`listen-im-ok`) }) // prettier-ignore
test(`snakeCase    listen I'm O.K.!`, () => { expect(    snakeCase(`listen I'm O.K.!`)).toEqual(`listen_im_ok`) }) // prettier-ignore
test(`constantCase listen I'm O.K.!`, () => { expect( constantCase(`listen I'm O.K.!`)).toEqual(`LISTEN_IM_OK`) }) // prettier-ignore
test(`dotNotation  listen I'm O.K.!`, () => { expect(  dotNotation(`listen I'm O.K.!`)).toEqual(`listen.Im.OK`) }) // prettier-ignore
test(`adaCase      listen I'm O.K.!`, () => { expect(      adaCase(`listen I'm O.K.!`)).toEqual(`Listen_Im_Ok`) }) // prettier-ignore
test(`cobolCase    listen I'm O.K.!`, () => { expect(    cobolCase(`listen I'm O.K.!`)).toEqual(`LISTEN-IM-OK`) }) // prettier-ignore
test(`trainCase    listen I'm O.K.!`, () => { expect(    trainCase(`listen I'm O.K.!`)).toEqual(`Listen-Im-Ok`) }) // prettier-ignore
test(`spaceCase    listen I'm O.K.!`, () => { expect(    spaceCase(`listen I'm O.K.!`)).toEqual(`listen I'm O.K.!`) }) // prettier-ignore
test(`pathCase     listen I'm O.K.!`, () => { expect(     pathCase(`listen I'm O.K.!`)).toEqual(`listen/I'm/O.K.!`) }) // prettier-ignore
test(`lowerCase    listen I'm O.K.!`, () => { expect(    lowerCase(`listen I'm O.K.!`)).toEqual(`listen i'm o.k.!`) }) // prettier-ignore
test(`upperCase    listen I'm O.K.!`, () => { expect(    upperCase(`listen I'm O.K.!`)).toEqual(`LISTEN I'M O.K.!`) }) // prettier-ignore
test(`capitalCase  listen I'm O.K.!`, () => { expect(  capitalCase(`listen I'm O.K.!`)).toEqual(`Listen I'm O.k.!`) }) // prettier-ignore

// double spacing
test(`camelCase    Double  Rainbow`, () => { expect(    camelCase('Double  Rainbow')).toEqual(`doubleRainbow`) }) // prettier-ignore
test(`pascalCase   Double  Rainbow`, () => { expect(   pascalCase('Double  Rainbow')).toEqual(`DoubleRainbow`) }) // prettier-ignore
test(`kebabCase    Double  Rainbow`, () => { expect(    kebabCase('Double  Rainbow')).toEqual(`double-rainbow`) }) // prettier-ignore
test(`snakeCase    Double  Rainbow`, () => { expect(    snakeCase('Double  Rainbow')).toEqual(`double_rainbow`) }) // prettier-ignore
test(`constantCase Double  Rainbow`, () => { expect( constantCase('Double  Rainbow')).toEqual(`DOUBLE_RAINBOW`) }) // prettier-ignore
test(`dotNotation  Double  Rainbow`, () => { expect(  dotNotation('Double  Rainbow')).toEqual(`Double.Rainbow`) }) // prettier-ignore
test(`adaCase      Double  Rainbow`, () => { expect(      adaCase('Double  Rainbow')).toEqual(`Double_Rainbow`) }) // prettier-ignore
test(`cobolCase    Double  Rainbow`, () => { expect(    cobolCase('Double  Rainbow')).toEqual(`DOUBLE-RAINBOW`) }) // prettier-ignore
test(`trainCase    Double  Rainbow`, () => { expect(    trainCase('Double  Rainbow')).toEqual(`Double-Rainbow`) }) // prettier-ignore
test(`spaceCase    Double  Rainbow`, () => { expect(    spaceCase('Double  Rainbow')).toEqual(`Double Rainbow`) }) // prettier-ignore
test(`pathCase     Double  Rainbow`, () => { expect(     pathCase('Double  Rainbow')).toEqual(`Double/Rainbow`) }) // prettier-ignore
test(`lowerCase    Double  Rainbow`, () => { expect(    lowerCase('Double  Rainbow')).toEqual(`double rainbow`) }) // prettier-ignore
test(`upperCase    Double  Rainbow`, () => { expect(    upperCase('Double  Rainbow')).toEqual(`DOUBLE RAINBOW`) }) // prettier-ignore
test(`capitalCase  Double  Rainbow`, () => { expect(  capitalCase('Double  Rainbow')).toEqual(`Double Rainbow`) }) // prettier-ignore

const n = (str: string) => str.normalize()

// special characters with Canonical Composition:
const specialCharsNFCSpaces = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFC')

test(`camelCase    specialChars NFC (spaces)`, () => { expect(n(    camelCase(specialCharsNFCSpaces))).toEqual(n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`pascalCase   specialChars NFC (spaces)`, () => { expect(n(   pascalCase(specialCharsNFCSpaces))).toEqual(n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`kebabCase    specialChars NFC (spaces)`, () => { expect(n(    kebabCase(specialCharsNFCSpaces))).toEqual(n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test(`snakeCase    specialChars NFC (spaces)`, () => { expect(n(    snakeCase(specialCharsNFCSpaces))).toEqual(n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test(`constantCase specialChars NFC (spaces)`, () => { expect(n( constantCase(specialCharsNFCSpaces))).toEqual(n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test(`dotNotation  specialChars NFC (spaces)`, () => { expect(n(  dotNotation(specialCharsNFCSpaces))).toEqual(n(`Agard.i.garcons.Cafe.chateau.voila.noel.ete.laieul.Agard.AOØß.aoøy`)) }) // prettier-ignore
test(`adaCase      specialChars NFC (spaces)`, () => { expect(n(      adaCase(specialCharsNFCSpaces))).toEqual(n(`Agard_I_Garcons_Cafe_Chateau_Voila_Noel_Ete_Laieul_Agard_Aoøß_Aoøy`)) }) // prettier-ignore
test(`cobolCase    specialChars NFC (spaces)`, () => { expect(n(    cobolCase(specialCharsNFCSpaces))).toEqual(n(`AGARD-I-GARCONS-CAFE-CHATEAU-VOILA-NOEL-ETE-LAIEUL-AGARD-AOØSS-AOØY`)) }) // prettier-ignore
test(`trainCase    specialChars NFC (spaces)`, () => { expect(n(    trainCase(specialCharsNFCSpaces))).toEqual(n(`Agard-I-Garcons-Cafe-Chateau-Voila-Noel-Ete-Laieul-Agard-Aoøß-Aoøy`)) }) // prettier-ignore
test(`spaceCase    specialChars NFC (spaces)`, () => { expect(n(    spaceCase(specialCharsNFCSpaces))).toEqual(n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test(`pathCase     specialChars NFC (spaces)`, () => { expect(n(     pathCase(specialCharsNFCSpaces))).toEqual(n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test(`lowerCase    specialChars NFC (spaces)`, () => { expect(n(    lowerCase(specialCharsNFCSpaces))).toEqual(n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test(`upperCase    specialChars NFC (spaces)`, () => { expect(n(    upperCase(specialCharsNFCSpaces))).toEqual(n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test(`capitalCase  specialChars NFC (spaces)`, () => { expect(n(  capitalCase(specialCharsNFCSpaces))).toEqual(n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition:
const specialCharsNFDSpaces = `Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`.normalize('NFD')

test(`camelCase    specialChars NFD (spaces)`, () => { expect(n(    camelCase(specialCharsNFDSpaces))).toEqual(n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`pascalCase   specialChars NFD (spaces)`, () => { expect(n(   pascalCase(specialCharsNFDSpaces))).toEqual(n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`kebabCase    specialChars NFD (spaces)`, () => { expect(n(    kebabCase(specialCharsNFDSpaces))).toEqual(n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test(`snakeCase    specialChars NFD (spaces)`, () => { expect(n(    snakeCase(specialCharsNFDSpaces))).toEqual(n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test(`constantCase specialChars NFD (spaces)`, () => { expect(n( constantCase(specialCharsNFDSpaces))).toEqual(n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test(`dotNotation  specialChars NFD (spaces)`, () => { expect(n(  dotNotation(specialCharsNFDSpaces))).toEqual(n(`Agard.i.garcons.Cafe.chateau.voila.noel.ete.laieul.Agard.AOØß.aoøy`)) }) // prettier-ignore
test(`adaCase      specialChars NFD (spaces)`, () => { expect(n(      adaCase(specialCharsNFDSpaces))).toEqual(n(`Agard_I_Garcons_Cafe_Chateau_Voila_Noel_Ete_Laieul_Agard_Aoøß_Aoøy`)) }) // prettier-ignore
test(`cobolCase    specialChars NFD (spaces)`, () => { expect(n(    cobolCase(specialCharsNFDSpaces))).toEqual(n(`AGARD-I-GARCONS-CAFE-CHATEAU-VOILA-NOEL-ETE-LAIEUL-AGARD-AOØSS-AOØY`)) }) // prettier-ignore
test(`trainCase    specialChars NFD (spaces)`, () => { expect(n(    trainCase(specialCharsNFDSpaces))).toEqual(n(`Agard-I-Garcons-Cafe-Chateau-Voila-Noel-Ete-Laieul-Agard-Aoøß-Aoøy`)) }) // prettier-ignore
test(`spaceCase    specialChars NFD (spaces)`, () => { expect(n(    spaceCase(specialCharsNFDSpaces))).toEqual(n(`Ågård î garçons Çafé château voilà ñoël été l'aïeul Ågård ÀÖØß àöøÿ`)) }) // prettier-ignore
test(`pathCase     specialChars NFD (spaces)`, () => { expect(n(     pathCase(specialCharsNFDSpaces))).toEqual(n(`Ågård/î/garçons/Çafé/château/voilà/ñoël/été/l'aïeul/Ågård/ÀÖØß/àöøÿ`)) }) // prettier-ignore
test(`lowerCase    specialChars NFD (spaces)`, () => { expect(n(    lowerCase(specialCharsNFDSpaces))).toEqual(n(`ågård î garçons çafé château voilà ñoël été l'aïeul ågård àöøß àöøÿ`)) }) // prettier-ignore
test(`upperCase    specialChars NFD (spaces)`, () => { expect(n(    upperCase(specialCharsNFDSpaces))).toEqual(n(`ÅGÅRD Î GARÇONS ÇAFÉ CHÂTEAU VOILÀ ÑOËL ÉTÉ L'AÏEUL ÅGÅRD ÀÖØSS ÀÖØŸ`)) }) // prettier-ignore
test(`capitalCase  specialChars NFD (spaces)`, () => { expect(n(  capitalCase(specialCharsNFDSpaces))).toEqual(n(`Ågård Î Garçons Çafé Château Voilà Ñoël Été L'aïeul Ågård Àöøß Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Composition without spaces:
const specialCharsNFC = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFC')
test(`camelCase    specialChars NFC`, () => { expect(n(    camelCase(specialCharsNFC))).toEqual(n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`pascalCase   specialChars NFC`, () => { expect(n(   pascalCase(specialCharsNFC))).toEqual(n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`kebabCase    specialChars NFC`, () => { expect(n(    kebabCase(specialCharsNFC))).toEqual(n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test(`snakeCase    specialChars NFC`, () => { expect(n(    snakeCase(specialCharsNFC))).toEqual(n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test(`constantCase specialChars NFC`, () => { expect(n( constantCase(specialCharsNFC))).toEqual(n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test(`dotNotation  specialChars NFC`, () => { expect(n(  dotNotation(specialCharsNFC))).toEqual(n(`Agard.i.garcons.Cafe.chateau.voila.noel.ete.laieul.Agard.AOØß.aoøy`)) }) // prettier-ignore
test(`adaCase      specialChars NFC`, () => { expect(n(      adaCase(specialCharsNFC))).toEqual(n(`Agard_I_Garcons_Cafe_Chateau_Voila_Noel_Ete_Laieul_Agard_Aoøß_Aoøy`)) }) // prettier-ignore
test(`cobolCase    specialChars NFC`, () => { expect(n(    cobolCase(specialCharsNFC))).toEqual(n(`AGARD-I-GARCONS-CAFE-CHATEAU-VOILA-NOEL-ETE-LAIEUL-AGARD-AOØSS-AOØY`)) }) // prettier-ignore
test(`trainCase    specialChars NFC`, () => { expect(n(    trainCase(specialCharsNFC))).toEqual(n(`Agard-I-Garcons-Cafe-Chateau-Voila-Noel-Ete-Laieul-Agard-Aoøß-Aoøy`)) }) // prettier-ignore
test(`spaceCase    specialChars NFC`, () => { expect(n(    spaceCase(specialCharsNFC))).toEqual(n(`Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`)) }) // prettier-ignore
test(`pathCase     specialChars NFC`, () => { expect(n(     pathCase(specialCharsNFC))).toEqual(n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test(`lowerCase    specialChars NFC`, () => { expect(n(    lowerCase(specialCharsNFC))).toEqual(n(`ågård_î_garçons_çafé_château_voilà_ñoël_été_laïeul_ågård_àöøß_àöøÿ`)) }) // prettier-ignore
test(`upperCase    specialChars NFC`, () => { expect(n(    upperCase(specialCharsNFC))).toEqual(n(`ÅGÅRD_Î_GARÇONS_ÇAFÉ_CHÂTEAU_VOILÀ_ÑOËL_ÉTÉ_LAÏEUL_ÅGÅRD_ÀÖØSS_ÀÖØŸ`)) }) // prettier-ignore
test(`capitalCase  specialChars NFC`, () => { expect(n(  capitalCase(specialCharsNFC))).toEqual(n(`Ågård_Î_Garçons_Çafé_Château_Voilà_Ñoël_Été_Laïeul_Ågård_Àöøß_Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces:
const specialCharsNFD = `Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`.normalize('NFD')

test(`camelCase    specialChars NFD`, () => { expect(n(    camelCase(specialCharsNFD))).toEqual(n(`agardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`pascalCase   specialChars NFD`, () => { expect(n(   pascalCase(specialCharsNFD))).toEqual(n(`AgardIGarconsCafeChateauVoilaNoelEteLaieulAgardAoøßAoøy`)) }) // prettier-ignore
test(`kebabCase    specialChars NFD`, () => { expect(n(    kebabCase(specialCharsNFD))).toEqual(n(`agard-i-garcons-cafe-chateau-voila-noel-ete-laieul-agard-aoøß-aoøy`)) }) // prettier-ignore
test(`snakeCase    specialChars NFD`, () => { expect(n(    snakeCase(specialCharsNFD))).toEqual(n(`agard_i_garcons_cafe_chateau_voila_noel_ete_laieul_agard_aoøß_aoøy`)) }) // prettier-ignore
test(`constantCase specialChars NFD`, () => { expect(n( constantCase(specialCharsNFD))).toEqual(n(`AGARD_I_GARCONS_CAFE_CHATEAU_VOILA_NOEL_ETE_LAIEUL_AGARD_AOØSS_AOØY`)) }) // prettier-ignore
test(`dotNotation  specialChars NFD`, () => { expect(n(  dotNotation(specialCharsNFD))).toEqual(n(`Agard.i.garcons.Cafe.chateau.voila.noel.ete.laieul.Agard.AOØß.aoøy`)) }) // prettier-ignore
test(`adaCase      specialChars NFD`, () => { expect(n(      adaCase(specialCharsNFD))).toEqual(n(`Agard_I_Garcons_Cafe_Chateau_Voila_Noel_Ete_Laieul_Agard_Aoøß_Aoøy`)) }) // prettier-ignore
test(`cobolCase    specialChars NFD`, () => { expect(n(    cobolCase(specialCharsNFD))).toEqual(n(`AGARD-I-GARCONS-CAFE-CHATEAU-VOILA-NOEL-ETE-LAIEUL-AGARD-AOØSS-AOØY`)) }) // prettier-ignore
test(`trainCase    specialChars NFD`, () => { expect(n(    trainCase(specialCharsNFD))).toEqual(n(`Agard-I-Garcons-Cafe-Chateau-Voila-Noel-Ete-Laieul-Agard-Aoøß-Aoøy`)) }) // prettier-ignore
test(`spaceCase    specialChars NFD`, () => { expect(n(    spaceCase(specialCharsNFD))).toEqual(n(`Ågård_î_garçons_Çafé_château_voilà_ñoël_été_laïeul_Ågård_ÀÖØß_àöøÿ`)) }) // prettier-ignore
test(`pathCase     specialChars NFD`, () => { expect(n(     pathCase(specialCharsNFD))).toEqual(n(`Ågård/_î/_garçons/_Çafé/_château/_voilà/_ñoël/_été/_laïeul/_Ågård/_ÀÖØß/_àöøÿ`)) }) // prettier-ignore
test(`lowerCase    specialChars NFD`, () => { expect(n(    lowerCase(specialCharsNFD))).toEqual(n(`ågård_î_garçons_çafé_château_voilà_ñoël_été_laïeul_ågård_àöøß_àöøÿ`)) }) // prettier-ignore
test(`upperCase    specialChars NFD`, () => { expect(n(    upperCase(specialCharsNFD))).toEqual(n(`ÅGÅRD_Î_GARÇONS_ÇAFÉ_CHÂTEAU_VOILÀ_ÑOËL_ÉTÉ_LAÏEUL_ÅGÅRD_ÀÖØSS_ÀÖØŸ`)) }) // prettier-ignore
test(`capitalCase  specialChars NFD`, () => { expect(n(  capitalCase(specialCharsNFD))).toEqual(n(`Ågård_Î_Garçons_Çafé_Château_Voilà_Ñoël_Été_Laïeul_Ågård_Àöøß_Àöøÿ`)) }) // prettier-ignore

// special characters with Canonical Composition without spaces - short example:
test(`camelCase    specialChars NFC (short)`, () => { expect(n(    camelCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`cafeAgard`)) }) // prettier-ignore
test(`pascalCase   specialChars NFC (short)`, () => { expect(n(   pascalCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`CafeAgard`)) }) // prettier-ignore
test(`kebabCase    specialChars NFC (short)`, () => { expect(n(    kebabCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`cafe-agard`)) }) // prettier-ignore
test(`snakeCase    specialChars NFC (short)`, () => { expect(n(    snakeCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`cafe_agard`)) }) // prettier-ignore
test(`constantCase specialChars NFC (short)`, () => { expect(n( constantCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`CAFE_AGARD`)) }) // prettier-ignore
test(`dotNotation  specialChars NFC (short)`, () => { expect(n(  dotNotation(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Cafe.Agard`)) }) // prettier-ignore
test(`adaCase      specialChars NFC (short)`, () => { expect(n(      adaCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Cafe_Agard`)) }) // prettier-ignore
test(`cobolCase    specialChars NFC (short)`, () => { expect(n(    cobolCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`CAFE-AGARD`)) }) // prettier-ignore
test(`trainCase    specialChars NFC (short)`, () => { expect(n(    trainCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Cafe-Agard`)) }) // prettier-ignore
test(`spaceCase    specialChars NFC (short)`, () => { expect(n(    spaceCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Çafé Ågård`)) }) // prettier-ignore
test(`pathCase     specialChars NFC (short)`, () => { expect(n(     pathCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Çafé/Ågård`)) }) // prettier-ignore
test(`lowerCase    specialChars NFC (short)`, () => { expect(n(    lowerCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`çafé ågård`)) }) // prettier-ignore
test(`upperCase    specialChars NFC (short)`, () => { expect(n(    upperCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test(`capitalCase  specialChars NFC (short)`, () => { expect(n(  capitalCase(`ÇaféÅgård`.normalize('NFC')))).toEqual(n(`Çafé Ågård`)) }) // prettier-ignore

// special characters with Canonical Decomposition without spaces - short example:
test(`camelCase    specialChars NFD (short)`, () => { expect(n(    camelCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`cafeAgard`)) }) // prettier-ignore
test(`pascalCase   specialChars NFD (short)`, () => { expect(n(   pascalCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`CafeAgard`)) }) // prettier-ignore
test(`kebabCase    specialChars NFD (short)`, () => { expect(n(    kebabCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`cafe-agard`)) }) // prettier-ignore
test(`snakeCase    specialChars NFD (short)`, () => { expect(n(    snakeCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`cafe_agard`)) }) // prettier-ignore
test(`constantCase specialChars NFD (short)`, () => { expect(n( constantCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`CAFE_AGARD`)) }) // prettier-ignore
test(`dotNotation  specialChars NFD (short)`, () => { expect(n(  dotNotation(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Cafe.Agard`)) }) // prettier-ignore
test(`adaCase      specialChars NFD (short)`, () => { expect(n(      adaCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Cafe_Agard`)) }) // prettier-ignore
test(`cobolCase    specialChars NFD (short)`, () => { expect(n(    cobolCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`CAFE-AGARD`)) }) // prettier-ignore
test(`trainCase    specialChars NFD (short)`, () => { expect(n(    trainCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Cafe-Agard`)) }) // prettier-ignore
test(`spaceCase    specialChars NFD (short)`, () => { expect(n(    spaceCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Çafé Ågård`)) }) // prettier-ignore
test(`pathCase     specialChars NFD (short)`, () => { expect(n(     pathCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Çafé/Ågård`)) }) // prettier-ignore
test(`lowerCase    specialChars NFD (short)`, () => { expect(n(    lowerCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`çafé ågård`)) }) // prettier-ignore
test(`upperCase    specialChars NFD (short)`, () => { expect(n(    upperCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`ÇAFÉ ÅGÅRD`)) }) // prettier-ignore
test(`capitalCase  specialChars NFD (short)`, () => { expect(n(  capitalCase(`ÇaféÅgård`.normalize('NFD')))).toEqual(n(`Çafé Ågård`)) }) // prettier-ignore

// No spaces involved
test(`camelCase    remove special characters`, () => { expect(    camelCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueebBluesJazzGithubCom`) }) // prettier-ignore
test(`camelCase    keep   special characters`, () => { expect(    camelCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.bluesJazz@github.com`) }) // prettier-ignore
test(`pascalCase   remove special characters`, () => { expect(   pascalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`MesqueebBluesJazzGithubCom`) }) // prettier-ignore
test(`pascalCase   keep   special characters`, () => { expect(   pascalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$Mesqueeb.BluesJazz@Github.Com`) }) // prettier-ignore
test(`kebabCase    remove special characters`, () => { expect(    kebabCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueeb-blues-jazz-github-com`) }) // prettier-ignore
test(`kebabCase    keep   special characters`, () => { expect(    kebabCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.blues-jazz@github.com`) }) // prettier-ignore
test(`snakeCase    remove special characters`, () => { expect(    snakeCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueeb_blues_jazz_github_com`) }) // prettier-ignore
test(`snakeCase    keep   special characters`, () => { expect(    snakeCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.blues_jazz@github.com`) }) // prettier-ignore
test(`constantCase remove special characters`, () => { expect( constantCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB_BLUES_JAZZ_GITHUB_COM`) }) // prettier-ignore
test(`constantCase keep   special characters`, () => { expect( constantCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB.BLUES_JAZZ@GITHUB.COM`) }) // prettier-ignore

test(`spaceCase   remove special characters`, () => { expect(   spaceCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueeb Blues Jazz github com`) }) // prettier-ignore
test(`spaceCase   keep   special characters`, () => { expect(   spaceCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.Blues Jazz@github.com`) }) // prettier-ignore
test(`pathCase    remove special characters`, () => { expect(    pathCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueeb/Blues/Jazz/github/com`) }) // prettier-ignore
test(`pathCase    keep   special characters`, () => { expect(    pathCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb/.Blues/Jazz/@github/.com`) }) // prettier-ignore
test(`lowerCase   remove special characters`, () => { expect(   lowerCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`mesqueeb blues jazz github com`) }) // prettier-ignore
test(`lowerCase   keep   special characters`, () => { expect(   lowerCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.blues jazz@github.com`) }) // prettier-ignore
test(`upperCase   remove special characters`, () => { expect(   upperCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB BLUES JAZZ GITHUB COM`) }) // prettier-ignore
test(`upperCase   keep   special characters`, () => { expect(   upperCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB.BLUES JAZZ@GITHUB.COM`) }) // prettier-ignore
test(`capitalCase remove special characters`, () => { expect( capitalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })).toEqual(`Mesqueeb Blues Jazz Github Com`) }) // prettier-ignore
test(`capitalCase keep   special characters`, () => { expect( capitalCase(`$mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true  })).toEqual(`$Mesqueeb.Blues Jazz@Github.Com`) }) // prettier-ignore

// Spaces involved
test(`camelCase    remove special characters (spaces)`, () => { expect(    camelCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueebBluesjazzGithubPower`) }) // prettier-ignore
test(`camelCase    keep   special characters (spaces)`, () => { expect(    camelCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb.bluesjazz@github_power`) }) // prettier-ignore
test(`pascalCase   remove special characters (spaces)`, () => { expect(   pascalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`MesqueebBluesjazzGithubPower`) }) // prettier-ignore
test(`pascalCase   keep   special characters (spaces)`, () => { expect(   pascalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$Mesqueeb.Bluesjazz@Github_Power`) }) // prettier-ignore
test(`kebabCase    remove special characters (spaces)`, () => { expect(    kebabCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb-bluesjazz-github-power`) }) // prettier-ignore
test(`kebabCase    keep   special characters (spaces)`, () => { expect(    kebabCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb-.bluesjazz-@github-_power`) }) // prettier-ignore
test(`snakeCase    remove special characters (spaces)`, () => { expect(    snakeCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb_bluesjazz_github_power`) }) // prettier-ignore
test(`snakeCase    keep   special characters (spaces)`, () => { expect(    snakeCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb_.bluesjazz_@github__power`) }) // prettier-ignore
test(`constantCase remove special characters (spaces)`, () => { expect( constantCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB_BLUESJAZZ_GITHUB_POWER`) }) // prettier-ignore
test(`constantCase keep   special characters (spaces)`, () => { expect( constantCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB_.BLUESJAZZ_@GITHUB__POWER`) }) // prettier-ignore

test(`spaceCase   remove special characters (spaces)`, () => { expect(   spaceCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb BluesJazz github POWER`) }) // prettier-ignore
test(`spaceCase   keep   special characters (spaces)`, () => { expect(   spaceCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb .BluesJazz @github _POWER`) }) // prettier-ignore
test(`pathCase    remove special characters (spaces)`, () => { expect(    pathCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb/BluesJazz/github/POWER`) }) // prettier-ignore
test(`pathCase    keep   special characters (spaces)`, () => { expect(    pathCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb/.BluesJazz/@github/_POWER`) }) // prettier-ignore
test(`lowerCase   remove special characters (spaces)`, () => { expect(   lowerCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb bluesjazz github power`) }) // prettier-ignore
test(`lowerCase   keep   special characters (spaces)`, () => { expect(   lowerCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb .bluesjazz @github _power`) }) // prettier-ignore
test(`upperCase   remove special characters (spaces)`, () => { expect(   upperCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB BLUESJAZZ GITHUB POWER`) }) // prettier-ignore
test(`upperCase   keep   special characters (spaces)`, () => { expect(   upperCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB .BLUESJAZZ @GITHUB _POWER`) }) // prettier-ignore
test(`capitalCase remove special characters (spaces)`, () => { expect( capitalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: false })).toEqual(`Mesqueeb Bluesjazz Github Power`) }) // prettier-ignore
test(`capitalCase keep   special characters (spaces)`, () => { expect( capitalCase(`$mesqueeb .BluesJazz @github _POWER`, { keepSpecialCharacters: true  })).toEqual(`$Mesqueeb .Bluesjazz @Github _Power`) }) // prettier-ignore

// Spaces & special characters in different spots
test(`camelCase    remove special various characters (spaces)`, () => { expect(    camelCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueebBluesjazzGithubPower`) }) // prettier-ignore
test(`camelCase    keep   special various characters (spaces)`, () => { expect(    camelCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueebBlues.jazzGit@hubPower`) }) // prettier-ignore
test(`pascalCase   remove special various characters (spaces)`, () => { expect(   pascalCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`MesqueebBluesjazzGithubPower`) }) // prettier-ignore
test(`pascalCase   keep   special various characters (spaces)`, () => { expect(   pascalCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$MesqueebBlues.jazzGit@hubPower`) }) // prettier-ignore
test(`kebabCase    remove special various characters (spaces)`, () => { expect(    kebabCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb-bluesjazz-github-power`) }) // prettier-ignore
test(`kebabCase    keep   special various characters (spaces)`, () => { expect(    kebabCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb-blues.jazz-git@hub-power`) }) // prettier-ignore
test(`snakeCase    remove special various characters (spaces)`, () => { expect(    snakeCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb_bluesjazz_github_power`) }) // prettier-ignore
test(`snakeCase    keep   special various characters (spaces)`, () => { expect(    snakeCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb_blues.jazz_git@hub_power`) }) // prettier-ignore
test(`constantCase remove special various characters (spaces)`, () => { expect( constantCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB_BLUESJAZZ_GITHUB_POWER`) }) // prettier-ignore
test(`constantCase keep   special various characters (spaces)`, () => { expect( constantCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB_BLUES.JAZZ_GIT@HUB_POWER`) }) // prettier-ignore

test(`spaceCase   remove special various characters (spaces)`, () => { expect(   spaceCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb BluesJazz github POWER`) }) // prettier-ignore
test(`spaceCase   keep   special various characters (spaces)`, () => { expect(   spaceCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb Blues.Jazz git@hub POWER`) }) // prettier-ignore
test(`pathCase    remove special various characters (spaces)`, () => { expect(    pathCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb/BluesJazz/github/POWER`) }) // prettier-ignore
test(`pathCase    keep   special various characters (spaces)`, () => { expect(    pathCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb/Blues.Jazz/git@hub/POWER`) }) // prettier-ignore
test(`lowerCase   remove special various characters (spaces)`, () => { expect(   lowerCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`mesqueeb bluesjazz github power`) }) // prettier-ignore
test(`lowerCase   keep   special various characters (spaces)`, () => { expect(   lowerCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$mesqueeb blues.jazz git@hub power`) }) // prettier-ignore
test(`upperCase   remove special various characters (spaces)`, () => { expect(   upperCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`MESQUEEB BLUESJAZZ GITHUB POWER`) }) // prettier-ignore
test(`upperCase   keep   special various characters (spaces)`, () => { expect(   upperCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$MESQUEEB BLUES.JAZZ GIT@HUB POWER`) }) // prettier-ignore
test(`capitalCase remove special various characters (spaces)`, () => { expect( capitalCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: false })).toEqual(`Mesqueeb Bluesjazz Github Power`) }) // prettier-ignore
test(`capitalCase keep   special various characters (spaces)`, () => { expect( capitalCase(`$mesqueeb Blues.Jazz git@hub POWER`, { keepSpecialCharacters: true  })).toEqual(`$Mesqueeb Blues.jazz Git@hub Power`) }) // prettier-ignore

// DON'T strip special characters -- query without spaces
test(`camelCase(query) - dont strip`, () =>
  expect(camelCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$orderBy=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                                 )) // prettier-ignore
test(`pascalCase(query) - dont strip`, () =>
  expect(pascalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$OrderBy=Name&Skip=3&Sort=True&Name=James-P&Email=Sullivan@Monsters.Inc'                                  )) // prettier-ignore
test(`kebabCase(query) - dont strip`, () =>
  expect(kebabCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$order-by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                                )) // prettier-ignore
test(`snakeCase(query) - dont strip`, () =>
  expect(snakeCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$order_by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                                )) // prettier-ignore
test(`constantCase(query) - dont strip`, () =>
  expect(constantCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$ORDER_BY=NAME&SKIP=3&SORT=TRUE&NAME=JAMES-P&EMAIL=SULLIVAN@MONSTERS.INC'                                   )) // prettier-ignore
test(`spaceCase(query) - dont strip`, () =>
  expect(spaceCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$order By=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc'                                )) // prettier-ignore
test(`pathCase(query) - dont strip`, () =>
  expect(pathCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$order/By/=name/&skip/=3/&sort/=true/&name/=James/-P/&email/=sullivan/@monsters/.inc'                   )) // prettier-ignore
test(`lowerCase(query) - dont strip`, () =>
  expect(lowerCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$order by=name&skip=3&sort=true&name=james-p&email=sullivan@monsters.inc'                                )) // prettier-ignore
test(`upperCase(query) - dont strip`, () =>
  expect(upperCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$ORDER BY=NAME&SKIP=3&SORT=TRUE&NAME=JAMES-P&EMAIL=SULLIVAN@MONSTERS.INC'                                )) // prettier-ignore
test(`capitalCase(query) - dont strip`, () =>
  expect(capitalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: true })) // prettier-ignore
          .toEqual('$Order By=Name&Skip=3&Sort=True&Name=James-P&Email=Sullivan@Monsters.Inc'                                  )) // prettier-ignore

// strip special characters -- query without spaces
test(`camelCase(query) - strip`, () =>
  expect(camelCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('orderByNameSkip3SortTrueNameJamesPEmailSullivanMonstersInc'                                               )) // prettier-ignore
test(`pascalCase(query) - strip`, () =>
  expect(pascalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('OrderByNameSkip3SortTrueNameJamesPEmailSullivanMonstersInc'                                                )) // prettier-ignore
test(`kebabCase(query) - strip`, () =>
  expect(kebabCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('order-by-name-skip-3-sort-true-name-james-p-email-sullivan-monsters-inc'                                  )) // prettier-ignore
test(`snakeCase(query) - strip`, () =>
  expect(snakeCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('order_by_name_skip_3_sort_true_name_james_p_email_sullivan_monsters_inc'                                  )) // prettier-ignore
test(`constantCase(query) - strip`, () =>
  expect(constantCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('ORDER_BY_NAME_SKIP_3_SORT_TRUE_NAME_JAMES_P_EMAIL_SULLIVAN_MONSTERS_INC'                                     )) // prettier-ignore
test(`spaceCase(query) - strip`, () =>
  expect(spaceCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('order By name skip 3 sort true name James P email sullivan monsters inc'                                  )) // prettier-ignore
test(`pathCase(query) - strip`, () =>
  expect(pathCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('order/By/name/skip/3/sort/true/name/James/P/email/sullivan/monsters/inc'                                 )) // prettier-ignore
test(`lowerCase(query) - strip`, () =>
  expect(lowerCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('order by name skip 3 sort true name james p email sullivan monsters inc'                                  )) // prettier-ignore
test(`upperCase(query) - strip`, () =>
  expect(upperCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('ORDER BY NAME SKIP 3 SORT TRUE NAME JAMES P EMAIL SULLIVAN MONSTERS INC'                                  )) // prettier-ignore
test(`capitalCase(query) - strip`, () =>
  expect(capitalCase(`$orderBy=name&skip=3&sort=true&name=James-P&email=sullivan@monsters.inc`, { keepSpecialCharacters: false })) // prettier-ignore
          .toEqual('Order By Name Skip 3 Sort True Name James P Email Sullivan Monsters Inc'                                    )) // prettier-ignore
