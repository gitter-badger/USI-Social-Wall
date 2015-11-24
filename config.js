var OAuth = require('oauth');

module.exports = {
  	// MongoDB
  	// Url of the Mongodb server
	mongoUrl: "mongodb://localhost/",
 	// Database name
  	mongoDbName: "test-2",
  	//Server URL
  	url: "http://127.0.0.1:3000",

  	//oauth for Twitter API 1.0
  	twitter1 : {
		oauth1 : new OAuth.OAuth(
			'https://api.twitter.com/oauth/request_token',
			'https://api.twitter.com/oauth/access_token',
			'ohb9GbS1FS1zGxwjz1LvF4sQR',
			'Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5',
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
			'ohb9GbS1FS1zGxwjz1LvF4sQR',
    		"Z3jc8wKNooT82QfMfQBkpoDegJGEcQnCwwKXfhh8iFauhe15F5",
    		'https://api.twitter.com/',
		    null,
		    'oauth2/token',
		    null
		)
	}
}


//env