myApp.factory('InstrumentsFactory', ['$http', function($http) {

  var instruments = {};

  var getInstrumentsList = function() {
    var promise = $http.get('/instruments').then(function(response) {
      instruments.list = response.data;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetInstrumentsList: function() {
      return getInstrumentsList();
    },
    instruments: instruments
  };

  return publicFunctions;

}]);
