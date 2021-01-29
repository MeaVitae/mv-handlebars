'use strict'

import subMinorNumberEndSectionHelper from '../subMinorNumberEndSectionHelper'

const mockTitleNumber = [1, 2, 5]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)

describe('subMinorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = subMinorNumberEndSectionHelper({ getTitleNumber })()

      expect(returnValue)
        .toEqual('----- END OF CLAUSE 1.2.5 -----')
    })
  })
})
