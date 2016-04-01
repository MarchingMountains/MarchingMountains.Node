myApp.factory('InstrumentsFactory', ['$http', function($http) {

  var instruments = {};
  var factoryStatesList = {};

  var getInstrumentsList = function() {
    var promise = $http.get('/instruments').then(function(response) {
      instruments.list = response.data;
      console.log(instruments);
    });
    return promise;
  };

  var factoryGetStates = function() {
    var promise = $http.get('/states').then(function(response) {
      factoryStatesList.list = response.data;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetInstrumentsList: function() {
      return getInstrumentsList();
    },
    getStates: function() {
      return factoryGetStates();
    },
    instruments: instruments,
    statesList: factoryStatesList,
    currentInstruments: []
  };

  return publicFunctions;

}]);
