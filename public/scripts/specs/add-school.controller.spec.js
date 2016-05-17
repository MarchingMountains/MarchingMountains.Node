describe('testing the add school controller', function() {

    var deferred;
    var promise;   
    var mockSchoolsFactory;
    var mockInstrumentsFactory;
    
    beforeEach(function() {
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope, $http, $mdDialog, $mdMedia, SchoolsFactory, InstrumentsFactory
        bard.inject(
          'SchoolsFactory',
          'InstrumentsFactory',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$mdDialog',
          '$mdMedia',
          '$q'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;

        mockSchoolsFactory = 
         {
            watchCurrentUser : function() {
                return {
                    factoryUserId:1
                };
            }
        };
        mockInstrumentsFactory = 
         {
            watchCurrentUser : function() {
                return {
                    factoryUserId:1
                };
            }
        };
    });

    it('should load instrumets from the server', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        done();
    });
});
