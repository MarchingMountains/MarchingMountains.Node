describe('testing the LoginController', function() {

    var deferred;
    var promise;   
    var mockUserService; 
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope', 'UserService', '$mdDialog', '$mdMedia','$window', '$location'
        bard.inject(
          'UserService',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog',
          '$window',
          '$location'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;
        mockUserService = {
          askForCurrentUser: function() {
            return {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
          },
           watchCurrentUser : function() {
                return CurrentUser;
            },
            logOutUser: function(){
              return promise;
            },
            postLogin:function(){
              return promise;
            },
            postRegister:function(){
              return promise;
            }
        };
    });

    it('should login', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('LoginController', { $scope: $scope, UserService:mockUserService});
        $scope.login(true);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should register', function(done) {
      var mockWindow = {
          location: { href:''}
        };
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('LoginController', { $scope: $scope, UserService:mockUserService, $window:mockWindow });
        $scope.register(true);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

        it('should not login', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('LoginController', { $scope: $scope, UserService:mockUserService});
        $scope.login(false);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

      it('should login with false response', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('LoginController', { $scope: $scope, UserService:mockUserService});
        $scope.login(true);
        //apply scope to resolve all the promises
        deferred.resolve(false);
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.loginErrorMessage).to.equal('Invalid Username or Password');
      done();
    });


    it('should not register', function(done) {
      var mockWindow = {
          location: { href:''}
        };
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('LoginController', { $scope: $scope, UserService:mockUserService, $window:mockWindow });
        $scope.register(false);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });
});

