
// big cleanup. You don't ALSO have to follow module pattern!

var dotPathModule = function (stringPath) {
    
    return function (obj) {

        var searchString = stringPath;
        console.log("Search string: " + searchString);

        var selectors = stringPath.split('.')

        //haha prolly don't need an additional assignment here
        var returnObj = obj;

        for (var selector in selectors) {

            for (var props in obj) {               
                // walk the tree via each selector like a map<map>
                returnObj = returnObj[selectors[selector]];

            }

        }

        return returnObj;
    }

}


// do the export so node is happy
module.exports = dotPathModule

