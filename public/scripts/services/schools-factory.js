myApp.factory('SchoolsFactory', ['$http', function($http) {

  var factorySchoolsList = {};
  var schoolSearchResults = {};
  var selectedInstrument = {};
  var selectedSchoolInfo = {};
  var allSchools = {};
  var userID = false;
  var directorDonations = {};

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
    directorDonations.list = [];
    userID = publicFunctions.userID;
    var promise = $http.get('/schools/' + userID).then(function(response) {
      factorySchoolsList.list = response.data;
      buildDonations(factorySchoolsList);
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

  var buildDonations = function (factorySchoolsList) {
		for(var i = 0; i < factorySchoolsList.list.length; i++) {
			if(factorySchoolsList.list[i].donations !== undefined) {
				for(var j = 0; j < factorySchoolsList.list[i].donations.length; j++) {
					directorDonations.list.push({
						school_name: factorySchoolsList.list[i].school_name,
						instrument_name: factorySchoolsList.list[i].donations[j].instrument,
						date: factorySchoolsList.list[i].donations[j].date,
						donation_id: factorySchoolsList.list[i].donations[j].donation_id,
						donation_received: factorySchoolsList.list[i].donations[j].donation_received,
						donor_email: factorySchoolsList.list[i].donations[j].user_email
					});
				}
			}
		}
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
    userID: false,
    directorDonations: directorDonations
  };

  return publicFunctions;
}]);
