'use strict'

import genderHelper from '../genderHelper'
import faker from 'faker'

const mockOptionsObject = {}

describe('genderHelper', () => {
  describe('genderType property not provided', () => {
    test('the correct error is thrown', () => {
      try {
        genderHelper({}, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Gender Helper - gender type is invalid')
      }
    })
  })

  describe('genderType property not provided', () => {
    test('the correct error is thrown', () => {
      try {
        const genderType = ''

        genderHelper({ genderType }, mockOptionsObject)

        throw new Error('test should have thrown error')
      } catch (error) {
        expect(error.message)
          .toEqual('Template Error: Gender Helper - gender type is invalid')
      }
    })
  })

  describe('the passed in value can not be found in the lookup object', () => {
    test("each of the returned object's property values are null", () => {
      const returnValue = genderHelper({ genderType: faker.random.arrayElement('other', 'none', 'unknown') }, mockOptionsObject)

      expect(returnValue).toEqual({
        personalPronounObject: null,
        personalPronounSubject: null,
        possessivePronoun: null
      })
    })
  })

  describe('the passed in value can be found in the lookup object', () => {
    describe('the passed in = male', () => {
      test('the correct corresponding values are returned', () => {
        const returnValue = genderHelper({ genderType: 'male' }, mockOptionsObject)

        expect(returnValue).toEqual({
          personalPronounSubject: 'he',
          personalPronounObject: 'him',
          possessivePronoun: 'his'
        })
      })
    })

    describe('the passed in = female', () => {
      test('the correct corresponding values are returned', () => {
        const returnValue = genderHelper({ genderType: 'female' }, mockOptionsObject)

        expect(returnValue).toEqual({
          personalPronounSubject: 'she',
          personalPronounObject: 'her',
          possessivePronoun: 'her'
        })
      })
    })

    describe('the passed in = other', () => {
      test('the correct corresponding values are returned', () => {
        const returnValue = genderHelper({ genderType: 'other' }, mockOptionsObject)

        expect(returnValue).toEqual({
          personalPronounSubject: null,
          personalPronounObject: null,
          possessivePronoun: null
        })
      })
    })
  })
})
