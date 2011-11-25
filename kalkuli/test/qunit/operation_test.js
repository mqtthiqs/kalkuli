steal("funcunit/qunit", "kalkuli/fixtures", "kalkuli/models/operation.js", function(){
	module("Model: Kalkuli.Models.Operation")
	
	test("findAll", function(){
		expect(4);
		stop();
		Kalkuli.Models.Operation.findAll({}, function(operations){
			ok(operations)
	        ok(operations.length)
	        ok(operations[0].name)
	        ok(operations[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Kalkuli.Models.Operation({name: "dry cleaning", description: "take to street corner"}).save(function(operation){
			ok(operation);
	        ok(operation.id);
	        equals(operation.name,"dry cleaning")
	        operation.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Kalkuli.Models.Operation({name: "cook dinner", description: "chicken"}).
	            save(function(operation){
	            	equals(operation.description,"chicken");
	        		operation.update({description: "steak"},function(operation){
	        			equals(operation.description,"steak");
	        			operation.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Kalkuli.Models.Operation({name: "mow grass", description: "use riding mower"}).
	            destroy(function(operation){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})