'use strict'

import majorNumberHelper from '../majorNumberHelper'

const mockCurrentClause = [0, 2, 5]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)
const setCurrentClause = jest.fn()

describe('majorNumberHelper', () => {
  describe('the call to setCurrentClause', () => {
    test('setCurrentClause is called with the the major number updated to + 1 (derived from the value obtained via the call to getCurrentClause) & the minor & sub minor set to 0', () => {
      majorNumberHelper({ getCurrentClause, setCurrentClause })()

      expect(setCurrentClause).toHaveBeenCalledWith([mockCurrentClause[0] + 1, 0, 0])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major number (obtained via the call to getCurrentClause), incremented by 1', () => {
      const returnValue = majorNumberHelper({ getCurrentClause, setCurrentClause })()
      const majorNumberPlus1 = mockCurrentClause[0] + 1

      expect(returnValue)
        .toEqual(majorNumberPlus1.toString())
    })
  })
})
