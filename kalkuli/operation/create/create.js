steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'kalkuli/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Kalkuli.Operation.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates operations
 */
$.Controller('Kalkuli.Operation.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Kalkuli.Models.Operation(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});