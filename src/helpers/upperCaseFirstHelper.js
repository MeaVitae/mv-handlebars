'use strict'

import { upperCaseFirst } from 'upper-case-first'

export default function (options) {
  return upperCaseFirst(options.fn(this))
}
