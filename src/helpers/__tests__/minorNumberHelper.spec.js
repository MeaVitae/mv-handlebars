'use strict'

import minorNumberHelper from '../minorNumberHelper'

const mockTitleNumber = [1, 2, 5]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)
const setTitleNumber = jest.fn()

describe('minorNumberHelper', () => {
  describe('the call to setTitleNumber', () => {
    test('setTitleNumber is called with the the minor number updated to + 1 (derived from the value obtained via the call to getTitleNumber) & the sub minor set to 0', () => {
      minorNumberHelper({ getTitleNumber, setTitleNumber })()

      expect(setTitleNumber).toHaveBeenCalledWith([mockTitleNumber[0], mockTitleNumber[1] + 1, 0])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major & minor numbers separated by ".", with the minor number incremented by 1', () => {
      const returnValue = minorNumberHelper({ getTitleNumber, setTitleNumber })()
      const minorNumberPlus1 = mockTitleNumber[1] + 1

      expect(returnValue)
        .toEqual(`${mockTitleNumber[0]}.${minorNumberPlus1}`)
    })
  })
})
