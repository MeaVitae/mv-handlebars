'use strict'

import contactHelper from '../contactHelper'
import faker from 'faker'

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue({ id: 'abc' })
}

const contactObject = {
  someOtherProperty: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  middleNames: faker.name.firstName(),
  lastName: faker.name.lastName(),
  dateOfBirth: '1979-03-05',
  genderType: 'female',

  addresses: [
    {
      id: faker.datatype.uuid(),
      isPref: false,
      placeResult: {
        formatted_address: faker.address.streetAddress()
      },
      returnData: {}
    },
    {
      id: faker.datatype.uuid(),
      isPref: true,
      placeResult: {
        formatted_address: faker.address.streetAddress()
      },
      returnData: {}
    },
    {
      id: faker.datatype.uuid(),
      isPref: false,
      placeResult: {
        formatted_address: faker.address.streetAddress()
      },
      returnData: {}
    }
  ],

  emailAddresses: [
    {
      id: faker.datatype.uuid(),
      isPref: false,
      type: faker.random.arrayElement(['work', 'home', 'other']),
      value: faker.internet.email()
    },
    {
      id: faker.datatype.uuid(),
      isPref: true,
      type: faker.random.arrayElement(['work', 'home', 'other']),
      value: faker.internet.email()
    },
    {
      id: faker.datatype.uuid(),
      isPref: false,
      type: faker.random.arrayElement(['work', 'home', 'other']),
      value: faker.internet.email()
    }
  ],

  phoneNumbers: [
    {
      id: faker.datatype.uuid(),
      isPref: false,
      type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
      value: faker.phone.phoneNumber()
    },
    {
      id: faker.datatype.uuid(),
      isPref: false,
      type: faker.random.arrayElement(['mobile', 'work', 'home', 'other']),
      value: faker.phone.phoneNumber()
    }
  ]
}

describe('contactHelper', () => {
  test("the correct return object is passed to the options object's fn functian", () => {
    contactHelper(contactObject, mockOptionsObject)

    expect(mockOptionsObject.fn)
      .toHaveBeenCalledWith({
        ...contactObject,
        contactFullName: `${contactObject.firstName} ${contactObject.middleNames} ${contactObject.lastName}`,
        contactAddress: contactObject.addresses[1].placeResult.formatted_address,
        contactEmailAddress: contactObject.emailAddresses[1].value,
        contactPhoneNumber: contactObject.phoneNumbers[0].value,
        contactDateOfBirthString: '5th day of March, 1979',
        personalPronounSubject: 'she',
        personalPronounObject: 'her',
        possessivePronoun: 'her'
      })
  })

  test('the result of the options.fn() call is returned', () => {
    const resultValue = contactHelper(contactObject, mockOptionsObject)
    expect(resultValue).toEqual({ id: 'abc' })
  })
})
