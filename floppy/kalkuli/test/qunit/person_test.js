steal("funcunit/qunit", "kalkuli/fixtures", "kalkuli/models/person.js", function(){
	module("Model: Kalkuli.Models.Person")
	
	test("findAll", function(){
		expect(4);
		stop();
		Kalkuli.Models.Person.findAll({}, function(people){
			ok(people)
	        ok(people.length)
	        ok(people[0].name)
	        ok(people[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Kalkuli.Models.Person({name: "dry cleaning", description: "take to street corner"}).save(function(person){
			ok(person);
	        ok(person.id);
	        equals(person.name,"dry cleaning")
	        person.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Kalkuli.Models.Person({name: "cook dinner", description: "chicken"}).
	            save(function(person){
	            	equals(person.description,"chicken");
	        		person.update({description: "steak"},function(person){
	        			equals(person.description,"steak");
	        			person.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Kalkuli.Models.Person({name: "mow grass", description: "use riding mower"}).
	            destroy(function(person){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})