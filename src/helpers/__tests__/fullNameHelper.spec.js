'use strict'

import faker from 'faker'
import fullNameHelper from '../fullNameHelper'

const mockOptionsObject = {}

describe('fullNameHelper', () => {
  describe('missing properties', () => {
    describe('firstName property not provided', () => {
      test('the correct error is thrown', () => {
        try {
          const middleNames = ''
          const lastName = faker.name.lastName()

          fullNameHelper({ lastName, middleNames }, mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Full Name Helper - first name is invalid')
        }
      })
    })

    describe('lastName property not provided', () => {
      test('the correct error is thrown', () => {
        try {
          const firstName = faker.name.lastName()
          const middleNames = ''

          fullNameHelper({ firstName, middleNames }, mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Full Name Helper - last name is invalid')
        }
      })
    })
  })

  describe('empty properties', () => {
    describe('firstName property not provided', () => {
      test('the correct error is thrown', () => {
        try {
          const firstName = ''
          const middleNames = ''
          const lastName = faker.name.lastName()

          fullNameHelper({ firstName, lastName, middleNames }, mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Full Name Helper - first name is invalid')
        }
      })
    })

    describe('lastName property not provided', () => {
      test('the correct error is thrown', () => {
        try {
          const firstName = faker.name.lastName()
          const middleNames = ''
          const lastName = ''

          fullNameHelper({ firstName, lastName, middleNames }, mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Full Name Helper - last name is invalid')
        }
      })
    })
  })

  describe('the param object contains a middleNames property', () => {
    describe('middleNames value is empty', () => {
      test('it returns the correct string', () => {
        const firstName = faker.name.firstName()
        const middleNames = ''
        const lastName = faker.name.lastName()

        const returnValue = fullNameHelper({ firstName, lastName, middleNames }, mockOptionsObject)

        expect(returnValue).toEqual(`${firstName} ${lastName}`)
      })
    })

    describe('middleNames is not empty', () => {
      test('it returns the correct string', () => {
        const firstName = faker.name.firstName()
        const middleNames = faker.name.firstName()
        const lastName = faker.name.lastName()

        const returnValue = fullNameHelper({ firstName, lastName, middleNames }, mockOptionsObject)

        expect(returnValue).toEqual(`${firstName} ${middleNames} ${lastName}`)
      })
    })
  })

  describe('the param object does not contain a middleNames property', () => {
    test('it returns the correct string', () => {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()

      const returnValue = fullNameHelper({ firstName, lastName }, mockOptionsObject)

      expect(returnValue).toEqual(`${firstName} ${lastName}`)
    })
  })
})
