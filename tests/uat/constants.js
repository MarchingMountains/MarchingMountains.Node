var baseUrl; 
var homeUrl = "/";
var donateUrl = function() { return getBaseUrl() + homeUrl + "donate-a-musical-instrument"; }
var aboutUrl = function() { return getBaseUrl() + homeUrl + "project"; }
var faqUrl = function() { return getBaseUrl() + homeUrl + "faq"; }
var contactUrl = function() { return getBaseUrl() + homeUrl + "contact"; }
var directorsUrl = function() { return getBaseUrl() + homeUrl + "band-directors"; }
var successUrl = function() { return getBaseUrl() + homeUrl + "instrument-donation-success-stories"; }
var videosUrl = function() { return getBaseUrl() + homeUrl + "videos"; }
var volunteerUrl = function() { return getBaseUrl() + homeUrl + "volunteer"; }
var annualReportsUrl = function() { return getBaseUrl() + homeUrl + "annual-reports"; }
var newsOneUrl =  function() { return getBaseUrl() + homeUrl + "news/2013/Donating-Musical-Instruments-Changes-Childrens-Lives"; }
var newsTwoUrl =  function() { return getBaseUrl() + homeUrl + "news/2010/donated-instrument-distribution"; }

var setBaseUrl = function(url){
	baseUrl = url;
}

var getBaseUrl = function(){
	return baseUrl;
}

var urls = {
	home : function() { return getBaseUrl() + homeUrl; },
	base : getBaseUrl,
	donate : donateUrl,
	about : aboutUrl,
	faq : faqUrl,
	contact : contactUrl,
	directors : directorsUrl,
	success: successUrl,
	videos: videosUrl,
	volunteer: volunteerUrl,
	annualReports: annualReportsUrl,
	newsOne: newsOneUrl,
	newsTwo : newsTwoUrl
};

var user ={
	first: "Test",
	last: "User",
	email: "dev@marchingmountains.org",
	password: "Password1"
}

module.exports = {
	Urls : urls,
	User: user,
	setBaseUrl: setBaseUrl
};
