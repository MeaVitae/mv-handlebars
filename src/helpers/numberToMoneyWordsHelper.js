'use strict'

import numberToWordsHelper from './numberToWordsHelper'
import localeLookupObject from '../utils/localeLookupObject.json'

export default (number, locale, options) => {
  if (typeof number !== 'number') {
    throw new Error('Template Error: Number To Words Helper - The 1st parameter must be a number')
  }

  locale = localeLookupObject[locale] ? locale : 'en-GB'

  const numberAsWords = numberToWordsHelper(number, locale, options)
  const pointIndex = numberAsWords.indexOf('point')
  const currencyUnit = localeLookupObject[locale].currencyUnit[number > 1.99 || number < 1 ? 1 : 0]
  const fractionalUnit = localeLookupObject[locale].fractionalUnit

  return pointIndex > -1
    ? `${numberAsWords.substring(0, pointIndex)}${currencyUnit} ${numberAsWords.substring(pointIndex)} ${fractionalUnit}`
    : `${numberAsWords} ${currencyUnit}`
}
