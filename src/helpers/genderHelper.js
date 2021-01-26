'use strict'

const genderLookup = {
  male: {
    personalPronounSubject: 'he',
    personalPronounObject: 'him',
    possessivePronoun: 'his'
  },

  female: {
    personalPronounSubject: 'she',
    personalPronounObject: 'her',
    possessivePronoun: 'her'
  },

  other: {
    personalPronounSubject: null,
    personalPronounObject: null,
    possessivePronoun: null
  },

  none: {
    personalPronounSubject: null,
    personalPronounObject: null,
    possessivePronoun: null
  },

  unknown: {
    personalPronounSubject: null,
    personalPronounObject: null,
    possessivePronoun: null
  }
}

export default ({ genderType }, options) => {
  if (!genderType) {
    throw new Error('Template Error: Gender Helper - gender type is invalid')
  }

  return genderLookup[genderType] || {
    personalPronounSubject: null,
    personalPronounObject: null,
    possessivePronoun: null
  }
}
