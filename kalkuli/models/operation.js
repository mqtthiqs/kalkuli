steal('jquery/model', function(){

/**
 * @class Kalkuli.Models.Operation
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend operation services.  
 */
$.Model('Kalkuli.Models.Operation',
/* @Static */
{
	findAll: "/operations.json",
  	findOne : "/operations/{id}.json", 
  	create : "/operations.json",
 	update : "/operations/{id}.json",
  	destroy : "/operations/{id}.json"
},
/* @Prototype */
{});

})