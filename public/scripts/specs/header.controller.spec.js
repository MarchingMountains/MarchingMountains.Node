describe('testing the HeaderController', function() {

    var deferred;
    var promise;   
    var mockUserService; 
    var session;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope, $http, $mdDialog, $mdMedia, UserService,  $localStorage, $window
        bard.inject(
          'UserService',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog',
          '$window',
          '$sessionStorage'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('GET', '../views/templates/register.html').respond({});
        $httpBackend.when('GET', '../views/templates/login.html').respond({});
        
        session = $sessionStorage;

         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;
        var CurrentUser = {
          factoryFirstName: 'Ian',
          isLogged: false,
          factoryUserName: 'ian@ian.com',
          factoryUserId: 1
        };
        session.CurrentUser = CurrentUser;
        mockUserService = {
            logOutUser: function(){
              session.CurrentUser = null;
              return promise;
            }
        };

    });

    it('should have a controller', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should display a username', function(done) {
      var sample = {first_name: '', factoryUserName: 'ian@ian.com',}
      session.CurrentUser = sample;
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', { $scope: $scope, $sessionStorage:session });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        session.CurrentUser.first_name = 'Ian';
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.displayedUser).to.equal('ian@ian.com');
      done();
    });

    it('should not display a username', function(done) {
      session.CurrentUser = undefined;
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', { $scope: $scope, $sessionStorage:session });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.displayedUser).to.equal(undefined);
      done();
    });

     it('should openLoginModal', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.openLoginModal({});
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

      it('should openRegisterModal', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.openRegisterModal({});
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

       it('should logout', function(done) {
        var mockWindow = {
          location: { href:''}
        };
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('HeaderController', {$window:mockWindow, $scope: $scope, UserService:mockUserService, $sessionStorage:session });
        //apply scope to resolve all the promises
        $scope.logOut();
        deferred.resolve({data:{uri:'hi'}});
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.first_name).to.be.undefined;
        expect($scope.user_name).to.be.undefined;
        expect($scope.isLoggedIn).to.equal(false);
        expect($scope.userID).to.be.undefined;
      done();
    });
});

