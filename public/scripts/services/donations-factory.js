myApp.factory('DonationsFactory', ['$http', function($http) {

  var selectedSchoolDonations = {};
  var currentUserDonations = {};

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var getCurrentUserDonations = function(currentUserId) {
    var promise = $http.get('/donations/user/' + currentUserId).then(function(response) {
      currentUserDonations.list = response.data;
      console.log('factory currentUserDonations: ', currentUserDonations.list);
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
    selectedSchoolDonations: selectedSchoolDonations,
    currentUserDonations: currentUserDonations
  };

  return publicFunctions;

}]);
