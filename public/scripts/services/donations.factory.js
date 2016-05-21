(function() {
'use strict';

angular.module('myApp').factory('DonationsFactory', ['$http',  function($http) {

    var selectedSchoolDonations = {};
    var currentUserDonations = {};
    var currentDonation;
    var userID = false;

    var SelectedSchoolDonations = function(selectedSchoolId) {
        var promise = $http.get('/donations/school/' + selectedSchoolId).then(function(response) {
            selectedSchoolDonations.list = (response.data) ? response.data : undefined;
        });
        return promise;
    };

    var getCurrentUserDonations = function() {
        userID = publicFunctions.userID;
        var promise = $http.get('/donations/user/' + userID).then(function(response) {
            currentUserDonations.list = (response.data) ? response.data : undefined;
        });
        return promise;
    };

    var submitDonation = function(donationInfo) {
        var promise = $http.post('/donations/school/' + donationInfo.school_id, donationInfo).then(function() {
            getCurrentUserDonations();
        });
        return promise;
    };

    var setDonationReceived = function(donationInfo) {
        return $http.put('/donations/received/' + donationInfo.donation_id);
    };

    var publicFunctions = {
        factoryGetSelectedSchoolDonations: function(selectedSchoolId) {
            return new SelectedSchoolDonations(selectedSchoolId);
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
})();
