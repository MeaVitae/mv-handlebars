'use strict'

import { lowerCase } from 'lower-case'

export default function (options) {
  return lowerCase(options.fn(this))
}
