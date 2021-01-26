'use strict'

import operatorFunctionLookup from '../utils/operatorFunctionLookup'

export default function (a, operator, b, options) {
  if (!options) {
    throw new Error('Template Error: Compare Helper - The 3 required parameters have not been provided')
  }

  if (!operatorFunctionLookup[operator]) {
    throw new Error(`Template Error: Compare Helper - Unknown operator: ${operator}`)
  }

  return operatorFunctionLookup[operator](a, b)
    ? options.fn(this)
    : options.inverse(this)
}
