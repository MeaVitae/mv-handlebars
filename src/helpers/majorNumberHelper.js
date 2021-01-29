'use strict'

export default ({ getCurrentClause, setCurrentClause }) => () => {
  const currentClause = getCurrentClause()
  const updatedMajor = currentClause[0] + 1

  setCurrentClause([updatedMajor, 0, 0])

  return updatedMajor.toString()
}
