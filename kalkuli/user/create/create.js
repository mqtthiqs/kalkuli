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
    	this.element.html(this.view('init'))
    	    .find('[name=name]').focus();
    },

    click: function(el, ev){
    	ev.stopPropagation();
    },

    "{window} click": function(){
    	this.destroy();
    },

    submit: function(el, ev) {
    	ev.preventDefault();
    	new Kalkuli.Models.User(el.formParams()).save();
    	this.destroy();
    },

    destroy: function() {
    	this.element.empty();
    	this._super();
    },
})

});