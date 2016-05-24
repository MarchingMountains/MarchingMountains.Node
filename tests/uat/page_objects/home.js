var Page = require('../constants');

module.exports = function (client) {
    return {
      setBase: function(url) {
        Page.setBaseUrl(url);
        return client;
      },
        goHome: function () {
            return client
            .url(Page.Urls.home())
            .waitForElementVisible('body', 100000)
            .assert.containsText('h1', 'Helping band programs in Appalachia and Minnesota');
        },
        goDonate: function() {
          return client
             .url(Page.Urls.donate())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donate Musical Instruments');
        },
        goHomeDonate: function() {
          return client
            .click('#homeDonateInstruments')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donate Musical Instruments');
        },
        goHomeDonateFunds: function() {
          return client
            .click('#homeDonateFunds')
            .waitForElementVisible('#orgProfile', 100000)
            .assert.containsText('body', 'MARCHING MOUNTAINS');
        },
        goFaq: function() {
          return client
           .url(Page.Urls.faq())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'FAQ');
        },
        goProject: function() {
          return client
           .url(Page.Urls.about())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h2', 'Vision');
        },
         goHomeProject: function() {
          return client
           .click('#homeProject')
           .waitForElementVisible('body', 1000)
           .assert.containsText('h2', 'Vision');
        },
        goContact: function() {
          return client
           .url(Page.Urls.contact())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Contact');
        },
        goDirectors: function() {
          return client
           .url(Page.Urls.directors())
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Welcome Band Directors');
        },
        goHomeDirectors: function() {
          return client
           .click('#homeBandDirectors')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Welcome Band Directors');
        },
        goHomeSuccessStories: function() {
          return client
          .click('#homeSuccessStories')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Sucess Stories');
        },
        goHomeAnnualReports: function() {
          return client
           .click('#homeAnnualReports')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Marching Mountains Annual Reports and Needs Assessment');
        },
        goHomeVideos: function() {
          return client
           .click('#homeVideo')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h2', 'Marching Mountains Musical Instrument Distributions in Appalachia');
        },
        goHomeVolunteer: function() {
          return client
           .click('#homeVolunteer')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Volunteer with Marching Mountains');
        },
        goNewsOne: function() {
          return client
          .click('.footer > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)')
          .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donating Musical Instruments Changes Children’s Lives for the Better');
        },
        goNewsTwo: function() {
          return client
          .click('.footer > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)')
          .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'School Kids in Distressed Appalachian Counties Receive Donated Band Instruments');
        }
    };
};