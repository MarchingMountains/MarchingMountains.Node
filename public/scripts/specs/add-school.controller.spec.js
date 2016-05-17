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
            currentSchool : {
                school_name:'testschool'
            }
        };

        mockInstrumentsFactory = 
         {
            instruments :  {
                  list:[{instrument:'Trumpet'}]
            }
        };
    });

    it('should load instrumets from the server', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        expect(controller).to.not.be.undefined;
        done();
    });
});