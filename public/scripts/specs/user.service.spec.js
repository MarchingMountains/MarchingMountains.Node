//ian-user-service-spec.js
describe('Service: userService', function() {

    beforeEach(function() {
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$http', '$window', '$localStorage', '$sessionStorage
        bard.inject(
          'UserService',
      	  '$rootScope',
          '$httpBackend',
          '$window',
          '$localStorage',
          '$sessionStorage'
        );
    });

    afterEach(function() {
        //Clear local storage after each test
        $window.localStorage.clear();
    });

    it('should return the CurrentUser', function(done) {
        //object to store test variables, same values as mock server
        var mockUser = {
                isLogged: true,
                factoryUserName: 'hi@here.com',
                factoryFirstName: 'Bob',
                factoryUserId: '1'
            };
        //Setup $http backend to return mock results
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('POST', '/').respond({email: 'hi@here.com', first_name: 'Bob', user_id: '1' });
        //call the method we are testing
        UserService.postLogin();
        //http://www.sitepoint.com/understanding-angulars-apply-digest/
        $rootScope.$apply();
        //flush the response from the fake http server
        $httpBackend.flush();
        //Get the user from teh service
        var currentUser = UserService.askForCurrentUser();
        //Now write asserstions comparing what we expect the values to be against what is returned from the service
        expect(currentUser.factoryUserName).to.equal(mockUser.factoryUserName);
        expect(currentUser.isLogged).to.equal(mockUser.isLogged);
        expect(currentUser.factoryFirstName).to.equal(mockUser.factoryFirstName);
        expect(currentUser.factoryUserId).to.equal(mockUser.factoryUserId);
        //call done on the test
        done();
    });

});
