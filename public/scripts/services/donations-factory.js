myApp.factory('DonationsFactory', ['$http', '$window', function($http, $window) {

  var selectedSchoolDonations = {};
  var currentUserDonations = {};
  var currentDonation;

  var SelectedSchoolDonations = function(selectedSchoolId) {
    var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
      selectedSchoolDonations.list = response.data;
    });
    return promise;
  };

  var getCurrentUserDonations = function(currentUserId) {
    var promise = $http.get('/donations/user/' + currentUserId).then(function(response) {
      if (response.data) {
        currentUserDonations.list = response.data;
      } else {
        $window.location.href = '/';
      }
    });
    return promise;
  };

  var submitDonation = function(donationInfo) {
    console.log("submitting a donation!");
    console.log("we need to redirect nonuser away from this button!, its reject on the back end if you are not a user but not on front end");
    $http.post('/donations/school/' + donationInfo.school_id, donationInfo);
  };

  var setDonationReceived = function(donationInfo) {
    var promise = $http.put('/donations/received/' + donationInfo.donation_id).then(function() {
      if (response.data === false) {
        $window.location.href = '/';
      }
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
    selectedSchoolDonations: selectedSchoolDonations,
    currentUserDonations: currentUserDonations,
    currentDonation: currentDonation
  };

  return publicFunctions;

}]);
