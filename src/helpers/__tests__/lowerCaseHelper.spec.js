'use strict'

import lowerCaseHelper from '../lowerCaseHelper'

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue('Hello World')
}

describe('lowerCaseHelper', () => {
  describe('the return value', () => {
    test('it returns a lower cased version of the passed in string', () => {
      const returnValue = lowerCaseHelper(mockOptionsObject)

      expect(returnValue).toEqual('hello world')
    })
  })
})
