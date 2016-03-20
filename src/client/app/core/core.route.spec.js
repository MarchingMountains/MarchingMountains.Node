/* jshint -W117, -W030 */
describe('core', function () {
	describe('state', function () {
		beforeEach(function () {
			module('app.core');
			bard.inject('$state');
		});

		it('should be true', function () {
			expect(true).to.equal(true);
		});

		it('should map donate route correctly', function () {
			expect($state.get('app.donate').url).to.equal('donate-a-musical-instrument');
			expect($state.get('app.donate').resolve.$title()).to.equal('Donate a musical instrument');
		});

		it('should map band directors route correctly', function () {
			expect($state.get('app.banddirectors').url).to.equal('band-directors');
			expect($state.get('app.banddirectors').resolve.$title()).to.equal('Band Directors');
		});

		it('should map project route correctly', function () {
			expect($state.get('app.project').url).to.equal('project');
			expect($state.get('app.project').resolve.$title()).to.equal('About the organization');
		});

		it('should map faq route correctly', function () {
			expect($state.get('app.faq').url).to.equal('faq');
			expect($state.get('app.faq').resolve.$title()).to.equal('Frequently Asked Questions');
		});


		it('should map video route correctly', function () {
			expect($state.get('app.video').url).to.equal('video');
			expect($state.get('app.video').resolve.$title()).to.equal('Videos');
		});

		it('should map volunteer route correctly', function () {
			expect($state.get('app.volunteer').url).to.equal('volunteer');
			expect($state.get('app.volunteer').resolve.$title()).to.equal('Volunteer');
		});

		it('should map success route correctly', function () {
			expect($state.get('app.success').url).to.equal('instrument-donation-success-stories');
			expect($state.get('app.success').resolve.$title()).to.equal('Success Stories');
		});

		it('should map annual reports route correctly', function () {
			expect($state.get('app.reports').url).to.equal('annual-reports');
			expect($state.get('app.reports').resolve.$title()).to.equal('Annual Reports');
		});

		it('should map contac route correctly', function () {
			expect($state.get('app.contact').url).to.equal('contact');
			expect($state.get('app.contact').resolve.$title()).to.equal('Contact');
		});
	});
});