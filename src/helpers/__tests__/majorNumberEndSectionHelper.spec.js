'use strict'

import majorNumberEndSectionHelper from '../majorNumberEndSectionHelper'

const mockTitleNumber = [1, 2, 5]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)

describe('majorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = majorNumberEndSectionHelper({ getTitleNumber })()

      expect(returnValue)
        .toEqual('----- END OF CLAUSE 1 -----')
    })
  })
})
