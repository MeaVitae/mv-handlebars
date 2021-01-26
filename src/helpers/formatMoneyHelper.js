'use strict'

import localeLookupObject from '../utils/localeLookupObject.json'
import { formatMoney } from 'accounting'

export default (number, locale, options) => {
  if (!options) {
    throw new Error('Template Error: Format Money Helper - The 2 required parameters have not been provided')
  }

  if (!localeLookupObject[locale]) {
    throw new Error('Template Error: Format Money Helper - Locale not found')
  }

  return formatMoney(number, localeLookupObject[locale].symbol, 2)
}
