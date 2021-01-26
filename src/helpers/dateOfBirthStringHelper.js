'use strict'

import { format } from 'date-fns'

export default ({ dateOfBirth }, options) => {
  if (!dateOfBirth) {
    throw new Error('Template Error: Date Of Birth String Helper - The required date of birth string parameter has not been provided')
  }

  return format(new Date(dateOfBirth), "do 'day of' MMMM, yyyy")
}
