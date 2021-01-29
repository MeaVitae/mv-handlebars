'use strict'

export default ({ getCurrentClause, setCurrentClause }) => () => {
  const currentClause = getCurrentClause()
  const updatedMinor = currentClause[1] + 1

  setCurrentClause([currentClause[0], updatedMinor, 0])

  return [currentClause[0], updatedMinor].join('.')
}
