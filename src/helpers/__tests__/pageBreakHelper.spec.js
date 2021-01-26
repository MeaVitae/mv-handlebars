'use strict'

import pageBreakHelper from '../pageBreakHelper'

describe('pageBreakHelper', () => {
  describe('the return value', () => {
    test('it returns the passed in string wrapped in <u> tags', () => {
      const returnValue = pageBreakHelper()

      expect(returnValue)
        .toEqual('<div style="page-break-after: always"></div>')
    })
  })
})
