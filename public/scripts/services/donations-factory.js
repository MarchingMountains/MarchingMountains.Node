myApp.factory('DonationsFactory', ['$http', function($http) {

  var selectedSchoolDonations = {};
  var currentUserDonations = {};
  var allDonations = {};

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var getCurrentUserDonations = function(currentUserId) {
    var promise = $http.get('/donations/user/' + currentUserId).then(function(response) {
      currentUserDonations.list = response.data;
    });
    return promise;
  };

  var factoryGetAllDonations = function() {
    var promise = $http.get('/donations/admin').then(function(response) {
      allDonations.list = response.data;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetSelectedSchoolDonations: function(selectedSchoolId) {
      return SelectedSchoolDonations(selectedSchoolId);
    },
    factoryGetCurrentUserDonations: function(currentUserId) {
      return getCurrentUserDonations(currentUserId);
    },
    getAllDonations: function() {
      return factoryGetAllDonations();
    },
    selectedSchoolDonations: selectedSchoolDonations,
    currentUserDonations: currentUserDonations,
    allDonations: allDonations
  };

  return publicFunctions;

}]);
