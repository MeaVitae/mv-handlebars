'use strict'

import addressHelper from '../addressHelper'
import faker from 'faker'

const mockOptionsObject = {}

describe('addressHelper', () => {
  describe('an addresses object array property is not included in the param object', () => {
    test('the correct error is thrown', () => {
      try {
        addressHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Address Helper - The required addresses object array has not been provided')
      }
    })
  })

  describe('the addresses property is an empty array', () => {
    test('it returns null', () => {
      const returnValue = addressHelper({ addresses: [] }, mockOptionsObject)

      expect(returnValue).toEqual(null)
    })
  })

  describe('the addresses property is a populated array', () => {
    describe('the address object does not cantain a placeResult property', () => {
      test('it returns null', () => {
        const returnValue = addressHelper({ addresses: [{}] }, mockOptionsObject)

        expect(returnValue).toEqual(null)
      })
    })

    describe("the address object's placeResult object does not cantain a formatted_address property", () => {
      test('it returns null', () => {
        const returnValue = addressHelper({ addresses: [{ placeResult: {} }] }, mockOptionsObject)

        expect(returnValue).toEqual(null)
      })
    })

    describe('more than one address has isPref = true', () => {
      test('the formatted_address value from the first address object whose isPref value is true is returned', () => {
        const mockAddresses = [
          {
            isPref: false,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          },

          {
            isPref: true,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          },

          {
            isPref: true,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          }
        ]

        const returnValue = addressHelper({ addresses: mockAddresses }, mockOptionsObject)

        expect(returnValue).toEqual(mockAddresses[1].placeResult.formatted_address)
      })
    })

    describe('the isPref value for all addresses = false', () => {
      test('the formatted_address value from the first address object is returned', () => {
        const mockAddresses = [
          {
            isPref: false,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          },

          {
            isPref: false,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          },

          {
            isPref: false,
            placeResult: {
              formatted_address: faker.address.streetAddress()
            }
          }
        ]

        const returnValue = addressHelper({ addresses: mockAddresses }, mockOptionsObject)

        expect(returnValue).toEqual(mockAddresses[0].placeResult.formatted_address)
      })
    })
  })
})
