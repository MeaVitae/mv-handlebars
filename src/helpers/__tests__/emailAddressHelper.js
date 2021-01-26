'use strict'

import emailAddressHelper from '../emailAddressHelper'
import faker from 'faker'

const mockOptionsObject = {}

describe('emailAddressHelper', () => {
  describe('an emailAddresses object array property is not included in the param object', () => {
    test('the correct error is thrown', () => {
      try {
        emailAddressHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Email Address Helper - The required email address object array has not been provided')
      }
    })
  })

  describe('the emailAddresses property is an empty array', () => {
    test('it returns null', () => {
      const returnValue = emailAddressHelper({ emailAddresses: [] }, mockOptionsObject)

      expect(returnValue).toEqual(null)
    })
  })

  describe('the emailAddresses property is a populated array', () => {
    describe('the email address object does not cantain a value property', () => {
      test('it returns null', () => {
        const returnValue = emailAddressHelper({ emailAddresses: [{}] }, mockOptionsObject)

        expect(returnValue).toEqual(null)
      })
    })

    describe('more than one email address has isPref = true', () => {
      test("the 'value' value from the first email address object whose isPref value is true is returned", () => {
        const mockAddresses = [
          {
            isPref: false,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          },

          {
            isPref: true,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          },

          {
            isPref: true,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          }
        ]

        const returnValue = emailAddressHelper({ emailAddresses: mockAddresses }, mockOptionsObject)

        expect(returnValue).toEqual(mockAddresses[1].value)
      })
    })

    describe('the isPref value for all email addresses = false', () => {
      test("the 'value' value from the first email address object is returned", () => {
        const mockAddresses = [
          {
            isPref: false,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          },

          {
            isPref: false,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          },

          {
            isPref: false,
            type: faker.random.arrayElement(['work', 'home', 'other']),
            value: faker.internet.email()
          }
        ]

        const returnValue = emailAddressHelper({ emailAddresses: mockAddresses }, mockOptionsObject)

        expect(returnValue).toEqual(mockAddresses[0].value)
      })
    })
  })
})
