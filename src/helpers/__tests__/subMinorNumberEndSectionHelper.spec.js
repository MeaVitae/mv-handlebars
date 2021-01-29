'use strict'

import subMinorNumberEndSectionHelper from '../subMinorNumberEndSectionHelper'

const mockCurrentClause = [1, 2, 5]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)

describe('subMinorNumberEndSectionHelper', () => {
  describe('the return value', () => {
    test('the correct string is returned', () => {
      const returnValue = subMinorNumberEndSectionHelper({ getCurrentClause })()

      expect(returnValue)
        .toEqual('----- END OF CLAUSE 1.2.5 -----')
    })
  })
})
