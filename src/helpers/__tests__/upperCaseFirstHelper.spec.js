'use strict'

import upperCaseFirstHelper from '../upperCaseFirstHelper'

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue('hello world')
}

describe('upperCaseFirstHelper', () => {
  describe('the return value', () => {
    test('it returns an upper case first version of the passed in string', () => {
      const returnValue = upperCaseFirstHelper(mockOptionsObject)

      expect(returnValue).toEqual('Hello world')
    })
  })
})
