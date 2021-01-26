'use strict'

import operatorFunctionLookup from '../utils/operatorFunctionLookup'

export default (objectArray, objectKey, operator, valueToCheckAgainst, options) => {
  if (!options) {
    throw new Error('Template Error: Filter Helper - The 4 required parameters have not been provided')
  }

  if (!Array.isArray(objectArray)) {
    throw new Error('Template Error: Filter Helper - First parameter must be an array of objects')
  }

  if (!operatorFunctionLookup[operator]) {
    throw new Error(`Template Error: Filter Helper - Unknown operator: ${operator}`)
  }

  return objectArray.filter(object =>
    operatorFunctionLookup[operator](object[objectKey], valueToCheckAgainst))
}
