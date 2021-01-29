'use strict'

import minorNumberHelper from '../minorNumberHelper'

const mockCurrentClause = [1, 2, 5]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)
const setCurrentClause = jest.fn()

describe('minorNumberHelper', () => {
  describe('the call to setCurrentClause', () => {
    test('setCurrentClause is called with the the minor number updated to + 1 (derived from the value obtained via the call to getCurrentClause) & the sub minor set to 0', () => {
      minorNumberHelper({ getCurrentClause, setCurrentClause })()

      expect(setCurrentClause).toHaveBeenCalledWith([mockCurrentClause[0], mockCurrentClause[1] + 1, 0])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major & minor numbers separated by ".", with the minor number incremented by 1', () => {
      const returnValue = minorNumberHelper({ getCurrentClause, setCurrentClause })()
      const minorNumberPlus1 = mockCurrentClause[1] + 1

      expect(returnValue)
        .toEqual(`${mockCurrentClause[0]}.${minorNumberPlus1}`)
    })
  })
})
