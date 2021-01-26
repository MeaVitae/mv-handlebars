'use strict'

import { titleCase } from 'title-case'

export default function (options) {
  return titleCase(options.fn(this))
}
