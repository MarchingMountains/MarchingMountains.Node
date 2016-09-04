describe('testing the MySchoolsController', function() {

    var deferred;
    var promise;   
    var mockInstrumentsFactory;
    var mockSchoolsFactory;
    var mockDonationsFactory;
    var mockUserService; 
    var session;
    
    beforeEach(function() {
        //'$scope', '$http',  'UserService'
        module('myApp');

        //Use bard to inject the adminFactory and a mock $http service
        //'$scope', '$mdDialog', '$mdMedia', 'SchoolsFactory', 'InstrumentsFactory','DonationsFactory', 'UserService'
        bard.inject(
          'SchoolsFactory',
          'DonationsFactory',
          'InstrumentsFactory',
          'UserService',
          '$rootScope',
          '$httpBackend',
          '$controller',
          '$q',
          '$mdMedia',
          '$mdDialog',
          '$sessionStorage'
        );
        sinon.spy($mdDialog, 'show');
        $scope = $rootScope.$new();
        session = $sessionStorage;
        session.CurrentUser = {email: 'hi@here.com', first_name: 'Bob', user_id: '1', factoryUserId:1 };

        $httpBackend.when('GET', '/views/templates/home.html').respond({});
        $httpBackend.when('GET', '../views/modals/add-school.html').respond({});
        $httpBackend.when('GET', '../views/modals/donate-received-modal.html').respond({});
        
         //setup $q for testing promise in controller
        deferred = $q.defer();
        //get a promise instance
        promise = deferred.promise;
        mockUserService = {
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
            },
            getStates : function(instrument) {
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
            getDirectorSchools: function(school){
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
        currentUserDonations: {donations: [{id:1}]}
      }
    });

    it('should create my schools controller', function(done) {
             //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('MySchoolsController', { $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, 
          SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory, $sessionStorage:session });
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
      done();
    });

  it('should add school controller', function(done) {
        var $addScope = $rootScope.$new();
        var addSchoolController = $controller('AddSchoolController', { $scope: $addScope, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory });
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('MySchoolsController', { AddSchoolController:addSchoolController, $scope: $scope, UserService:mockUserService, 
          DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory, $sessionStorage:session });
        $scope.addSchool({});
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect($mdDialog.show).to.have.been.calledOnce;
      done();
    });

      it('should edit school controller', function(done) {
        var $addScope = $rootScope.$new();
        var addSchoolController = $controller('AddSchoolController', { $scope: $addScope, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory });
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('MySchoolsController', { AddSchoolController:addSchoolController, $scope: $scope, 
          UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory, $sessionStorage:session });
        $scope.editSchool({},{school:'school'});
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(mockSchoolsFactory.currentSchool.school).to.equal('school');
        expect($mdDialog.show).to.have.been.calledOnce;
      done();
    });

      it('should receive donation', function(done) {
        var $addScope = $rootScope.$new();
        var donationReceivedController = $controller('DonationReceivedController', { $scope: $addScope, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory });
        //get an instance of donors controller and inject our mock services (we test services separately, so we don't care about testing services here, mocks are fine)
        var controller = $controller('MySchoolsController', { DonationReceivedController:donationReceivedController, $scope: $scope, UserService:mockUserService, DonationsFactory:mockDonationsFactory, SchoolsFactory:mockSchoolsFactory, InstrumentsFactory:mockInstrumentsFactory });
        $scope.donationReceived({},{donation:'donation'});
        //apply scope to resolve all the promises
        deferred.resolve();
        $rootScope.$apply();
        $httpBackend.flush();
        expect(controller).to.not.be.undefined;
        expect(mockDonationsFactory.currentDonation.donation).to.equal('donation');
        expect($mdDialog.show).to.have.been.calledOnce;
      done();
    });
});

