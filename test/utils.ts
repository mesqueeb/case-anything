import test from 'ava'
import { splitAndPrefix } from '../src/utils'

test(`splitAndPrefix($var, { keepSpecialCharacters: false })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb..mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),
    ['mesqueeb', 'mesqueebmesqueeb', 'mesqueeb', 'Blues', 'Jazz', 'github', 'com']
  )
})
test(`splitAndPrefix($var, { keepSpecialCharacters: true })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb..mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),
    ['$mesqueeb', '.mesqueebmesqueeb', '..mesqueeb', '.Blues', 'Jazz', '@github', '.com']
  )
})
test(`splitAndPrefix($var, { keepSpecialCharacters: false, prefix: '-' })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, {
      keepSpecialCharacters: false,
      prefix: '-',
    }),
    ['mesqueeb', '-mesqueebmesqueeb', '-mesqueeb', '-Blues', '-Jazz', '-github', '-com']
  )
})
test(`splitAndPrefix(short, { keepSpecialCharacters: false, prefix: '-' })`, (t) => {
  t.deepEqual(splitAndPrefix(`mesqueebMESQUEEB`, { keepSpecialCharacters: true, prefix: '-' }), [
    'mesqueeb',
    '-MESQUEEB',
  ])
})
test(`splitAndPrefix($var, { keepSpecialCharacters: true, prefix: '-' })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, {
      keepSpecialCharacters: true,
      prefix: '-',
    }),
    ['$mesqueeb', '.mesqueebmesqueeb', '.mesqueeb', '.Blues', '-Jazz', '@github', '.com']
  )
})
test(`splitAndPrefix($var multiple special chars, { keepSpecialCharacters: true, prefix: '-' })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$$mesqueeb-/_mesqueebmesqueeb...mesqueeb.BluesJazz@_@github.-com`, {
      keepSpecialCharacters: true,
      prefix: '-',
    }),
    ['$$mesqueeb', '-/_mesqueebmesqueeb', '...mesqueeb', '.Blues', '-Jazz', '@_@github', '.-com']
  )
})
test(`splitAndPrefix($var.slice(1), { keepSpecialCharacters: true })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),
    ['mesqueeb', '.mesqueebmesqueeb', '.mesqueeb', '.Blues', 'Jazz', '@github', '.com']
  )
})
test(`splitAndPrefix(sentence, { keepSpecialCharacters: false })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueeb mesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: false }),
    ['mesqueebmesqueeb', 'mesqueebmesqueebBluesJazzgithubcom']
  )
})
test(`splitAndPrefix(sentence, { keepSpecialCharacters: true })`, (t) => {
  t.deepEqual(
    splitAndPrefix(`$mesqueeb.mesqueeb mesqueeb.mesqueeb.BluesJazz@github.com`, { keepSpecialCharacters: true }),
    ['$mesqueeb.mesqueeb', 'mesqueeb.mesqueeb.BluesJazz@github.com']
  )
})
