describe('Service: userService', function() {

    beforeEach(function() {
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        bard.inject(
            'UserService',
            '$rootScope',
            '$httpBackend',
            '$window',
            '$sessionStorage'
        );
    });

    afterEach(function() {
        //Clear local storage after each test
        $window.sessionStorage.clear();
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
        var currentUser = $sessionStorage.CurrentUser;
        //Now write asserstions comparing what we expect the values to be against what is returned from the service
        expect(currentUser.factoryUserName).to.equal(mockUser.factoryUserName);
        expect(currentUser.isLogged).to.equal(mockUser.isLogged);
        expect(currentUser.factoryFirstName).to.equal(mockUser.factoryFirstName);
        expect(currentUser.factoryUserId).to.equal(mockUser.factoryUserId);
        //call done on the test
        done();
    });

    it('should return false with bad credentials', function(done) {
        //object to store test variables, same values as mock server
        //Setup $http backend to return mock results
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('POST', '/').respond(false);
        //call the method we are testing
        UserService.postLogin();
        //http://www.sitepoint.com/understanding-angulars-apply-digest/
        $rootScope.$apply();
        //flush the response from the fake http server
        $httpBackend.flush();
        //Get the user from teh service
        var currentUser = $sessionStorage.CurrentUser;
        //Now write asserstions comparing what we expect the values to be against what is returned from the service
        expect(currentUser).to.equal(undefined);
        //call done on the test
        done();
    });

    it('should register a user', function(done) {
        var mockUser = {
            isLogged: true,
            factoryUserName: 'hi@here.com',
            factoryFirstName: 'Bob',
            factoryUserId: '1'
        };
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('POST', '/register').respond({email: 'hi@here.com', first_name: 'Bob', user_id: '1' });
        UserService.postRegister();
        $rootScope.$apply();
        $httpBackend.flush();
        var currentUser = $sessionStorage.CurrentUser;
        expect(currentUser.factoryUserName).to.equal(mockUser.factoryUserName);
        expect(currentUser.isLogged).to.equal(mockUser.isLogged);
        expect(currentUser.factoryFirstName).to.equal(mockUser.factoryFirstName);
        expect(currentUser.factoryUserId).to.equal(mockUser.factoryUserId);
        function persistMockSession() {
            $sessionStorage.CurrentUser = currentUser;
        }
        persistMockSession();
        expect($sessionStorage.CurrentUser).to.equal(currentUser);
        //call done on the test
        done();
    });

    //This test is not currently checking for location change.
    it('should log out a user', function(done) {
        var mockUser = {
            isLogged: true,
            factoryUserName: 'hi@here.com',
            factoryFirstName: 'Bob',
            factoryUserId: '1'
        };
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('POST', '/logout').respond({uri:'/#/home'});
        UserService.logOutUser();
        $rootScope.$apply();
        $httpBackend.flush();
        var currentUser = $sessionStorage.CurrentUser;
        mockUser = currentUser;
        expect(mockUser).to.be.undefined;
        function persistMockSession() {
            $sessionStorage.CurrentUser = currentUser;
        }
        persistMockSession();
        expect($sessionStorage.CurrentUser).to.equal(currentUser);
        done();
    });
});

