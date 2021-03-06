describe('testing the SchoolSearchController', function() {

    var deferred;
    var promise;   
    var mockInstrumentsFactory;
    var mockSchoolsFactory;
    var mockDonationsFactory;
    var session;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //'$scope', '$http', '$location','$mdDialog', '$mdMedia', 'InstrumentsFactory', 'SchoolsFactory', 'UserService'
        bard.inject(
          'SchoolsFactory',
          'InstrumentsFactory',
          '$rootScope',
          '$httpBackend',
          '$sessionStorage',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog',
          '$location'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('GET', '/views/templates/donors.html').respond({});
        $httpBackend.when('GET', '../views/modals/donate-now-modal.html').respond({});
        $httpBackend.when('GET', '/views/templates/school-info.html').respond({});
        sinon.spy($mdDialog,'show');
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;
        session = $sessionStorage;
        session.CurrentUser = {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };

        mockInstrumentsFactory = 
         {
            instruments :  {
                  list:[{instrument:'Trumpet', active:true},{instrument:'Clarinet'}]
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
        mockSchoolsFactory = 
         {
            currentSchool : {
                school_name:'testschool'
            },
            selectedSchoolInfo:{
              list:[{'school':'school'}]
            },
            selectedInstrument:{
              list:[{'instrument':'instrument'}]
            },
            putDirectorSchool: function(school){
              return promise;
            },
            schoolsList : function(){
              return [{school:'school'}];
            },
            schoolSearchResults: {
              list: [{school:'school'}]
            },
            factoryGetSchoolsList: function(school){
              return promise;
            },
            factorySetSelectedSchoolInfo: function(selectedSchool)
            {

            }
        };
      mockDonationsFactory = {
        factoryGetCurrentUserDonations : function() {
        return promise; 
        },
        factorySubmitDonation : function(donation) {
        return promise; 
        },
        currentUserDonations: {donations: [{id:1}]}
      }
    });

    it('should make a controller', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', { $scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should have active instruments', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', { $scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.instruments).to.not.be.empty;
      done();
    });

    it('should index search school', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', { $scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.indexSearchSchool ({instrument:'trumpet'});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($location.path()).to.equal('/donors');
      done();
    });

    it('should search school', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', {$scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.searchSchool({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.schoolSearchResults[0].school).to.equal('school');
      done();
    });

    it('should go to school page', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', {$scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.goToSchoolPage({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($location.path()).to.equal('/school-info');
      done();
    });

    it('should donate now', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', {$scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNowModal({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($location.path()).to.equal('/');
      done();
    });

    it('should redirect donate now when no user', function(done) {
      session.CurrentUser= undefined;
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', {$scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNowModal({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($mdDialog.show).to.have.been.calledOnce;
      done();
    });

    it('should redirect donate now when no user with other media option', function(done) {
      session.CurrentUser= undefined;
      $mdMedia = function(x){
          if (x==='sm')
            return true;
          if (x=='xs')
            return false;
        };
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolSearchController', {$mdMedia:$mdMedia, $scope: $scope, $sessionStoage:session, InstrumentsFactory:mockInstrumentsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNowModal({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($mdDialog.show).to.have.been.calledOnce;
      done();
    });
});
