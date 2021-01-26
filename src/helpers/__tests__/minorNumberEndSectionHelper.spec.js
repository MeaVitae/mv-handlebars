'use strict'

import minorNumberEndSectionHelper from '../minorNumberEndSectionHelper'

const mockTitleNumber = [1, 2, 5]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)

describe('minorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = minorNumberEndSectionHelper({ getTitleNumber })()

      expect(returnValue)
        .toEqual('----- END OF SECTION 1.2 -----')
    })
  })
})
