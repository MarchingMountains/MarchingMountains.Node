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

    it('Test 1 - As a user, I can go to the home page', function (browser) {
       browser
       .page.home().setBase(browser.launch_url)
       .page.home().goHome()
       .end();
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
  });
});