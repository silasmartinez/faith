
var Faith = function () {
  this.beliefs = {};
  this.promises = [];
};

Faith.prototype.believe = function (propertyName, promiseObject) {
  var index = this.promises.push(promiseObject) - 1;
  this.beliefs[index] = propertyName;
}

Faith.prototype.manifest = function () {
  var beliefSet = this.beliefs;
  return Promise.all(this.promises)
    .then(
    function (results) {
      var materialized = {};

      for (var i = 0; i < results.length; i++){
        var propName = beliefSet[i+''];
        materialized[propName] = results[i]
      }
      return materialized;
    }
  ).catch(function (err) {
      throw err;
    })
}


module.exports = Faith;


