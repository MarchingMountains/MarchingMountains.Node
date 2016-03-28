myApp.factory('SchoolsFactory', ['$http', function($http) {

  var schoolSearchResults = {};
  var selectedInstrumentName = {};
  var selectedSchoolInfo = {};

  var getSchoolList = function(name, id) {
    var promise = $http.get('/schools/instruments/' + id).then(function(response) {
      schoolSearchResults.list = response.data;
      selectedInstrumentName.list = name;
    });
    return promise;
  };

  var setSelectedSchoolInfo = function(school) {
    selectedSchoolInfo.list = school;
    console.log('selectedSchoolInfo in factory: ', selectedSchoolInfo);
  };

  var publicFunctions = {
    factoryGetSchoolsList: function(name, id) {
      return getSchoolList(name, id);
    },
    factorySetSelectedSchoolInfo: function(school) {
      return setSelectedSchoolInfo(school);
    },
    schoolSearchResults: schoolSearchResults,
    selectedInstrumentName: selectedInstrumentName,
    selectedSchoolInfo: selectedSchoolInfo
  };

  return publicFunctions;

}]);
