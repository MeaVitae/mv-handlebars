'use strict'

import compareHelper from '../compareHelper'
import faker from 'faker'

const mockOptionsFunctionReturnValue = faker.lorem.paragraph()

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue),
  inverse: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue)
}

describe('compareHelper', () => {
  describe('1 parameter is passed in', () => {
    test('the correct error is thrown', () => {
      try {
        compareHelper('abc', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Compare Helper - The 3 required parameters have not been provided')
      }
    })
  })

  describe('2 parameters are passed in', () => {
    test('the correct error is thrown', () => {
      try {
        compareHelper('abc', 'def', mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Compare Helper - The 3 required parameters have not been provided')
      }
    })
  })

  describe('3 parameters are passed in', () => {
    describe('the operator is not a valid', () => {
      test('the correct error is thrown', () => {
        const invalidOperator = 'xxx'

        try {
          compareHelper('abc', invalidOperator, 'def', mockOptionsObject)

          throw new Error('test should have thrown error')
        } catch (error) {
          expect(error.message)
            .toEqual(`Template Error: Compare Helper - Unknown operator: ${invalidOperator}`)
        }
      })
    })

    describe('the operator is valid', () => {
      test('an error is not thrown', () => {
        const validOperator = faker.random.arrayElement(['===', '!==', '<', '>', '<=', '>=', '&&', '||'])

        try {
          compareHelper('abc', validOperator, 'def', mockOptionsObject)
          expect(true).toEqual(true)
        } catch (error) {
          throw new Error('test should not have thrown error')
        }
      })

      describe('the result of the compare function is true', () => {
        test('options.fn is called with the context object as the param value', () => {
          const mockThis = { id: faker.datatype.uuid() }

          compareHelper.call(mockThis, 'abc', '===', 'abc', mockOptionsObject)

          expect(mockOptionsObject.fn).toHaveBeenCalledWith(mockThis)
        })
      })

      describe('the result of the compare function is false', () => {
        test('options.inverse is called with the context object as the param value', () => {
          const mockThis = { id: faker.datatype.uuid() }

          compareHelper.call(mockThis, 'abc', '===', 'def', mockOptionsObject)

          expect(mockOptionsObject.inverse).toHaveBeenCalledWith(mockThis)
        })
      })

      describe('the return value', () => {
        test('the result of the options() function call is returned', () => {
          const returnValue = compareHelper('abc', '===', 'def', mockOptionsObject)

          expect(returnValue).toEqual(mockOptionsFunctionReturnValue)
        })
      })
    })
  })
})
