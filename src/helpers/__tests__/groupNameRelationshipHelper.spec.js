'use strict'

import groupNameRelationshipHelper from '../groupNameRelationshipHelper'

const mockOptionsObject = {}

describe('groupNameRelationshipHelper', () => {
  describe('a group object is not provided', () => {
    test('the correct error is thrown', () => {
      try {
        groupNameRelationshipHelper(mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Group Name Relationship Helper - The required group object has not been provided')
      }
    })
  })

  describe('a group object has been provided', () => {
    describe('the provided group object does not have a name property', () => {
      test('the correct error is thrown', () => {
        try {
          groupNameRelationshipHelper({}, mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Group Name Relationship Helper - Group object has invalid name property value')
        }
      })
    })

    describe('the provided group object has a name property', () => {
      describe('the name property is empty', () => {
        test('the correct error is thrown', () => {
          try {
            groupNameRelationshipHelper({ name: '' }, mockOptionsObject)

            throw new Error('test should have thrown error')
          } catch (error) {
            expect(error.message)
              .toEqual('Template Error: Group Name Relationship Helper - Group object has invalid name property value')
          }
        })
      })

      describe('the name property is valid', () => {
        describe('the groupStringLookup object contains a matching group key', () => {
          test('the correct text is returned', () => {
            const returnValue = groupNameRelationshipHelper({ name: 'guardians' }, mockOptionsObject)

            expect(returnValue)
              .toEqual('the guardians of my children under the age of 18')
          })
        })

        describe('the groupStringLookup object does not contain a matching group key', () => {
          test('the correct fallback text is returned', () => {
            const returnValue = groupNameRelationshipHelper({ name: 'abcdefg' }, mockOptionsObject)

            expect(returnValue)
              .toEqual('my abcdefg')
          })
        })
      })
    })
  })
})
