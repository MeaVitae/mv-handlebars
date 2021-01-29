'use strict'

export default ({ getCurrentClause, setCurrentClause }) => () => {
  const currentClause = getCurrentClause()
  const updatedSubMinor = currentClause[2] + 1

  setCurrentClause([currentClause[0], currentClause[1], updatedSubMinor])

  return [currentClause[0], currentClause[1], updatedSubMinor].join('.')
}
