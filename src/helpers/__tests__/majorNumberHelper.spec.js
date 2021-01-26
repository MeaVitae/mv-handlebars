'use strict'

import majorNumberHelper from '../majorNumberHelper'

const mockTitleNumber = [0, 2, 5]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)
const setTitleNumber = jest.fn()

describe('majorNumberHelper', () => {
  describe('the call to setTitleNumber', () => {
    test('setTitleNumber is called with the the major number updated to + 1 (derived from the value obtained via the call to getTitleNumber) & the minor & sub minor set to 0', () => {
      majorNumberHelper({ getTitleNumber, setTitleNumber })()

      expect(setTitleNumber).toHaveBeenCalledWith([mockTitleNumber[0] + 1, 0, 0])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major number (obtained via the call to getTitleNumber), incremented by 1', () => {
      const returnValue = majorNumberHelper({ getTitleNumber, setTitleNumber })()
      const majorNumberPlus1 = mockTitleNumber[0] + 1

      expect(returnValue)
        .toEqual(majorNumberPlus1.toString())
    })
  })
})
