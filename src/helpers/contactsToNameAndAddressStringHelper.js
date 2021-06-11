'use strict'

import fullNameHelper from './fullNameHelper'
import { titleCase } from 'title-case'

export default (contacts, options) => {
  if (!options) {
    throw new Error('Template Error: Contacts To Name And Address String Helper - The required contact array has not been provided')
  }

  if (!Array.isArray(contacts)) {
    throw new Error('Template Error: Contacts To Name And Address String Helper - First parameter must be an array of contacts')
  }

  return contacts.reduce((accumulator, currentContact, index, sourceArray) => {
    const addresses = currentContact.addresses
    const preferredAddress = addresses.find(({ isPref }) => isPref === true)
    const selectedAddress = titleCase((preferredAddress || addresses[0]).placeResult.formatted_address)
    const delimiter = (index + 1) < sourceArray.length ? ',' : ' and'

    return accumulator
      ? accumulator.concat(`${delimiter} `, `${fullNameHelper(currentContact)} of ${selectedAddress}`)
      : `${fullNameHelper(currentContact)} of ${selectedAddress}`
  }, '')
}
