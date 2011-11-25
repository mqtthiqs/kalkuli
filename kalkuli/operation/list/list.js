steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'kalkuli/models' )
.then( './views/init.ejs', 
       './views/operation.ejs', 
       function($){

/**
 * @class Kalkuli.Operation.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists operations and lets you destroy them.
 */
$.Controller('Kalkuli.Operation.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Kalkuli.Models.Operation.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.operation').model().destroy();
		}
	},
	"{Kalkuli.Models.Operation} destroyed" : function(Operation, ev, operation) {
		operation.elements(this.element).remove();
	},
	"{Kalkuli.Models.Operation} created" : function(Operation, ev, operation){
		this.element.append(this.view('init', [operation]))
	},
	"{Kalkuli.Models.Operation} updated" : function(Operation, ev, operation){
		operation.elements(this.element)
		      .html(this.view('operation', operation) );
	}
});

});