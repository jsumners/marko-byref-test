'use strict'

const marko = require('marko')
require('marko/node-require').install()
const markoCompiler = require('marko/compiler')
markoCompiler.defaultOptions.writeToDisk = false

const optionalModule = require(require.resolve('../optional-module')).plugin(marko)
console.log(optionalModule.render(false))
console.log(optionalModule.render(true))
