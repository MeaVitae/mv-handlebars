'use strict'

export default getCurrentClause => () => {
  const currentClause = getCurrentClause()

  if (currentClause[1] === 0) return currentClause.slice(0, 1)
  if (currentClause[2] === 0) return currentClause.slice(0, 2)

  return currentClause
}
