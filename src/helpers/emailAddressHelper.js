'use strict'

export default ({ emailAddresses }, options) => {
  if (!emailAddresses) {
    throw new Error('Template Error: Email Address Helper - The required email address object array has not been provided')
  }

  return (emailAddresses.find(({ isPref }) => isPref) || emailAddresses[0])?.value || null
}
