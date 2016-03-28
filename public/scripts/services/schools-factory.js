myApp.factory('SchoolsFactory', ['$http', function($http) {
    var userID = 1;
    var factorySchoolsList = undefined;

    //var getUserInfo = function() {
    //    var promise = $http.get('/user').then(function(response) {
            //if(response.data) {
            //    userInfo = {
            //        userName: response.data.username,
            //        userParks: response.data.parks
            //    };
            //    publicApi.userID = response.data._id;
            //    publicApi.loggedIn = true;
            //
            //} else {
            //    $window.location.href = '/#/login';
            //}
    //    });
    //    return promise;
    //};

    var factoryGetDirectorSchools = function() {
        var promise = $http.get('/schools/' + userID).then(function(response) {
            //console.log('response: ', response);
            factorySchoolsList = response.data;
        });
        return promise;
    };

    var factoryPostDirectorSchools = function(school) {
        var promise = $http.post('/schools/' + userID, school).then(function(response) {
            //console.log('response: ', response);
        });
        return promise;
    };

    var publicFunctions = {
        getUser: function() {
            return getUserInfo();
        },
        getDirectorSchools: function() {
            return factoryGetDirectorSchools();
        },
        postDirectorSchool: function(school) {
            return factoryPostDirectorSchools(school);
        },
        schoolsList: function() {
            return factorySchoolsList;
        }
    };

    return publicFunctions;

}]);