'use strict'

export default ({ addresses }, options) => {
  if (!addresses) {
    throw new Error('Template Error: Address Helper - The required addresses object array has not been provided')
  }

  return (addresses.find(({ isPref }) => isPref) || addresses[0])
    ?.placeResult
    ?.formatted_address || null
}
