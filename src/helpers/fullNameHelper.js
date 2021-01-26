'use strict'

export default ({ firstName, lastName, middleNames }, options) => {
  if (!firstName) {
    throw new Error('Template Error: Full Name Helper - first name is invalid')
  }

  if (!lastName) {
    throw new Error('Template Error: Full Name Helper - last name is invalid')
  }

  return `${firstName} ${middleNames ? `${middleNames} ` : ''}${lastName}`
}
