myApp.factory('SchoolsFactory', ['$http', function($http) {

  var schools = {};
  var selectedInstrumentName = {};

  var getSchoolList = function(name, id) {
    var promise = $http.get('/schools/instruments/' + id).then(function(response) {
      schools.list = response.data;
      selectedInstrumentName.list = name;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetSchoolsList: function(name, id) {
      return getSchoolList(name, id);
    },
    schools: schools,
    selectedInstrumentName: selectedInstrumentName
  };

  return publicFunctions;

}]);
