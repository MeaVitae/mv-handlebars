'use strict'

import formatMoneyHelper from '../formatMoneyHelper'

jest.mock('../../utils/localeLookupObject.json', () => ({
  'en-GB': {
    symbol: '£'
  }
}))

const mockOptionsObject = {}

describe('formatMoneyHelper', () => {
  describe('1 parameter is passed in', () => {
    test('the correct error is thrown', () => {
      try {
        formatMoneyHelper('abc', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Format Money Helper - The 2 required parameters have not been provided')
      }
    })
  })

  describe('2 parameters are passed in', () => {
    describe('the supplied locale does not exists in the localeLookupObject lookup object', () => {
      test('the correct error is thrown', () => {
        try {
          formatMoneyHelper(300, 'abc', mockOptionsObject)
          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Format Money Helper - Locale not found')
        }
      })
    })

    describe('the supplied locale exists in the localeLookupObject lookup object', () => {
      test('a money formatted string representation of the number is returned, formatted to 2 decimal places', () => {
        const returnValue = formatMoneyHelper(300, 'en-GB', mockOptionsObject)

        expect(returnValue).toEqual('£300.00')
      })
    })
  })
})
