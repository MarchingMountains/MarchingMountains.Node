myApp.factory('DonationsFactory', ['$http', '$window', '$localStorage', function($http, $window, $localStoage) {

  var selectedSchoolDonations = {};
  var currentUserDonations = {};
  var currentDonation;
  var userID = false;

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var getCurrentUserDonations = function() {
    userID = publicFunctions.userID;
    var promise = $http.get('/donations/user/' + userID).then(function(response) {
      if (response.data) {
        currentUserDonations.list = response.data;
      } else {
        alert("Please logIn to continue");
        delete $localStorage.CurrentUser;
        $window.location.href = '/#/home';
      }
    });
    return promise;
  };

  var submitDonation = function(donationInfo) {
    var promise = $http.post('/donations/school/' + donationInfo.school_id, donationInfo).then(function(){
      getCurrentUserDonations();
    });
    return promise;
  };

  var setDonationReceived = function(donationInfo) {
    var promise = $http.put('/donations/received/' + donationInfo.donation_id).then(function() {
    });
      return promise;
  };

  var publicFunctions = {
    factoryGetSelectedSchoolDonations: function(selectedSchoolId) {
      return SelectedSchoolDonations(selectedSchoolId);
    },
    factoryGetCurrentUserDonations: function() {
      return getCurrentUserDonations();
    },
    factorySubmitDonation: function(donationInfo) {
      return submitDonation(donationInfo);
    },
    factorySetDonationReceived: function(donationInfo) {
      return setDonationReceived(donationInfo);
    },
    selectedSchoolDonations: selectedSchoolDonations,
    currentUserDonations: currentUserDonations,
    currentDonation: currentDonation,
    userID: false
  };

  return publicFunctions;

}]);
