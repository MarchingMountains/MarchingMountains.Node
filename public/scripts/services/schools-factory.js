myApp.factory('SchoolsFactory', ['$http', function($http) {

  var schools = {};

  var getSchoolList = function(id) {
    var promise = $http.get('/schools/instruments/' + id).then(function(response) {
      console.log('schools list:', response);
      schools.list = response.data;
    });
    return promise;
  };

  var publicFunctions = {
    factoryGetSchoolsList: function(id) {
      return getSchoolList(id);
    },
    schools: schools
  };

  return publicFunctions;

}]);
