steal(
	'./kalkuli.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'kalkuli/controllers/person/list/list.js',
	function(){					// configure your application
		$('#personList').kalkuli_person_list({ list: new Kalkuli.Models.Person.List() });
		$('#toto').replaceWith(
			$('<div>Coucou</div>').click(function(){alert('');})
		);
	})
