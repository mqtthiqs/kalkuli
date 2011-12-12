steal(
    './lib/kalkuli.css',
    './lib/sheet.css',
    './models/models.js',		// steals all your models
    './fixtures/fixtures.js',	// sets up fixtures for your models
    'kalkuli/user/list',
	'kalkuli/user/create',
	'kalkuli/operation/create',
	'kalkuli/operation/list',
	function(){					// configure your application

	    $('#users').kalkuli_user_list({button: $('#user_create_button')});
	    $('#user_json').kalkuli_user_json();
	    $('#operations').kalkuli_operation_list();
	    $('#operation_create').kalkuli_operation_create();
})