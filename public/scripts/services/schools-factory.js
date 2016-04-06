myApp.factory('SchoolsFactory', ['$http', function($http) {

  var factorySchoolsList = {};
  var schoolSearchResults = {};
  var selectedInstrument = {};
  var selectedSchoolInfo = {};
  var allSchools = {};
  var userID = false;


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
    console.log('factoryUserId', userID);
    var promise = $http.get('/schools/' + userID).then(function(response) {
      console.log('inside factoryGetDirectorSchools');
      factorySchoolsList.list = response.data;
    });
    return promise;
  };

  var factoryGetAllSchools = function() {
    var promise = $http.get('/schools/admin').then(function(response) {
      allSchools.list = response.data;
    });
    return promise;
  };

  var factoryPostDirectorSchools = function(school) {
    var promise = $http.post('/schools/' + userID, school).then(function(response) {
      factoryGetDirectorSchools();
    });
    return promise;
  };

  var factoryPutDirectorSchools = function(school) {
    var promise = $http.put('/schools/' + userID, school).then(function(response) {
      factoryGetDirectorSchools();
    });
    return promise;
  };

  var factoryVerifySchool = function(schoolID, status) {
    var promise = $http.put('/schools/verify/' + schoolID, status).then(function(response) {
      factoryGetAllSchools();
    });
    return promise;
  };

  var publicFunctions = {
    getDirectorSchools: function(userID) {
      return factoryGetDirectorSchools(userID);
    },
    getAllSchools: function() {
      return factoryGetAllSchools();
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
    verifySchool: function(schoolID, status) {
      return factoryVerifySchool(schoolID, status);
    },
    schoolSearchResults: schoolSearchResults,
    selectedInstrument: selectedInstrument,
    selectedSchoolInfo: selectedSchoolInfo,
    directorSchools: factorySchoolsList,
    currentSchool: {},
    allSchools: allSchools,
    userID: false
  };

  return publicFunctions;
}]);
