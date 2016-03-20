describe('Marching Mountains homepage test', function() {
  describe('with Nightwatch', function() {

  	before(function(client, done) {
      done();
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    afterEach(function(client, done) {
      done();
    });

    beforeEach(function(client, done) {
      done();
    });

    it('Test 1 - As a user, I can go to the home page and the pages in the main section', function (browser) {
       browser
       .page.home().setBase(browser.launch_url)
       .page.home().goHome()
       .page.home().goSuccessStories()
       .page.home().goHome()
       .page.home().goHome()
       .page.home().goAnnualReports()
       .page.home().goHome()
       .page.home().goVolunteer()

  	});
	it('Test 2 - As a user, I can go to the pages in the header', function (browser) {
       browser
       .page.home().setBase(browser.launch_url)
       .page.home().goHome()
       .page.home().goDonate()
       .page.home().goFaq()
       .page.home().goDirectors()
       .page.home().goProject()
       .page.home().goContact()
       .end();
  	});
  it('Test 3 - As a user, I can go to the pages in the footer', function (browser) {
       browser
       .page.home().setBase(browser.launch_url)
       .page.home().goHome()
       .page.home().goNewsOne()
       .page.home().goNewsTwo()
       .end();
    });
  });
});