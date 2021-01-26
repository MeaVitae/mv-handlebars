'use strict'

import n2words from 'n2words'
import localeLookupObject from '../utils/localeLookupObject.json'
import { upperCaseFirst } from 'upper-case-first'

export default (number, locale, options) => {
  if (typeof number !== 'number') {
    throw new Error('Template Error: Number To Words Helper - The 1st parameter must be a number')
  }

  return upperCaseFirst(n2words(number, {
    lang: localeLookupObject[locale]?.n2wordsRef
  }))
}
