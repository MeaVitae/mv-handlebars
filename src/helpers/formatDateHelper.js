'use strict'

import { format } from 'date-fns'

export default (date, options) => {
  if (!options) {
    throw new Error('Template Error: Format Date Helper - The required date string parameter has not been provided')
  }

  return format(new Date(date), "do 'day of' MMMM, yyyy")
}
