steal('jquery/model',
	'jquery/model/list', function(){

/**
 * @class Kalkuli.Models.Person
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend person services.  
 */
$.Model('Kalkuli.Models.Person',
/* @Static */
{
	findAll: "/0987654321/person/list.json",
  	findOne : "/0987654321/person/{id}.json", 
  	create : function(attrs, success, error) {
		attrs.id = Math.round(Math.random() * 1000000);
		$.ajax('/0987654321/person/create.json');
		success && success(attrs);
	},
 	update : function(id, params, success, error) {
		$.ajax('/0987654321/person/' + id + '/update.json');
		success && success();
	},
  	destroy : function(id, success, error) {
		$.ajax('/0987654321/person/' + id + '/delete.json');
		success && success();
	}
},
/* @Prototype */
{});

$.Model.List('Kalkuli.Models.Person.List',
{},
{});

})
