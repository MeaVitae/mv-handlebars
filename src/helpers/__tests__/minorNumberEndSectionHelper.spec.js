'use strict'

import minorNumberEndSectionHelper from '../minorNumberEndSectionHelper'

const mockCurrentClause = [1, 2, 5]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)

describe('minorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = minorNumberEndSectionHelper({ getCurrentClause })()

      expect(returnValue)
        .toEqual('----- END OF CLAUSE 1.2 -----')
    })
  })
})
