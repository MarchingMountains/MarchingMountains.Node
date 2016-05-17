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
            },
            putDirectorSchool: function(school){
              return promise;
            },
            schoolsList : function(){
              return [{school:'school'}];
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

    it('should transformChip', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        var chip = $scope.transformChip({chip:'chip'});
        expect(controller).to.not.be.undefined;
        expect(chip.chip).to.equal('chip');
        done();
    });

    it('should not transformChip when not an object', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        var chip = $scope.transformChip(false);
        expect(chip).to.be.undefined;
        done();
    });

    it('should not set scope when no current school', function(done) {
      mockSchoolsFactory = 
         {
            currentSchool : {}
        };
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        expect(controller).to.not.be.undefined;
        expect($scope.name).to.be.undefined;
        done();
    });

    it('should save a school', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        expect(controller).to.not.be.undefined;
        $scope.save(true);
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.schools).to.not.be.undefined;
        done();
    });

  it('should not save a school if invalid', function(done) {
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        expect(controller).to.not.be.undefined;
        $scope.save(false);
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.schools).to.be.undefined;
        done();
    });

    it('should save a school if valid and exists', function(done) {
        $httpBackend.when('POST','/schools/email').respond();

      mockSchoolsFactory = 
        {
            currentSchool : {},
            postDirectorSchool: function(school){
              return promise;
            },
            directorSchools : function(){
              return [{school:'school'}];
            }
        };
        $scope.selectedState = { state_id:1 };
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        expect(controller).to.not.be.undefined;
        $scope.save(true);
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.schools).to.not.be.undefined;
        done();
    });

    it('should save a school if valid and exists and set $mdMedia sm', function(done) {
        $httpBackend.when('POST','/schools/email').respond();
        $mdMedia = function(a){
          if (a==='xs')
            return false;
        }

      mockSchoolsFactory = 
        {
            currentSchool : {},
            postDirectorSchool: function(school){
              return promise;
            },
            directorSchools : function(){
              return [{school:'school'}];
            }
        };
        $scope.selectedState = { state_id:1 };
         //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AddSchoolController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory, $mdMedia:$mdMedia });
        expect(controller).to.not.be.undefined;
        $scope.save(true);
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.schools).to.not.be.undefined;
        done();
    });
});