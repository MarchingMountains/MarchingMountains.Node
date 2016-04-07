myApp.factory('AdminFactory', ['$http', '$window', function($http, $window) {
    var allSchools = {};
    var allDonations = {};
    var allUsers = {};

    var factoryGetAllSchools = function() {
        var promise = $http.get('/admin/schools').then(function(response) {
            if (response.data) {
            allSchools.list = response.data;
            } else {
                $window.location.href = '/';
            }
        });
        return promise;
    };

    var factoryVerifySchool = function(schoolID, status) {
        var promise = $http.put('/admin/verify-school/' + schoolID, status).then(function(response) {
            if (response.data) {
            factoryGetAllSchools();
            } else {
                $window.location.href = '/';
            }
        });
        return promise;
    };

    var factoryGetAllDonations = function() {
        var promise = $http.get('/admin/donations').then(function(response) {
            if (response.data) {
            allDonations.list = response.data;
            } else {
                $window.location.href = '/';
            }
        });
        return promise;
    };

    var factoryGetAllUsers = function() {
        var promise = $http.get('/admin/users').then(function(response) {
            if (response.data) {
            allUsers.list = response.data;
            } else {
                $window.location.href = '/';
            }
        });
        return promise;
    };

    var publicFunctions = {
        getAllSchools: function() {
            return factoryGetAllSchools();
        },
        verifySchool: function(schoolID, status) {
            return factoryVerifySchool(schoolID, status);
        },
        getAllDonations: function() {
            return factoryGetAllDonations();
        },
        getAllUsers: function() {
            return factoryGetAllUsers();
        },
        allSchools: allSchools,
        allDonations: allDonations,
        allUsers: allUsers,
        currentSchool: {}
    };

    return publicFunctions;
}]);