'use strict'

import mvHandlebars from '../index'

test('TableOfContent', () => {
  const source = `
    <nav id="toc"></nav>

    {{majorNum "Title 1"}} Title One
    {{majorNum}}
    {{majorNum ""}}
    {{majorNum "Title 4"}} Title Four
  `

  const context = {}

  const result = mvHandlebars(source, context)

  expect(result).toEqual(`
    <nav id="toc"><h2>Table of Contents</h2><ol><li>Title 1</li><li></li><li></li><li>Title 4</li></ol></nav>

    1 Title One
    2
    3
    4 Title Four
  `)
})
