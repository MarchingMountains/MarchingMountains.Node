myApp.factory('InstrumentsFactory', ['$http', function($http) {

  var instruments = {};
  var schools = {};

  var getInstrumentsList = function() {
    var promise = $http.get('/instruments').then(function(response) {
      instruments.list = response.data;
    });
    return promise;
  };

  var getSchoolList = function(id) {
    var promise = $http.get('/schools/instruments/' + id).then(function(response) {
      schools.list = response.data;
    });
    return promise;
  }

  var publicFunctions = {
    factoryGetInstrumentsList: function() {
      return getInstrumentsList();
    },
    factoryGetSchoolsList: function(id) {
      return getSchoolList(id);
    },
    instruments: instruments,
    schools: schools
  };

  return publicFunctions;

}]);
