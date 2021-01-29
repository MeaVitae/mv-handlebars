'use strict'

export default ({ getTitleNumber }) => () => {
  const titleNumber = getTitleNumber()

  return `----- END OF CLAUSE ${titleNumber[0]}.${titleNumber[1]} -----`
}
