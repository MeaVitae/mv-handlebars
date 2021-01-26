'use strict'

import titleCaseHelper from '../titleCaseHelper'

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue('hello the world')
}

describe('titleCaseHelper', () => {
  describe('the return value', () => {
    test('it returns a title cased version of the passed in string', () => {
      const returnValue = titleCaseHelper(mockOptionsObject)

      expect(returnValue).toEqual('Hello the World')
    })
  })
})
