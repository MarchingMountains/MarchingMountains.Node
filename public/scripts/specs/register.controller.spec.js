describe('testing the Register controller', function() {

    var deferred;
    var promise;   
    var mockUserService;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //'$scope', 'DonationsFactory', 'UserService',
        bard.inject(
          'UserService',
          '$rootScope',
          '$controller',
          '$mdDialog',
          '$httpBackend',
          '$q'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;

        mockUserService = 
         {
            postRegister: function() {
                return promise;
            }
        };
    });


    it('should submit account form', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('RegisterController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.username = 'username';
        $scope.password='password';
        $scope.register (true);
        
        deferred.resolve();
        $rootScope.$apply();
        done();
    });

     it('should not show as edited when submit account form fails', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('RegisterController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.username = 'username';
        $scope.password='password';
        $scope.register (true);
        
        deferred.reject();
        $rootScope.$apply();
        done();
    });

    it('should do nothin if account form not valid', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('RegisterController', { $scope: $scope, UserService:mockUserService });
        //apply scope to resolve all the promises
        $scope.register(false);
        $rootScope.$apply();
        done();
    });
});