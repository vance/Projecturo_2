Projecturo_2
============

### Goal

A lightweight implimentation of dot syntax string searching as an NPM installable module.



### Installing with NPM

Get the lastest version via NPM and install it globally

npm install -g vance-dot-path-search



### Running with browserify

An alternate to running in REPL might be to install browserfy and loading test.html in the browser


### Initializing a Search String

Invoke the module constuctor with `dotPathModule('trunk.branch.attribute')`. This will return an object that you can supply a search term to.

### Searching on object

Once you've initialized your object, you can search for an object match as defined in the string.

invoking the result with `dotPathModule({trunk : { branch : { attribute: 'hooray!' }}})`


### Putting it all together


```javascript

var dotpath = require('dotPathModule')

var find = dotpath('trunk.branch.atribute')

var found = find({trunk: {branch: {attribute: "hooray!"} }})

console.log(found) // outputs "hooray!"

var not_found = find({}) || find() || find(null)

console.log(not_found) // outputs undefined because there's no match

```


### Testing the dotPathModule


Included with the module download/install is a test.js file. Running from the project directory you can perform a number of tests. It is on the roadmap to include these test executions in the packaje.json to make our lives easier. Exceptions will be thrown if the tests do not pass.

Included tests are `testProjectRequirements()` and `testEqualityWithValue(value)` where the supplied object will  be tested with strict equivalence.












