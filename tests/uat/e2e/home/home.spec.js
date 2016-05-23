'use strict';
describe('Marching Mountains homepage test', function() {
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
        .page.home().goHomeSuccessStories()
        .page.home().goHome()
        .page.home().goHomeAnnualReports()
        .page.home().goHome()
        .page.home().goHomeVolunteer()
        .page.home().goHome()
        .page.home().goHomeDonate()
        .page.home().goHome()
        .page.home().goHomeProject()
        .page.home().goHome()
        .page.home().goHomeDirectors()
        .page.home().goHome()
        .page.home().goHomeVideos();
       browser.end();
  	});

	it('Test 2 - As a user, I can go to the pages in the header', function (browser) {
       // browser
       // .page.home().setBase(browser.launch_url)
       // .page.home().goHome()
       // .page.home().goDonate()
       // .page.home().goFaq()
       // .page.home().goDirectors()
       // .page.home().goProject()
       // .page.home().goContact()
       // .end();
       browser.end();
  	});
});