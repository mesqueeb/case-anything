import test from 'ava'
import { getParts } from '../src/utils'

// keep special characters:
const $var = `$mesqueeb.mesqueebmesqueeb.mesqueeb.BluesJazz@github.com`

test('getParts($var, true)', (t) => {
  t.deepEqual(getParts($var, true), ['mesqueeb', 'mesqueebmesqueeb', 'mesqueeb', 'Blues', 'Jazz', 'github', 'com'])
})
test('getParts($var, false)', (t) => {
  t.deepEqual(getParts($var, false), [
    '$mesqueeb',
    '.mesqueebmesqueeb',
    '.mesqueeb',
    '.Blues',
    'Jazz',
    '@github',
    '.com',
  ])
})
test('getParts($var.slice(1), false)', (t) => {
  t.deepEqual(getParts($var.slice(1), false), [
    'mesqueeb',
    '.mesqueebmesqueeb',
    '.mesqueeb',
    '.Blues',
    'Jazz',
    '@github',
    '.com',
  ])
})

const sentence = `$mesqueeb.mesqueeb mesqueeb.mesqueeb.BluesJazz@github.com`

test('getParts(sentence, true)', (t) => {
  t.deepEqual(getParts(sentence, true), ['mesqueebmesqueeb', 'mesqueebmesqueebBluesJazzgithubcom'])
})
test('getParts(sentence, false)', (t) => {
  t.deepEqual(getParts(sentence, false), ['$mesqueeb.mesqueeb', 'mesqueeb.mesqueeb.BluesJazz@github.com'])
})
