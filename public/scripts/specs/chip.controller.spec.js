describe('testing the chip controller', function() {

    var deferred;
    var promise;   
    var mockAdminFactory;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope, $http, $mdDialog, $mdMedia, AdminFactory
        bard.inject(
          'AdminFactory',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;

        mockInstrumentsFactory = 
         {
            instruments :  {
                  list:[{instrument:'Trumpet'},{instrument:'Clarinet'}]
            },
            factoryGetInstrumentsList: function() {
               return promise;
            },
            putInstrument : function(instrument) {
               return promise;
            },
            postInstrument : function(instrument) {
               return promise;
            },
            deleteInstrument : function(instrument) {
               return promise;
            }
        };
    });

    it('should transform chips', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ChipController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory });
        var chip = controller.transformChip({chip:'chip'});
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(chip).to.not.be.undefined;
        expect(chip.chip).to.equal('chip');
      done();
    });

    it('should not transform chips', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ChipController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory });
        var chip = controller.transformChip(true);
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(chip).to.be.undefined;
      done();
    });

    it('should query', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ChipController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory });
        var results = controller.querySearch('trumpet');
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(results).to.not.be.undefined;
        expect(results[0]._lowername).to.equal('trumpet');
      done();
    });

    it('should return empty array when no query', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('ChipController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory });
        var results = controller.querySearch(null);
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(results).to.not.be.undefined;
        expect(results).to.be.empty;
      done();
    });

});

