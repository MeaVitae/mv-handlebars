'use strict'

import subMinorNumberHelper from '../subMinorNumberHelper'

const mockTitleNumber = [0, 0, 0]
const getTitleNumber = jest.fn().mockReturnValue(mockTitleNumber)
const setTitleNumber = jest.fn()

describe('subMinorNumberHelper', () => {
  describe('the call to setTitleNumber', () => {
    test('setTitleNumber is called with the only change to the array (obtained via the call to getTitleNumber) being minor number updated by 1', () => {
      subMinorNumberHelper({ getTitleNumber, setTitleNumber })()

      expect(setTitleNumber).toHaveBeenCalledWith([
        mockTitleNumber[0],
        mockTitleNumber[1],
        mockTitleNumber[2] + 1
      ])
    })
  })

  describe('the return value', () => {
    test('it returns a string representation of the major, minor, & subMinor numbers separated by ".", with the sub minor number incremented by 1', () => {
      const returnValue = subMinorNumberHelper({ getTitleNumber, setTitleNumber })()
      const subMinorNumberPlus1 = mockTitleNumber[2] + 1

      expect(returnValue)
        .toEqual(`${mockTitleNumber[0]}.${mockTitleNumber[1]}.${subMinorNumberPlus1}`)
    })
  })
})
