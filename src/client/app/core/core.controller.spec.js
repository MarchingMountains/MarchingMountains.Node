/* jshint -W117, -W030 */
describe('CoreController', function () {
	'use strict';

	var controller;

	beforeEach(function () {
		bard.appModule('app.core');
		bard.inject('$controller', '$rootScope');

		controller = $controller('CoreController');
		$rootScope.$apply();
	});

	bard.verifyNoOutstandingHttpRequests();

	describe('Core controller', function () {
		it('should be created successfully', function () {
			expect(controller).to.not.be.undefined;
		});
	});
});