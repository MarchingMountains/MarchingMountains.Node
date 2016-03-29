myApp.factory('SchoolsFactory', ['$http', function($http) {
    var userID = 5;
    //var factorySchoolsList = [];
    var factorySchoolsList = {};

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
            //factorySchoolsList = response.data;
            factorySchoolsList.list = response.data;
        });
        return promise;
    };

    var factoryPostDirectorSchools = function(school) {
        var promise = $http.post('/schools/' + userID, school).then(function(response) {
            //console.log('response: ', response);
            factoryGetDirectorSchools();
            factorySchoolsList.list = response.data;
        });
        return promise;
    };

    var factoryPutDirectorSchools = function(school) {
        var promise = $http.put('/schools/' + userID, school).then(function(response) {
            //console.log('response: ', response);
            factoryGetDirectorSchools();
            factorySchoolsList.list = response.data;
        });
        return promise;
    };

    var publicFunctions = {
        //getUser: function() {
        //    return getUserInfo();
        //},
        getDirectorSchools: function() {
            return factoryGetDirectorSchools();
        },
        postDirectorSchool: function(school) {
            return factoryPostDirectorSchools(school);
        },
        putDirectorSchool: function(school) {
            return factoryPutDirectorSchools(school);
        },
        schoolsList: function() {
            return factorySchoolsList.list;
        },
        allSchools: factorySchoolsList,
        currentSchool: {}
        //schoolsList: factorySchoolsList
    };

    return publicFunctions;

}]);