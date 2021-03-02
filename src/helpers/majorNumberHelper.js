'use strict'

export default ({ getCurrentClause, setCurrentClause, addEntryToTOC }) => entry => {
  const currentClause = getCurrentClause()
  const updatedMajor = currentClause[0] + 1

  setCurrentClause([updatedMajor, 0, 0])

  addEntryToTOC({
    clause: updatedMajor,
    title: typeof entry === 'string' ? entry : ''
  })

  return updatedMajor.toString()
}
