'use strict'

export default ({ getTitleNumber }) => () => {
  const titleNumber = getTitleNumber()

  return `----- END OF SECTION ${titleNumber[0]}.${titleNumber[1]}.${titleNumber[2]} -----`
}
