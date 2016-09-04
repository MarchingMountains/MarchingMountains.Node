describe('testing the DonateNowController', function() {

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
        //'$scope', '$http', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'DonationsFactory', 'UserService'
        bard.inject(
          'SchoolsFactory',
          'DonationsFactory',
          '$sessionStorage',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog'
        );

        $scope = $rootScope.$new();
        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        session = $sessionStorage;
        session.CurrentUser = {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:10 };
          
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

    it('should transform chips', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonateNowController', { $scope: $scope, $sessionStorage:session, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.selectedSchoolInfo[0].school).to.equal('school');
        expect($scope.selectedInstrument[0].instrument).to.equal('instrument');
      done();
    });

    it('should donate now', function(done) {
      $httpBackend.when('POST', '/donations/email').respond({});
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonateNowController', { $scope: $scope, $sessionStorage:session, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNow({});
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.currentUserDonations.donations[0].id).to.equal(1);
      done();
    });

    it('should flip some other switches', function(done) {
        $mdMedia = function(x){
          if (x==='xs')
            return false;
        };

        $httpBackend.when('POST', '/donations/email').respond({});
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('DonateNowController', { $mdMedia:$mdMedia, $scope: $scope, $sessionStorage:session, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory });
        //apply scope to resolve all the promises
        $scope.donateNow({});
        $scope.cancelDonation();
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($scope.currentUserDonations.donations[0].id).to.equal(1);
      done();
    });
});

