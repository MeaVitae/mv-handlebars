'use strict'

import dateOfBirthStringHelper from '../dateOfBirthStringHelper'

const mockOptionsObject = {}

describe('dateOfBirthStringHelper', () => {
  describe('a dateOfBirth property is not included in the param object', () => {
    test('the correct error is thrown', () => {
      try {
        dateOfBirthStringHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Date Of Birth String Helper - The required date of birth string parameter has not been provided')
      }
    })
  })

  describe('an addresses object array parameter is not passed in', () => {
    test('the correct error is thrown', () => {
      try {
        dateOfBirthStringHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Date Of Birth String Helper - The required date of birth string parameter has not been provided')
      }
    })
  })

  describe('the return value', () => {
    test('it returns a lower cased version of the passed in string', () => {
      const returnValue = dateOfBirthStringHelper({ dateOfBirth: '1979-03-05' }, mockOptionsObject)

      expect(returnValue).toEqual('5th day of March, 1979')
    })
  })
})
