var assert = require('assert')
var dotpath = require('./dotPathModule')

//basic functionality first
var testProjectRequirements = function () {

    

    var find = dotpath('part.key.attribute')

    var found = find({ part: { key: { attribute: "woop woop" } } })

    console.log(found) // outputs "woop woop"

    var not_found = find({}) || find() || find(null)

    console.log(not_found) // outputs undefined
}

var testEqualityWithValue = function (testValue) {

    var find = dotpath('part.key.attribute')

    var find = dotpath('part.key.attribute')

    var found = find({ part: { key: { attribute:testValue  } } })


    assert.strictEqual(found, testValue)
  
}

testProjectRequirements()
console.log( testEqualityWithValue("chocolate jetzt") )

// 
console.log( testEqualityWithValue(9));


