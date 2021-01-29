'use strict'

export default ({ getCurrentClause }) => () => {
  const currentClause = getCurrentClause()

  return `----- END OF CLAUSE ${currentClause[0]}.${currentClause[1]}.${currentClause[2]} -----`
}
