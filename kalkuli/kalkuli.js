steal(
    './lib/kalkuli.css',
    './lib/sheet.css',
    './models/models.js',
    './fixtures/fixtures.js',
    'lib/dumpJSON',
    'kalkuli/user/list',
    'kalkuli/operation/create',
    'kalkuli/operation/list',
	function(){

	    $('#users').kalkuli_user_list({button: $('#user_create_button')});
	    $('#operations').kalkuli_operation_list();
	    $('#operation_create').kalkuli_operation_create();

	    // Debug
	    $('#user_json').dump_json({model: Kalkuli.Models.User});

})