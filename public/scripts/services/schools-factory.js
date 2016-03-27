myApp.factory('SchoolsFactory', ['$http', function($http) {

  var schoolSearchResults = {};
  var selectedInstrumentName = {};

  var getSchoolList = function(name, id) {
    var promise = $http.get('/schools/instruments/' + id).then(function(response) {
      schoolSearchResults.list = response.data;
      selectedInstrumentName.list = name;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetSchoolsList: function(name, id) {
      return getSchoolList(name, id);
    },
    schoolSearchResults: schoolSearchResults,
    selectedInstrumentName: selectedInstrumentName
  };

  return publicFunctions;

}]);
