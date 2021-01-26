'use strict'

import filterHelper from '../filterHelper'
import faker from 'faker'

const mockOptionsFunctionReturnValue = faker.lorem.paragraph()
const mockOptionsObject = {
  fn: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue),
  inverse: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue)
}

describe('filterHelper', () => {
  describe('1 parameter is passed in', () => {
    test('the correct error is thrown', () => {
      try {
        filterHelper('objectKey', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Filter Helper - The 4 required parameters have not been provided')
      }
    })
  })

  describe('2 parameters are passed in', () => {
    test('the correct error is thrown', () => {
      try {
        filterHelper('objectKey', 'def', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Filter Helper - The 4 required parameters have not been provided')
      }
    })
  })

  describe('3 parameters are passed in', () => {
    test('the correct error is thrown', () => {
      try {
        filterHelper('objectKey', 'def', 'ghi', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Filter Helper - The 4 required parameters have not been provided')
      }
    })
  })

  describe('4 parameters are passed in', () => {
    describe('the 1st paramater is not an array', () => {
      test('the correct error is thrown', () => {
        try {
          filterHelper('notAnArray', 'def', 'ghi', 'jkl', mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual('Template Error: Filter Helper - First parameter must be an array of objects')
        }
      })
    })

    describe('the 1st parameter is an array', () => {
      describe('the operator is not a valid', () => {
        test('the correct error is thrown', () => {
          const invalidOperator = 'xxx'

          try {
            filterHelper([], 'objectKey', invalidOperator, 'def', mockOptionsObject)

            throw new Error('test should have thrown error')
          } catch (error) {
            expect(error.message)
              .toEqual(`Template Error: Filter Helper - Unknown operator: ${invalidOperator}`)
          }
        })
      })

      describe('the operator is valid', () => {
        test('an error is not thrown', () => {
          const validOperator = faker.random.arrayElement(['===', '!==', '<', '>', '<=', '>=', '&&', '||'])

          try {
            filterHelper([], 'objectKey', validOperator, 'def', mockOptionsObject)
            expect(true).toEqual(true)
          } catch (error) {
            throw new Error('test should not have thrown error')
          }
        })

        describe('the return value', () => {
          describe('some of the array objects pass the filter condition', () => {
            test('the returned array contains the objects', () => {
              const mockObjectArray = [
                { mockKey: 'a' },
                { mockKey: 'b' },
                { mockKey: 'a' },
                { mockKey: 'c' }
              ]

              const returnValue = filterHelper(mockObjectArray, 'mockKey', '===', 'a', mockOptionsObject)

              expect(returnValue)
                .toEqual([mockObjectArray[0], mockObjectArray[2]])
            })
          })

          describe('none of the array objects pass the filter condition', () => {
            test('an empty array is returned', () => {
              const mockObjectArray = [
                { mockKey: 'a' },
                { mockKey: 'b' },
                { mockKey: 'a' },
                { mockKey: 'c' }
              ]

              const returnValue = filterHelper(mockObjectArray, 'mockKey', '===', 'e', mockOptionsObject)

              expect(returnValue).toEqual([])
            })
          })
        })
      })
    })
  })
})
