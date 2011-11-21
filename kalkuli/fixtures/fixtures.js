// map fixtures for this application

steal("jquery/dom/fixture", function(){

    var gen_color = function() {
	var r = Math.round(Math.random() * 200 + 55);
	var g = Math.round(Math.random() * 200 + 55);
	var b = Math.round(Math.random() * 200 + 55);
	return "rgb("+r+","+g+","+b+")"
    }

    $.fixture.make("user", 5, function(i, user){
	var names = ["Victoria", "Anne-Louise", "Florent", "Matthias"]
	return {
	    name: $.fixture.rand(names, 4)[0],
	    color: gen_color(),
	    balance: Math.round(Math.random() * 20),
	}
    })
})