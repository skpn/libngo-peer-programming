import { readable } from 'svelte/store'
import { broswerLang, traductions } from './i18n.js'

export const trad = readable(null, function start (set) {
  set(traductions[broswerLang])
  return function stop () {}
})

export const tradForcerEN = readable(null, function start (set) {
    set(traductions['en'])
    return function stop () {}
  })

export const tradForcerFR = readable(null, function start (set) {
    set(traductions['fr'])
    return function stop () {}
  })

export const tradForcerDE = readable(null, function start (set) {
    set(traductions['de'])
    return function stop () {}
  })

export const tradForcerIT = readable(null, function start (set) {
    set(traductions['it'])
    return function stop () {}
  })

