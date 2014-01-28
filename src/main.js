var assert = require('assert')
var dotpath = require('./dotPathModule')


var find = dotpath('part.key.attribute')

var found = find({ part: { key: { attribute: "woop woop" } } })

console.log(found) // outputs "woop woop"

var not_found = find({}) || find() || find(null)

console.log(not_found) // outputs undefined