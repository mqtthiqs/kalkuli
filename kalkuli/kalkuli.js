steal(
	'./kalkuli.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'kalkuli/user/list',
	function(){					// configure your application
		
	    $('#users').kalkuli_user_list();
	    $('#user_json').kalkuli_user_json();
})