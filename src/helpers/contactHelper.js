'use strict'

import addressHelper from './addressHelper'
import formatDateHelper from './formatDateHelper'
import emailAddressHelper from './emailAddressHelper'
import fullNameHelper from './fullNameHelper'
import genderHelper from './genderHelper'
import phoneNumberHelper from './phoneNumberHelper'

export default (contact, options) => {
  if (!options || !contact) {
    throw new Error('Template Error: Contact Helper - Contact object has not been provided')
  }

  return options.fn({
    ...contact,
    contactFullName: fullNameHelper({ firstName: contact.firstName, lastName: contact.lastName, middleNames: contact.middleNames }, options),
    contactAddress: addressHelper({ addresses: contact.addresses }, options),
    contactEmailAddress: emailAddressHelper({ emailAddresses: contact.emailAddresses }, options),
    contactPhoneNumber: phoneNumberHelper({ phoneNumbers: contact.phoneNumbers }, options),
    ...contact.dateOfBirth && { contactDateOfBirthString: formatDateHelper({ date: contact.dateOfBirth }, options) },
    ...genderHelper({ genderType: contact.genderType }, options)
  })
}
