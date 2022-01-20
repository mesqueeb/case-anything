import { test, expect } from 'vitest'
import { splitAndPrefix } from '../src/utils'

test(`splitAndPrefix($var, { keepSpecialCharacters: false })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb..mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })
  ).toEqual(['mesqueeb', 'mesqueebmesqueeb', 'mesqueeb', 'Blues', 'Jazz', 'github', 'com'])
})
test(`splitAndPrefix($var, { keepSpecialCharacters: true })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb..mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true })
  ).toEqual(['$mesqueeb', '.mesqueebmesqueeb', '..mesqueeb', '.Blues', 'Jazz', '@github', '.com'])
})
test(`splitAndPrefix($var, { keepSpecialCharacters: false, prefix: '-' })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, {
      keepSpecialCharacters: false,
      prefix: '-',
    })
  ).toEqual(['mesqueeb', '-mesqueebmesqueeb', '-mesqueeb', '-Blues', '-Jazz', '-github', '-com'])
})
test(`splitAndPrefix(short, { keepSpecialCharacters: false, prefix: '-' })`, () => {
  expect(splitAndPrefix(`mesqueebMESQUEEB`, { keepSpecialCharacters: true, prefix: '-' })).toEqual([
    'mesqueeb',
    '-MESQUEEB',
  ])
})
test(`splitAndPrefix($var, { keepSpecialCharacters: true, prefix: '-' })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, {
      keepSpecialCharacters: true,
      prefix: '-',
    })
  ).toEqual(['$mesqueeb', '.mesqueebmesqueeb', '.mesqueeb', '.Blues', '-Jazz', '@github', '.com'])
})
test(`splitAndPrefix($var multiple special chars, { keepSpecialCharacters: true, prefix: '-' })`, () => {
  expect(
    splitAndPrefix(`$$mesqueeb-/_mesqueebmesqueeb...mesqueeb.BluesJazz@_@github.-com`, {
      keepSpecialCharacters: true,
      prefix: '-',
    })
  ).toEqual(['$$mesqueeb', '-/_mesqueebmesqueeb', '...mesqueeb', '.Blues', '-Jazz', '@_@github', '.-com'])
})
test(`splitAndPrefix($var.slice(1), { keepSpecialCharacters: true })`, () => {
  expect(
    splitAndPrefix(`mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true })
  ).toEqual(['mesqueeb', '.mesqueebmesqueeb', '.mesqueeb', '.Blues', 'Jazz', '@github', '.com'])
})
test(`splitAndPrefix(sentence, { keepSpecialCharacters: false })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueeb mesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false })
  ).toEqual(['mesqueebmesqueeb', 'mesqueebmesqueebBluesJazzgithubcom'])
})
test(`splitAndPrefix(sentence, { keepSpecialCharacters: true })`, () => {
  expect(
    splitAndPrefix(`$mesqueeb.mesqueeb mesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true })
  ).toEqual(['$mesqueeb.mesqueeb', 'mesqueeb.mesqueeb.BluesJazz@github.com'])
})
