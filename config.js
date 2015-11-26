var OAuth = require('oauth');
// var routers = require('./routes/routers');

module.exports = {

	global : {
  	// MongoDB
  	// Url of the Mongodb server
		mongoUrl: "mongodb://localhost/",
 	// Database name
  		mongoDbName: "USI-Social-Wall",
  	//Server URL
  		url: "http://127.0.0.1:3000"
  	},

  	//oauth for Twitter API 1.0
  	twitter1 : {
		oauth1 : new OAuth.OAuth(
			'https://api.twitter.com/oauth/request_token',
			'https://api.twitter.com/oauth/access_token',
			'SScxhrwxhutPMnEC5Yu6tLm6k',
			'M3pNOZuq0OKhjLmWFp3lwO6lngq4Swt4vTbk9jbEYl236jEI3T',
			'1.0A',
			null,
			'HMAC-SHA1'
	 	),
	 	standardKey : '4226994315-eDbzpMKJ6rOTNBP24n9cvaAOpxK5QaOh1dZzAkP',
	 	standardValue :'nUB3f2yCpz3VRVAgCttiS1r1UyNsZxddhzOJ5nt3evckr'
	},

	//oauth for Twitter API 1.1
	twitter2 : {
		oauth2 : new OAuth.OAuth2(
			'SScxhrwxhutPMnEC5Yu6tLm6k',
    		"M3pNOZuq0OKhjLmWFp3lwO6lngq4Swt4vTbk9jbEYl236jEI3T",
    		'https://api.twitter.com/',
		    null,
		    'oauth2/token',
		    null
		)
	}
}


//env