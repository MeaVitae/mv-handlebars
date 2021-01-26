'use strict'

export default ({ getTitleNumber, setTitleNumber }) => () => {
  const titleNumber = getTitleNumber()
  const updatedMajor = titleNumber[0] + 1

  setTitleNumber([updatedMajor, 0, 0])

  return updatedMajor.toString()
}
