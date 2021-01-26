'use strict'

import numberToWordsHelper from '../numberToWordsHelper'

const testNumbers = [
  [1, 'One'],
  [198, 'One hundred and ninety-eight'],
  [1234, 'One thousand two hundred and thirty-four'],
  [14606, 'Fourteen thousand six hundred and six'],
  [645108, 'Six hundred and forty-five thousand one hundred and eight'],
  [8310644, 'Eight million three hundred and ten thousand six hundred and forty-four'],
  [73164201, 'Seventy-three million one hundred and sixty-four thousand two hundred and one'],
  [904368426, 'Nine hundred and four million three hundred and sixty-eight thousand four hundred and twenty-six'],
  [1375331642, 'One billion three hundred and seventy-five million three hundred and thirty-one thousand six hundred and forty-two'],
  [75311115662, 'Seventy-five billion three hundred and eleven million one hundred and fifteen thousand six hundred and sixty-two'],
  [890033880966, 'Eight hundred and ninety billion thirty-three million eight hundred and eighty thousand nine hundred and sixty-six'],
  [2468364210857, 'Two trillion four hundred and sixty-eight billion three hundred and sixty-four million two hundred and ten thousand eight hundred and fifty-seven'],
  [86421057614345, 'Eighty-six trillion four hundred and twenty-one billion fifty-seven million six hundred and fourteen thousand three hundred and forty-five'],
  [643930437361420, 'Six hundred and forty-three trillion nine hundred and thirty billion four hundred and thirty-seven million three hundred and sixty-one thousand four hundred and twenty'],
  [468.1, 'Four hundred and sixty-eight point one'],
  [468.01, 'Four hundred and sixty-eight point zero one'],
  [468.10, 'Four hundred and sixty-eight point one']
]

const mockOptionsObject = {}

describe('numberToWordsHelper', () => {
  describe('a locale property is not passed into the function', () => {
    test('it defaults to en', () => {
      const resultValue = numberToWordsHelper(1234, mockOptionsObject)
      expect(resultValue).toEqual('One thousand two hundred and thirty-four')
    })
  })

  describe('the locale property value is not matched in the localeLookupObject.json lookup object', () => {
    test('it defaults to en', () => {
      const resultValue = numberToWordsHelper(1234, 'xx-XX', mockOptionsObject)
      expect(resultValue).toEqual('One thousand two hundred and thirty-four')
    })
  })

  describe('the response to various number values', () => {
    test.each(testNumbers)('the correct written word version of the number is returned', (number, expectedText) => {
      const resultValue = numberToWordsHelper(number, 'en-GB', mockOptionsObject)
      expect(resultValue).toEqual(expectedText)
    })
  })

  describe('the passed in locale is French', () => {
    test('the correct written word version of the number is returned', () => {
      const resultValue = numberToWordsHelper(1234, 'fr-FR', mockOptionsObject)
      expect(resultValue).toEqual('Mille deux cent trente-quatre')
    })
  })

  describe('a number is not passed in as the 1st parameter', () => {
    test('the correct error is thrown', () => {
      try {
        numberToWordsHelper('en-GB', mockOptionsObject)
        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message).toEqual('Template Error: Number To Words Helper - The 1st parameter must be a number')
      }
    })
  })

  describe('no parameters are passed in', () => {
    test('the correct error is thrown', () => {
      try {
        numberToWordsHelper(mockOptionsObject)
        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message).toEqual('Template Error: Number To Words Helper - The 1st parameter must be a number')
      }
    })
  })
})
