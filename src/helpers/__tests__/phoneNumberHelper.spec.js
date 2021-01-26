'use strict'

import phoneNumberHelper from '../phoneNumberHelper'
import faker from 'faker'

const mockOptionsObject = {}

describe('phoneNumberHelper', () => {
  describe('an phoneNumbers object array property is not included in the param object', () => {
    test('the correct error is thrown', () => {
      try {
        phoneNumberHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Phone Number Helper - The required phone number object array has not been provided')
      }
    })
  })

  describe('the phoneNumbers property is an empty array', () => {
    test('it returns null', () => {
      const returnValue = phoneNumberHelper({ phoneNumbers: [] }, mockOptionsObject)

      expect(returnValue).toEqual(null)
    })
  })

  describe('the phoneNumbers property is a populated array', () => {
    describe('the phone numbers object does not cantain a value property', () => {
      test('it returns null', () => {
        const returnValue = phoneNumberHelper({ phoneNumbers: [{}] }, mockOptionsObject)

        expect(returnValue).toEqual(null)
      })
    })

    describe('more than one phone numbers has isPref = true', () => {
      test("the 'value' value from the first phone numbers object whose isPref value is true is returned", () => {
        const mockPhoneNumbers = [
          {
            isPref: false,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          },
          {
            isPref: true,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          },
          {
            isPref: true,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          }
        ]

        const returnValue = phoneNumberHelper({ phoneNumbers: mockPhoneNumbers }, mockOptionsObject)

        expect(returnValue).toEqual(mockPhoneNumbers[1].value)
      })
    })

    describe('the isPref value for all phone numbers = false', () => {
      test("the 'value' value from the first phone numbers object is returned", () => {
        const mockPhoneNumbers = [
          {
            isPref: false,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          },
          {
            isPref: false,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          },
          {
            isPref: false,
            type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
            value: faker.phone.phoneNumber()
          }
        ]

        const returnValue = phoneNumberHelper({ phoneNumbers: mockPhoneNumbers }, mockOptionsObject)

        expect(returnValue).toEqual(mockPhoneNumbers[0].value)
      })
    })
  })
})
