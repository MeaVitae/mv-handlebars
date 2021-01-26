'use strict'

export default function (options) {
  return `<u>${options.fn(this)}</u>`
}
