describe('testing the Admin controller', function() {

    var deferred;
    var promise;   
    var mockAdminFactory;
    var mockInstrumentsFactory;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //$scope, $mdMedia, $mdDialog, AdminFactory, InstrumentsFactory
        bard.inject(
          'AdminFactory',
          'InstrumentsFactory',
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

        mockAdminFactory = 
         {
         	allDonations :  {
                  list:[{donations:'donations'}]
            },
            allSchools :  {
                  list:[{schools:'schools'}]
            },
            allUsers :  {
                  list:[{users:'users'}]
            },
            getAllDonations : function() {
                return promise;
            },
            getAllSchools : function() {
                return promise;
            },
            getAllUsers : function() {
                return promise;
            },
            currentSchool : function() {
                return {};
            }
        };

        mockInstrumentsFactory = 
         {
            instruments :  {
                  list:[{instrument:'Trumpet'}]
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

    it('should getDonations schools and users', function(done) {
    	 //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AdminController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, AdminFactory:mockAdminFactory });
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.donationsTable.list[0].donations).to.equal('donations');
        expect($scope.schoolsTable.list[0].schools).to.equal('schools');
        expect($scope.usersTable.list[0].users).to.equal('users');
    	done();
    });

    it('should show approve modal', function(done) {
    	 //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AdminController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, AdminFactory:mockAdminFactory });
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        $scope.approveSchoolModal({school:'school'},{})
        expect(controller).to.not.be.undefined;
        expect(mockAdminFactory.currentSchool.school).to.equal('school');
    	done();
    });

    it('should edit instrument', function(done) {
    	 //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AdminController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, AdminFactory:mockAdminFactory });
        
        $scope.editInstrument({instrument:'trumpet', 'instrument_id':'1', 'active':'true'},{});
        $scope.showAdd();
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.adding).to.equal(true);
        expect(controller).to.not.be.undefined;
        expect($scope.instruments.list[0].instrument).to.equal('Trumpet');
    	done();
    });

    it('should add instrument', function(done) {
    	 //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AdminController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, AdminFactory:mockAdminFactory });
        
        $scope.addInstrument({instrument:'trumpet', 'instrument_id':'1', 'active':'true'},{});
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect($scope.adding).to.equal(false);
        expect(controller).to.not.be.undefined;
        expect($scope.instruments.list[0].instrument).to.equal('Trumpet');
    	done();
    });

    it('should delete instrument', function(done) {
    	 //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('AdminController', { $scope: $scope, InstrumentsFactory:mockInstrumentsFactory, AdminFactory:mockAdminFactory });
        $scope.deleteInstrument(1);
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.instruments.list[0].instrument).to.equal('Trumpet');
    	done();
    });
});

