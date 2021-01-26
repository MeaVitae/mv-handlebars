'use strict'

export default ({ phoneNumbers }, options) => {
  if (!phoneNumbers) {
    throw new Error('Template Error: Phone Number Helper - The required phone number object array has not been provided')
  }
  return (phoneNumbers.find(({ isPref }) => isPref) || phoneNumbers[0])?.value || null
}
