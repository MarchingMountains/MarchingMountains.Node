myApp.factory('InstrumentsFactory', ['$http', function($http) {

  var instruments = {};

  var getInstrumentsList = function() {
    var promise = $http.get('/instruments').then(function(response) {
      console.log('response: ', response);
      // instruments.list = response.data;
    });
  };

  var publicFunctions = {
    factoryGetInstrumentsList: function() {
      return getInstrumentsList();
    }
  };

  return publicFunctions;

}]);
