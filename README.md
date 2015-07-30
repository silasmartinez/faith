# faith

### Provides a basic wrapper over Promise.all() returning an object instead of an array..

Current usage:

```
var Faith = require('faith')

var testOfFaith = new Faith;

testOfFaith.believe('firstPromise', promiseNumberOne)
testOfFaith.believe('secondPromise', promiseNumberTwo)

testOfFaith.manifest().then(
  function(resultObject){
    var resultsOfFirstPromise = resultsObject.firstPromise;
    var resultsOfSecondPromise = resultsObject.secondPromise;
  }
)
```
