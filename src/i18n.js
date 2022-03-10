import * as fr from './locales/fr.json'
import * as en from './locales/en.json'
import * as de from './locales/de.json'
import * as it from './locales/it.json'

// obtenir la langue du browser
let userLang = navigator.language || navigator.userLanguage
if (userLang.length > 2) {
  userLang = userLang.substring(0, 2).toLowerCase()
}
if (![ 'fr', 'en', 'de', 'it' ].includes(userLang)) {
  userLang = 'en' // langue par défaut
}

export const broswerLang = userLang
export const traductions = { fr, en, de, it }