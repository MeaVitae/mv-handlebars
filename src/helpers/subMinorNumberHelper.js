'use strict'

export default ({ getTitleNumber, setTitleNumber }) => () => {
  const titleNumber = getTitleNumber()
  const updatedSubMinor = titleNumber[2] + 1

  setTitleNumber([titleNumber[0], titleNumber[1], updatedSubMinor])

  return [titleNumber[0], titleNumber[1], updatedSubMinor].join('.')
}
