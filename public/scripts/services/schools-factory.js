myApp.factory('SchoolsFactory', ['$http', '$window', function($http, $window) {

  var factorySchoolsList = {};
  var schoolSearchResults = {};
  var selectedInstrument = {};
  var selectedSchoolInfo = {};
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
      if (response.data) {
        factorySchoolsList.list = response.data;
        buildDonations(factorySchoolsList);
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
    userID: false,
    directorDonations: directorDonations
  };

  return publicFunctions;
}]);
