// map fixtures for this application

steal("jquery/dom/fixture", "lib/colorPicker", function(){

    var gen_color = function() {
	// return ColorSwatch[2]
    	var r = Math.round(Math.random() * 200 + 55);
    	var g = Math.round(Math.random() * 200 + 55);
    	var b = Math.round(Math.random() * 200 + 55);
    	return "rgb("+r+","+g+","+b+")"
    }

    var users = [
    	{id: $.fixture.rand(10000), name: "Victoria", color: gen_color(), balance: $.fixture.rand(-100, 100)},
    	{id: $.fixture.rand(10000), name: "Anne-Louise", color: gen_color(), balance: $.fixture.rand(-100, 100)},
    	{id: $.fixture.rand(10000), name: "Florent", color: gen_color(), balance: $.fixture.rand(-100, 100)},
    	{id: $.fixture.rand(10000), name: "Matthias", color: gen_color(), balance: $.fixture.rand(-100, 100)},
    ]

    var users_id = users.map(function(u) {return u.id})

    $.fixture.make("user", users.length, function(i, user) {
    	return users[i]
    })

    $.fixture("/user/create.json", function(orig, settings, headers){
	return [200, "success", {json: {foo: "bar" } }, {} ]
    })

    $.fixture.make("operation", 7, function(i, operation){
    	var names = [
    	    "Bouffe au resto",
    	    "Course monop",
    	    "Location skis et luges",
    	    "Une ligne un peu longue pour overflow au delà des limites de la bordure",
    	    "Vivamus molestie, libero eu iaculis faucibus, mi tellus viverra diam",
    	]

    	return {
    	    name: $.fixture.rand(names , 1)[0],
    	    date: new Date(),
    	    paid: $.fixture.rand(users_id, $.fixture.rand(4)),
    	    amount: $.fixture.rand(100)
    	}
    })
})