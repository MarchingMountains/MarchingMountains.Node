var baseUrl; 
var homeUrl = "/";
var donateUrl = function() { return getBaseUrl() + homeUrl + "donate-a-musical-instrument"; }
var aboutUrl = function() { return getBaseUrl() + homeUrl + "project"; }
var faqUrl = function() { return getBaseUrl() + homeUrl + "faq"; }
var contactUrl = function() { return getBaseUrl() + homeUrl + "contact"; }
var directorsUrl = function() { return getBaseUrl() + homeUrl + "band-directors"; }

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
	directors : directorsUrl
};

var user ={
	first: "Test",
	last: "User",
	email: "devteam@luminat.com",
	password: "Password1"
}

module.exports = {
	Urls : urls,
	User: user,
	setBaseUrl: setBaseUrl
};

