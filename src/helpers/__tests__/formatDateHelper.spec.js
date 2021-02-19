'use strict'

import formatDateHelper from '../formatDateHelper'

const mockOptionsObject = {}

describe('formatDateHelper', () => {
  describe('no param is passed in', () => {
    test('the correct error is thrown', () => {
      try {
        formatDateHelper(mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Format Date Helper - The required date string parameter has not been provided')
      }
    })
  })

  describe('the return value', () => {
    test('it returns a lower cased version of the passed in string', () => {
      const returnValue = formatDateHelper('1979-03-05', mockOptionsObject)

      expect(returnValue).toEqual('5th day of March, 1979')
    })
  })
})
