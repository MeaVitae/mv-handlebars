'use strict'

import faker from 'faker'
import underlineHelper from '../underlineHelper'

const mockOptionsFunctionReturnValue = faker.lorem.paragraph()

const mockOptionsObject = {
  fn: jest.fn().mockReturnValue(mockOptionsFunctionReturnValue)
}

describe('underlineHelper', () => {
  describe('the return value', () => {
    test('it returns the passed in string wrapped in <u> tags', () => {
      const returnValue = underlineHelper(mockOptionsObject)

      expect(returnValue).toEqual(`<u>${mockOptionsFunctionReturnValue}</u>`)
    })
  })
})
