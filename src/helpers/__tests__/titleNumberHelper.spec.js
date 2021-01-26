'use strict'

import titleNumberHelper from '../titleNumberHelper'

describe('titleNumberHelper', () => {
  describe('the return value', () => {
    test('it returns the passed in string wrapped in <u> tags', () => {
      const mockTitleNumber = 'abc'
      const mockGetTitleNumberFunction = () => mockTitleNumber
      const returnValue = titleNumberHelper(mockGetTitleNumberFunction)()

      expect(returnValue).toEqual(mockTitleNumber)
    })
  })
})
