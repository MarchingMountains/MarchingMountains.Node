myApp.factory('DonationsFactory', ['$http', function($http) {

  var selectedSchoolDonations = {};
  var currentUserDonations = {};
  var currentDonation;
  var allDonations = {};

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var getCurrentUserDonations = function(currentUserId) {
    var promise = $http.get('/donations/user/' + currentUserId).then(function(response) {
      console.log(response.data);
      currentUserDonations.list = response.data;
    });
    return promise;
  };

  var submitDonation = function(donationInfo) {
    $http.post('/donations/school/' + donationInfo.school_id, donationInfo);
  };

  var setDonationReceived = function(donationInfo) {
    var promise = $http.put('/donations/received/' + donationInfo.donation_id).then(function(){
      console.log('updated donation_received to true');
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
    factorySubmitDonation: function(donationInfo) {
      return submitDonation(donationInfo);
    },
    factorySetDonationReceived: function(donationInfo) {
      return setDonationReceived(donationInfo);
    },
    getAllDonations: function() {
      return factoryGetAllDonations();
    },
    selectedSchoolDonations: selectedSchoolDonations,
    currentUserDonations: currentUserDonations,
    currentDonation: currentDonation,
    allDonations: allDonations
  };

  return publicFunctions;

}]);
