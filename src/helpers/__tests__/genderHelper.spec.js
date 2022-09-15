'use strict'

import genderHelper from '../genderHelper'
import faker from 'faker'

const mockOptionsObject = {}

describe('genderHelper', () => {
  describe('genderType property not provided', () => {
    test("each of the returned object's property values are null", () => {
      const returnValue = genderHelper({}, mockOptionsObject)

      expect(returnValue).toEqual({
        personalPronounSubject: null,
        personalPronounObject: null,
        possessivePronoun: null
      })
    })
  })

  describe('genderType property not provided', () => {
    test("each of the returned object's property values are null", () => {
      const genderType = ''

      const returnValue = genderHelper({ genderType }, mockOptionsObject)

      expect(returnValue).toEqual({
        personalPronounSubject: null,
        personalPronounObject: null,
        possessivePronoun: null
      })
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
