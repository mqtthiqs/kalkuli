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
{
    defaults: {color: "#F6DC9C"}
},
/** @Prototype */
{
    init: function(){
    	this.element.html(this.view('init'));
    	this.element.find('[name=name]').focus()
	this.element.find('[name=color]').val(this.options.color).change()
	this.element.find('table').css('background-color', this.options.color)
    },

    ".color change": function(el) {
	this.element.find('table').css('background-color', el.val())
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