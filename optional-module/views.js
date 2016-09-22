'use strict'

let marko

module.exports = function ($marko) {
  marko = $marko
  const firstView = require(require.resolve('./templates/first.marko'))
  const secondView = marko.load(require.resolve('./templates/second.marko'))
  return {
    firstView,
    secondView
  }
}
