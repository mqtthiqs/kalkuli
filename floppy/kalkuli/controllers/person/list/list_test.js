steal('funcunit').then(function(){

module("Kalkuli.Controllers.Person.List", { 
	setup: function(){
		S.open("//kalkuli/controllers/person/list/list.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Kalkuli.Controllers.Person.List Demo","demo text");
});


});