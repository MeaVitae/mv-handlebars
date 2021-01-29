'use strict'

import subMinorNumberHelper from '../subMinorNumberHelper'

const mockCurrentClause = [0, 0, 0]
const getCurrentClause = jest.fn().mockReturnValue(mockCurrentClause)
const setCurrentClause = jest.fn()

describe('subMinorNumberHelper', () => {
  describe('the call to setCurrentClause', () => {
    test('setCurrentClause is called with the only change to the array (obtained via the call to getCurrentClause) being minor number updated by 1', () => {
      subMinorNumberHelper({ getCurrentClause, setCurrentClause })()

      expect(setCurrentClause).toHaveBeenCalledWith([
        mockCurrentClause[0],
        mockCurrentClause[1],
        mockCurrentClause[2] + 1
      ])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major, minor, & subMinor numbers separated by ".", with the sub minor number incremented by 1', () => {
      const returnValue = subMinorNumberHelper({ getCurrentClause, setCurrentClause })()
      const subMinorNumberPlus1 = mockCurrentClause[2] + 1

      expect(returnValue)
        .toEqual(`${mockCurrentClause[0]}.${mockCurrentClause[1]}.${subMinorNumberPlus1}`)
    })
  })
})
