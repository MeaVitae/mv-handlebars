'use strict'

import upperCaseHelper from '../upperCaseHelper'

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue('hello world')
}

describe('upperCaseHelper', () => {
  describe('the return value', () => {
    test('it returns an upper case version of the passed in string', () => {
      const returnValue = upperCaseHelper(mockOptionsObject)

      expect(returnValue).toEqual('HELLO WORLD')
    })
  })
})
