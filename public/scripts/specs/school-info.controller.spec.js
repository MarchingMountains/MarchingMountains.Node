describe('testing the SchoolInfoController', function() {

    var deferred;
    var promise;   
    var mockInstrumentsFactory;
    var mockSchoolsFactory;
    var mockDonationsFactory;
    var mockUserService; 
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //'$scope', '$http', '$location','$mdDialog', '$mdMedia', 'InstrumentsFactory', 'SchoolsFactory', 'UserService'
        bard.inject(
          'SchoolsFactory',
          'InstrumentsFactory',
          'UserService',
          '$rootScope',
          '$httpBackend',
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
            }
        };

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
        mockSchoolsFactory = 
         {
            currentSchool : {
                school_name:'testschool'
            },
            selectedSchoolInfo:{
              list:[{'school':'school'}]
            },
            selectedInstrument:{
              list:[{'instrument':'instrument', 'school_id':1}]
            },
            putDirectorSchool: function(school){
              return promise;
            },
            schoolsList : function(){
              return [{school:'school'}];
            },
            schoolSearchResults: {
              list: [{school:'school'}]
            }
        };
      mockDonationsFactory = {
        factoryGetCurrentUserDonations : function() {
        return promise; 
        },
        factorySubmitDonation : function(donation) {
        return promise; 
        },
        factoryGetSelectedSchoolDonations: function(donation) {
        return promise; 
        },
        currentUserDonations: {donations: [{id:1}]},
        selectedSchoolDonations:{
              list:[{'instrument':'instrument', 'school_id':1}]
            },
      }
    });

    it('should create school info controller', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolInfoController', { $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

     it('should return to search results', function(done) {
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolInfoController', { $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        $scope.returnToSearchResults ({});
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($location.path()).to.equal('/donors');
      done();
    });


    it('should return to home', function(done) {
        mockSchoolsFactory.selectedSchoolInfo.list = undefined;
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolInfoController', { $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($location.path()).to.equal('/home');
      done();
    });

    it('should flip some other switches', function(done) {
        $mdMedia = function(x){
          if (x==='sm')
            return false;
          if (x=='xs')
            return true;
        };

        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolInfoController', { $mdMedia:$mdMedia, $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNowModal({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should prompt to login', function(done) {
        $mdMedia = function(x){
          if (x==='sm')
            return false;
        };
        mockUserService.askForCurrentUser = function() { return {factoryUserId: undefined}; }
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('SchoolInfoController', { $mdMedia:$mdMedia, $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNowModal({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });
});

