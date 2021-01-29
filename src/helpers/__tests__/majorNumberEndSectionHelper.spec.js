'use strict'

import majorNumberEndSectionHelper from '../majorNumberEndSectionHelper'

const mockCurrentClause = [1, 2, 5]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)

describe('majorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = majorNumberEndSectionHelper({ getCurrentClause })()

      expect(returnValue)
        .toEqual('----- END OF CLAUSE 1 -----')
    })
  })
})
