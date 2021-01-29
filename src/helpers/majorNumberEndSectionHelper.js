'use strict'

export default ({ getCurrentClause }) => () => `----- END OF CLAUSE ${getCurrentClause()[0]} -----`
