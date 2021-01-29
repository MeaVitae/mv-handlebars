'use strict'

import getCurrentClauseHelper from '../getCurrentClauseHelper'

describe('getCurrentClauseHelper', () => {
  describe('all numbers are > 0', () => {
    test('the entire array is returned', () => {
      const mockCurrentClause = [1, 1, 1]
      const mockGetTitleNumberFunction = () => mockCurrentClause
      const returnValue = getCurrentClauseHelper(mockGetTitleNumberFunction)()

      expect(returnValue).toEqual([1, 1, 1])
    })
  })

  describe('the minor number is 0', () => {
    describe('the sub minor number is 0', () => {
      test('the returned array does not include the minor number or sub minor number array items', () => {
        const mockCurrentClause = [1, 0, 0]
        const mockGetTitleNumberFunction = () => mockCurrentClause
        const returnValue = getCurrentClauseHelper(mockGetTitleNumberFunction)()

        expect(returnValue).toEqual([1])
      })
    })

    describe('the sub minor number is > 0', () => {
      test('the returned array does not include the minor number or sub minor number array items', () => {
        const mockCurrentClause = [1, 0, 1]
        const mockGetTitleNumberFunction = () => mockCurrentClause
        const returnValue = getCurrentClauseHelper(mockGetTitleNumberFunction)()

        expect(returnValue).toEqual([1])
      })
    })
  })

  describe('the sub minor number is 0', () => {
    test('the returned array does not include the sub minor number array item', () => {
      const mockCurrentClause = [1, 1, 0]
      const mockGetTitleNumberFunction = () => mockCurrentClause
      const returnValue = getCurrentClauseHelper(mockGetTitleNumberFunction)()

      expect(returnValue).toEqual([1, 1])
    })
  })
})
