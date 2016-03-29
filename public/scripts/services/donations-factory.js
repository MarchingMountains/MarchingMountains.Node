myApp.factory('DonationsFactory', ['$http', function($http) {

  var selectedSchoolDonations = {};

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetSelectedSchoolDonations: function(selectedSchoolId) {
      return SelectedSchoolDonations(selectedSchoolId);
    },
    selectedSchoolDonations: selectedSchoolDonations
  };

  return publicFunctions;

}]);
