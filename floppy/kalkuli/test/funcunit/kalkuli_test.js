steal("funcunit", function(){
	module("kalkuli test", { 
		setup: function(){
			S.open("//kalkuli/kalkuli.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})