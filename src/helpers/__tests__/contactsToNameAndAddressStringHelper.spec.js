'use strict'

import contactsToNameAndAddressStringHelper from '../contactsToNameAndAddressStringHelper'
import faker from 'faker'

const mockOptionsFunctionReturnValue = faker.lorem.paragraph()
const mockOptionsObject = {
  fn: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue),
  inverse: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue)
}

const createMockAddress = ({ isPref = false } = {}) => ({
  id: faker.datatype.uuid(),
  isPref,
  placeResult: {
    formatted_address: faker.address.streetAddress()
  },
  returnData: {}
})

const createMockContact = () => ({
  firstName: faker.name.firstName(),
  middleNames: faker.name.firstName(),
  lastName: faker.name.lastName(),
  addresses: []
})

const getContactFullName = ({ firstName, middleNames, lastName }) => `${firstName} ${middleNames} ${lastName}`
const getContactFirstAddress = ({ addresses }) => addresses[0].placeResult.formatted_address

let mockContact

describe('contactsToNameAndAddressStringHelper', () => {
  beforeEach(() => {
    mockContact = createMockContact()
  })

  describe('an array of contacts is not passed in', () => {
    test('the correct error is thrown', () => {
      try {
        contactsToNameAndAddressStringHelper(mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Contacts To Name And Address String Helper - The required contact array has not been provided')
      }
    })
  })

  describe('the contacts parameter is not an array', () => {
    test('the correct error is thrown', () => {
      try {
        contactsToNameAndAddressStringHelper('someString', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Contacts To Name And Address String Helper - First parameter must be an array of contacts')
      }
    })
  })

  describe('an array of contacts is passed in', () => {
    describe('a contact in the array', () => {
      test('the full name of the contact is returned', () => {
        mockContact.addresses.push(createMockAddress())

        const response = contactsToNameAndAddressStringHelper([mockContact], mockOptionsObject)

        expect(response).toEqual(`${getContactFullName(mockContact)} of ${getContactFirstAddress(mockContact)}`)
      })

      describe('the addresses array', () => {
        describe('an address does not have an isPref property', () => {
          test('it does not cause an error', () => {
            mockContact.addresses.push(createMockAddress())
            delete mockContact.addresses[0].isPref

            expect(Reflect.has(mockContact.addresses[0], 'isPref')).toBe(false)

            expect(() => contactsToNameAndAddressStringHelper([mockContact], mockOptionsObject))
              .not
              .toThrow(Error)
          })
        })

        test('the address with isPref = true is selected', () => {
          const isPrefAddress = createMockAddress({ isPref: true })

          mockContact.addresses.push(createMockAddress({ isPref: false }))
          mockContact.addresses.push(createMockAddress({ isPref: false }))
          mockContact.addresses.push(isPrefAddress)
          mockContact.addresses.push(createMockAddress({ isPref: false }))

          const response = contactsToNameAndAddressStringHelper([mockContact], mockOptionsObject)

          expect(response).toEqual(`${getContactFullName(mockContact)} of ${isPrefAddress.placeResult.formatted_address}`)
        })

        describe('none of the addresses have isPref = true', () => {
          test('it uses the first address in the array', () => {
            mockContact.addresses.push(createMockAddress({ isPref: false }))
            mockContact.addresses.push(createMockAddress({ isPref: false }))
            mockContact.addresses.push(createMockAddress({ isPref: false }))
            mockContact.addresses.push(createMockAddress({ isPref: false }))

            const response = contactsToNameAndAddressStringHelper([mockContact], mockOptionsObject)

            expect(response).toEqual(`${getContactFullName(mockContact)} of ${getContactFirstAddress(mockContact)}`)
          })
        })
      })
    })

    describe('the contact delimiter', () => {
      describe('a single contact', () => {
        test('it has no delimeter at the end', () => {
          mockContact.addresses.push(createMockAddress())

          const response = contactsToNameAndAddressStringHelper([mockContact], mockOptionsObject)

          expect(response).toEqual(`${getContactFullName(mockContact)} of ${getContactFirstAddress(mockContact)}`)
        })
      })

      describe('two contacts', () => {
        test('the delimiter = and', () => {
          mockContact.addresses.push(createMockAddress())

          const mockContact2 = createMockContact()
          mockContact2.addresses.push(createMockAddress())

          const response = contactsToNameAndAddressStringHelper([mockContact, mockContact2], mockOptionsObject)

          expect(response)
            .toEqual(`${getContactFullName(mockContact)} of ${getContactFirstAddress(mockContact)} and ${getContactFullName(mockContact2)} of ${getContactFirstAddress(mockContact2)}`)
        })
      })

      describe('more than two contacts', () => {
        test('the final delimiter = and, the others are a comma', () => {
          mockContact.addresses.push(createMockAddress({ isPref: false }))

          const mockContact2 = createMockContact()
          mockContact2.addresses.push(createMockAddress())

          const mockContact3 = createMockContact()
          mockContact3.addresses.push(createMockAddress())

          const response = contactsToNameAndAddressStringHelper([mockContact, mockContact2, mockContact3], mockOptionsObject)

          expect(response)
            .toEqual(`${getContactFullName(mockContact)} of ${getContactFirstAddress(mockContact)}, ${getContactFullName(mockContact2)} of ${getContactFirstAddress(mockContact2)} and ${getContactFullName(mockContact3)} of ${getContactFirstAddress(mockContact3)}`)
        })
      })
    })
  })
})
