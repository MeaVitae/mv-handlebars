'use strict'

import numberToMoneyWordsHelper from '../numberToMoneyWordsHelper'

const testNumbers = [
  [1, 'One pound'],
  [198, 'One hundred and ninety-eight pounds'],
  [1234, 'One thousand two hundred and thirty-four pounds'],
  [14606, 'Fourteen thousand six hundred and six pounds'],
  [645108, 'Six hundred and forty-five thousand one hundred and eight pounds'],
  [8310644, 'Eight million three hundred and ten thousand six hundred and forty-four pounds'],
  [73164201, 'Seventy-three million one hundred and sixty-four thousand two hundred and one pounds'],
  [904368426, 'Nine hundred and four million three hundred and sixty-eight thousand four hundred and twenty-six pounds'],
  [1375331642, 'One billion three hundred and seventy-five million three hundred and thirty-one thousand six hundred and forty-two pounds'],
  [75311115662, 'Seventy-five billion three hundred and eleven million one hundred and fifteen thousand six hundred and sixty-two pounds'],
  [890033880966, 'Eight hundred and ninety billion thirty-three million eight hundred and eighty thousand nine hundred and sixty-six pounds'],
  [2468364210857, 'Two trillion four hundred and sixty-eight billion three hundred and sixty-four million two hundred and ten thousand eight hundred and fifty-seven pounds'],
  [86421057614345, 'Eighty-six trillion four hundred and twenty-one billion fifty-seven million six hundred and fourteen thousand three hundred and forty-five pounds'],
  [643930437361420, 'Six hundred and forty-three trillion nine hundred and thirty billion four hundred and thirty-seven million three hundred and sixty-one thousand four hundred and twenty pounds'],
  [468.1, 'Four hundred and sixty-eight pounds point one pence'],
  [468.01, 'Four hundred and sixty-eight pounds point zero one pence'],
  [468.10, 'Four hundred and sixty-eight pounds point one pence'],
  [1.01, 'One pound point zero one pence'],
  [0.01, 'Zero pounds point zero one pence']
]

const mockOptionsObject = {}

describe('numberToMoneyWordsHelper', () => {
  describe('a locale property is not passed into the function', () => {
    test('it defaults to en', () => {
      const resultValue = numberToMoneyWordsHelper(1234, mockOptionsObject)
      expect(resultValue).toEqual('One thousand two hundred and thirty-four pounds')
    })
  })

  describe('the locale property value is not matched in the localeLookupObject.json lookup object', () => {
    test('it defaults to en', () => {
      const resultValue = numberToMoneyWordsHelper(1234, 'xx-XX', mockOptionsObject)
      expect(resultValue).toEqual('One thousand two hundred and thirty-four pounds')
    })
  })

  describe('the response to various number values', () => {
    test.each(testNumbers)('the correct written word version of the number is returned', (number, expectedText) => {
      const resultValue = numberToMoneyWordsHelper(number, 'en-GB', mockOptionsObject)
      expect(resultValue).toEqual(expectedText)
    })
  })

  describe('the passed in locale is French', () => {
    test('the correct written word version of the number is returned', () => {
      const resultValue = numberToMoneyWordsHelper(1234, 'fr-FR', mockOptionsObject)
      expect(resultValue).toEqual('Mille deux cent trente-quatre euros')
    })
  })

  describe('a number is not passed in as the 1st parameter', () => {
    test('the correct error is thrown', () => {
      try {
        numberToMoneyWordsHelper('en-GB', mockOptionsObject)
        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message).toEqual('Template Error: Number To Words Helper - The 1st parameter must be a number')
      }
    })
  })

  describe('no parameters are passed in', () => {
    test('the correct error is thrown', () => {
      try {
        numberToMoneyWordsHelper(mockOptionsObject)
        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message).toEqual('Template Error: Number To Words Helper - The 1st parameter must be a number')
      }
    })
  })
})
