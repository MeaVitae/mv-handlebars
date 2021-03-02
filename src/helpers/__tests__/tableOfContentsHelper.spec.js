'use strict'

import Handlebars from 'handlebars'
import majorNumberHelper from '../majorNumberHelper'

test('something', () => {
  let clauseArray = [0, 0, 0]
  const tableOfContentsArray = []

  const getCurrentClause = () => clauseArray
  const setCurrentClause = updatedTitleNumber => { clauseArray = updatedTitleNumber }

  const addEntryToTOC = entry => {
    tableOfContentsArray.push(entry)
  }

  Handlebars.registerHelper('majorNum', majorNumberHelper({ getCurrentClause, setCurrentClause, addEntryToTOC }))

  const source = `
    <nav id="toc"></nav>

    {{majorNum "Title 1"}}
    {{majorNum}}
    {{majorNum ""}}
    {{majorNum "Title 2"}}
  `

  const result = Handlebars.compile(source)({})

  const doc = document.implementation.createHTMLDocument()
  doc.body.setAttribute('id', 'body')
  doc.getElementById('body').innerHTML = result

  if (doc.getElementById('toc')) {
    const header = document.createElement('h2')
    header.innerHTML = 'Table of Contents'

    const br = document.createElement('br')
    doc.getElementById('toc').appendChild(header)
    doc.getElementById('toc').appendChild(br)

    const ol = document.createElement('ol')

    tableOfContentsArray.forEach(({ title }) => {
      const li = document.createElement('li')
      li.innerHTML = `${title}`
      ol.appendChild(li)
    })

    doc.getElementById('toc').appendChild(ol)
  }

  const revisedResult = doc.getElementById('body').innerHTML
  console.log(revisedResult)

  // console.log(Handlebars.compile(revisedResult)({}))
})
