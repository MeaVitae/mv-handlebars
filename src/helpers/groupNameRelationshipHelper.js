'use strict'

const groupStringLookup = {
  guardians: 'the guardians of my children under the age of 18',
  substituteGuardians: 'the substitute guardians of my children under the age of 18',
  viewersOfMyAccount: 'the viewers of my account'
}

export default ({ name }, options) => {
  if (!options) {
    throw new Error('Template Error: Group Name Relationship Helper - The required group object has not been provided')
  }

  if (!name) {
    throw new Error('Template Error: Group Name Relationship Helper - Group object has invalid name property value')
  }

  return groupStringLookup[name]
    ? groupStringLookup[name]
    : `my ${name}`
}
