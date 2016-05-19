describe('testing the HeaderController', function() {

    var deferred;
    var promise;   
    var mockUserService; 
    
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
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;
        var CurrentUser = {
          isLogged: false,
          factoryUserName: undefined,
          factoryFirstName: undefined,
          factoryUserId: undefined
        };
        mockUserService = {
          askForCurrentUser: function() {
            return {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
          },
           watchCurrentUser : function() {
                return CurrentUser;
            },
            logOutUser: function(){
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
        var controller = $controller('HeaderController', {$window:mockWindow, $scope: $scope, UserService:mockUserService });
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

