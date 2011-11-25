steal('jquery/model', function(){

/**
 * @class Kalkuli.Models.User
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend user services.  
 */
$.Model('Kalkuli.Models.User',
/* @Static */
{
	findAll: "/users.json",
  	findOne : "/users/{id}.json", 
  	// create : function(attrs, success, error) {
	// 	attrs.id = Math.round(Math.random() * 1000000);
	// 	$.ajax('/user/create.json');
	// 	success && success(attrs);
	// },
 	// update : function(id, params, success, error) {
	// 	$.ajax('/user/' + id + '/update.json');
	// 	success && success();
	// },
  	// destroy : function(id, success, error) {
	// 	$.ajax('/user/' + id + '/delete.json');
	// 	success && success();
	// }
},
/* @Prototype */
{});

})
