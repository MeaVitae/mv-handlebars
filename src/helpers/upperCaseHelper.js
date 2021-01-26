'use strict'

import { upperCase } from 'upper-case'

export default function (options) {
  return upperCase(options.fn(this))
}
