myApp.factory('SchoolsFactory', ['$http', '$window', function($http, $window) {

  var factorySchoolsList = {};
  var schoolSearchResults = {};
  var selectedInstrument = {};
  var selectedSchoolInfo = {};

  var getSchoolList = function(instrument) {
    var promise = $http.get('/schools/instruments/' + instrument.instrument_id).then(function(response) {
      schoolSearchResults.list = response.data;
      selectedInstrument.list = instrument;
    });
    return promise;
  };

  var setSelectedSchoolInfo = function(school) {
    selectedSchoolInfo.list = school;
  };

  var factoryGetDirectorSchools = function() {
    userID = publicFunctions.userID;
    var promise = $http.get('/schools/' + userID).then(function(response) {
      if (response.data) {
        factorySchoolsList.list = response.data;
      } else {
        console.log('failed to get account route');
        $window.location.href = '/';
      }
    });
    return promise;
  };

  var factoryPostDirectorSchools = function(school) {
    var promise = $http.post('/schools/' + userID, school).then(function(response) {
      if (response.data) {
      factoryGetDirectorSchools();
      } else {
        console.log('failed to get account route');
        $window.location.href = '/';
      }
    });
    return promise;
  };

  var factoryPutDirectorSchools = function(school) {
    var promise = $http.put('/schools/' + userID, school).then(function(response) {
      if (response.data) {
        factoryGetDirectorSchools();
      } else {
      console.log('failed to get account route');
      $window.location.href = '/';
      }
    });
    return promise;
  };

  var publicFunctions = {
    getDirectorSchools: function(userID) {
      return factoryGetDirectorSchools(userID);
    },
    postDirectorSchool: function(school) {
      return factoryPostDirectorSchools(school);
    },
    putDirectorSchool: function(school) {
      return factoryPutDirectorSchools(school);
    },
    schoolsList: function() {
      return factorySchoolsList.list;
    },
    factoryGetSchoolsList: function(instrument) {
      return getSchoolList(instrument);
    },
    factorySetSelectedSchoolInfo: function(school) {
      return setSelectedSchoolInfo(school);
    },
    schoolSearchResults: schoolSearchResults,
    selectedInstrument: selectedInstrument,
    selectedSchoolInfo: selectedSchoolInfo,
    directorSchools: factorySchoolsList,
    currentSchool: {},
    userID: false
  };

  return publicFunctions;
}]);
