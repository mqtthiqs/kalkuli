steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'kalkuli/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Kalkuli.User.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates users
 */
$.Controller('Kalkuli.User.Create',
/** @Prototype */
{
    init: function(){
	this.element.html(this.view()).find("input").focus();

    },

    "input blur": function(el, ev) {
	this.options.user
	    .attr('name', el.serializeArray()[0].value) // TODO moche. formParm()?
	    .save();
	this.destroy()
    },

})

});