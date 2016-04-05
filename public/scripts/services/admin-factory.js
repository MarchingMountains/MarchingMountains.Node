myApp.factory('AdminFactory', ['$http', function($http) {
    var allSchools = {};
    var allDonations = {};
    var allUsers = {};

    var factoryGetAllSchools = function() {
        var promise = $http.get('/admin/schools').then(function(response) {
            allSchools.list = response.data;
        });
        return promise;
    };

    var factoryVerifySchool = function(schoolID, status) {
        var promise = $http.put('/admin/verify-school/' + schoolID, status).then(function(response) {
            factoryGetAllSchools();
        });
        return promise;
    };

    var factoryGetAllDonations = function() {
        var promise = $http.get('/admin/donations').then(function(response) {
            allDonations.list = response.data;
        });
        return promise;
    };

    var factoryGetAllUsers = function() {
        var promise = $http.get('/admin/users').then(function(response) {
            allUsers.list = response.data;
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