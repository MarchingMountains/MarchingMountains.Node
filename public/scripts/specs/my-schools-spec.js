/* jshint -W117, -W030 */
describe('My Schools Controller', function () {
    'use strict';

    var controller;

    beforeEach(function () {
        bard.appModule('app.myschools');
        bard.inject('$controller', '$rootScope');

        controller = $controller('MySchoolsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('My Schools controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.not.be.undefined;
        });
    });
});