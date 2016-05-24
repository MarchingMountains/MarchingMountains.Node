var Page = require('../constants');

module.exports = function (client) {
    return {
      setBase: function(url) {
        Page.setBaseUrl(url);
        return client;
      },
      goHeaderExplore: function() {
          return client
            .click('#headerExplore')
            .waitForElementVisible('#headerFaq', 1000)
            .assert.containsText('#headerFaq', 'FAQ')
            .pause(1000);
        },
        goHeaderDonate: function() {
          return client
            .click('#headerDonateInstrument')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Donate Musical Instruments');
        },
        goHeaderDonateFunds: function() {
          return client
            .click('#headerDonateFunds')
            .waitForElementVisible('#orgProfile', 100000)
            .assert.containsText('body', 'MARCHING MOUNTAINS');
        },
        goHeaderFaq: function() {
          return client
           .click('#headerFaq')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'FAQ');
        },
        goHeaderDiscover: function() {
          return client
           .click('#headerDiscover')
            .waitForElementVisible('#headerDiscoverWhat', 1000)
            .assert.containsText('#headerDiscoverWhat', 'What does Marching Mountains do?')
            .pause(1000);
        },
         goHeaderDiscoverWhat: function() {
          return client
           .click('#headerDiscoverWhat')
           .waitForElementVisible('body', 1000)
           .assert.containsText('h2', 'Project Goals');
        },
        goHeaderDiscoverWho: function() {
          return client
           .click('#headerDiscoverWho')
           .waitForElementVisible('body', 1000)
           .assert.containsText('h2', 'Everyone can help with Marching Mountains');
        },
        goHeaderDiscoverHow: function() {
          return client
           .click('#headerDiscoverHow')
           .waitForElementVisible('body', 1000)
           .assert.containsText('h2', 'The role of band programs in public schools');
        },
        goHeaderDiscoverWhere: function() {
          return client
           .click('#headerDiscoverWhere')
           .waitForElementVisible('body', 1000)
           .assert.containsText('h1', 'Areas Marching Mountains Helps');
        },
        goHeaderContact: function() {
          return client
           .click('#headerContact')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Contact');
        },
        goHeaderDirectors: function() {
          return client
           .click('#headerBandDirectors')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Welcome Band Directors');
        },
        goHeaderStories: function() {
          return client
          .click('#headerStories')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h2', 'Letter from a Band Director About the Effects of Donating Musical Instruments to Marching Mountains');
        },
        goHeaderPress: function() {
          return client
           .click('#headerPress')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h3', 'Press');
        },
        goHeaderInstruments: function() {
          return client
           .click('#headerInstruments')
            .waitForElementVisible('#headerDonate', 1000)
            .assert.containsText('#headerDonate', 'Donate')
            .pause(1000);
        },
        goHeaderDonors: function() {
          return client
           .click('#headerDonate')
           .pause(1000)
            .waitForElementVisible('#donateForm', 10000)
            .assert.containsText('h3', 'What type of instrument would you like to donate?');
        },
        goHeaderRequest: function() {
          return client
          .click('#headerRequest')
          .pause(1000)
           .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Welcome Band Directors');
        },
        goHeaderSupport: function() {
          return client
           .click('#headerSupport')
           .pause(1000)
            .waitForElementVisible('#headerVolunteer', 1000)
            .assert.containsText('#headerVolunteer', 'Volunteer')
            .pause(1000);
        },
        goHeaderVolunteer: function() {
          return client
           .click('#headerVolunteer')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Volunteer with Marching Mountains');
        }
    };
};