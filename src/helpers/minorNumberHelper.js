'use strict'

export default ({ getTitleNumber, setTitleNumber }) => () => {
  const titleNumber = getTitleNumber()
  const updatedMinor = titleNumber[1] + 1

  setTitleNumber([titleNumber[0], updatedMinor, 0])

  return [titleNumber[0], updatedMinor].join('.')
}
