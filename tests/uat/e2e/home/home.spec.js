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
        .page.home().goHomeDonateFunds()
        .page.home().goHome()
        .page.home().goHomeProject()
        .page.home().goHome()
        .page.home().goHomeDirectors()
        .page.home().goHome()
        .page.home().goHomeVideos();
       browser.end();
  	});

	it('Test 2 - As a user, I can go to the pages in the header', function (browser) {
       browser
       .page.home().setBase(browser.launch_url)
       .page.home().goHome()
       .page.header().setBase(browser.launch_url)
       
       //Explore section
       .page.header().goHeaderExplore()
       .page.header().goHeaderStories()
       .page.header().goHeaderExplore()
       .page.header().goHeaderContact()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDiscover()
       .page.header().goHeaderDiscoverWhat()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDiscover()
       .page.header().goHeaderDiscoverWhere()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDiscover()
       .page.header().goHeaderDiscoverHow()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDiscover()
       .page.header().goHeaderDiscoverWho()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDonate()
       .page.header().goHeaderExplore()
       .page.header().goHeaderFaq()
       .page.header().goHeaderExplore()
       .page.header().goHeaderDirectors()
       .page.header().goHeaderExplore()
       .page.header().goHeaderPress()
       
       //Instruments section
       .page.header().goHeaderInstruments()
       .page.header().goHeaderDonors()
       .page.header().goHeaderInstruments()
       .page.header().goHeaderRequest()
       
       //SUPPORT Section
       .page.header().goHeaderSupport()
       .page.header().goHeaderDonateFunds()
       .page.home().goHome()
       .page.header().goHeaderSupport()
       .page.header().goHeaderVolunteer()
       .end();
  	});
});