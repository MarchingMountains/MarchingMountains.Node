describe('testing the DonationReceivedController', function() {

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
        //'$scope', '$http', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'DonationsFactory', 'UserService'
        bard.inject(
          'SchoolsFactory',
          'DonationsFactory',
          'UserService',
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
        mockUserService = {
          askForCurrentUser: function() {
            return {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
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
              list:[{'instrument':'instrument'}]
            },
            getDirectorSchools: function(){
              return promise;
            },
            putDirectorSchool: function(school){
              return promise;
            },
            schoolsList : function(){
              return [{school:'school'}];
            }
        };
      mockDonationsFactory = {
        factoryGetCurrentUserDonations : function() {
        return promise; 
        },
        factorySubmitDonation : function(donation) {
        return promise; 
        },
        factorySetDonationReceived : function(donation) {
        return promise; 
        },
        currentUserDonations: {donations: [{id:1}]},
        currentDonation: {donation_id:1}
      }
    });

    it('should transform chips', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonationReceivedController', { $scope: $scope, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should confirmreceived', function(done) {
      $httpBackend.when('POST', '/donations/email').respond({});
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonationReceivedController', { $scope: $scope, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.confirmReceived({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should flip mdMedia', function(done) {
        $mdMedia = function(x){
          if (x==='xs')
            return false;
        };
        $httpBackend.when('POST', '/donations/email').respond({});

             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonationReceivedController', { $mdMedia:$mdMedia, $scope: $scope,  DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.confirmReceived({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

    it('should cancel', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonationReceivedController', { $scope: $scope,  DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.cancelReceived();
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });
});

