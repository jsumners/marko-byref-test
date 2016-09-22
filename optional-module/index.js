'use strict'

let marko

module.exports.plugin = function ($marko) {
  marko = $marko
  const views = require(require.resolve('./views'))(marko)
  return {
    render (condition) {
      return (!condition) ? views.firstView() : views.secondView()
    }
  }
}
