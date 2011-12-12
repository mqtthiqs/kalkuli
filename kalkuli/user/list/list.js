steal( 'jquery/controller',
       'jquery/view/ejs',
       'jquery/lang/json',
       'jquery/controller/view',
        'kalkuli/models' )
    .then( './views/init.ejs',
      './views/user.ejs',
       'lib/js/jQuery.colorPicker.js',
       'lib/css/colorPicker.css',
       function($){

/**
 * @class Kalkuli.User.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists users and lets you destroy them.
 */
$.Controller('Kalkuli.User.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
    init: function(){
	this.element.html(this.view('init', Kalkuli.Models.User.findAll()))
    },

    "{button} click": function(){
	$('#user_create').kalkuli_user_create();
	// ne pas propager a destroy
	return false;
    },

    ".color change": function(el) {
	el.closest('.user').model().attr('color', el.val()).save();
    },

    '.name change': function(el) {
	el.closest('.user').model().attr('name', el.text()).save();
    },

    '.destroy click': function(el) {
	el.closest('.user').model().destroy();
    },

    "{Kalkuli.Models.User} destroyed": function(User, ev, user) {
	user.elements(this.element).remove();
    },

    "{Kalkuli.Models.User} created": function(User, ev, user) {
	this.element.append(this.view('user', user))
    },

    "{Kalkuli.Models.User} updated": function(User, ev, user) {
	user.elements(this.element).replaceWith(this.view('user', user));
    }
});

$.Controller('EditableText', {},
{
    "click": function() {
	if(this.element.find('input').length) return;
	this.original = this.element.text();
        var input = $('<input />')
	    .val(this.element.text())
	this.element.html(input);
	input.focus();
    },

    "input change": function(ev) {
	return false;
    },

    "input blur": function(el, ev) {
	this.element.text(el.val());
	if (this.original != el.val())
	    this.element.change();
    }
})

$.Controller('Kalkuli.User.JSON', {},
{
    init: function() {this.update()},
    update: function() {
	el = this.element;
	Kalkuli.Models.User.findAll({}, function(l){
	    el.html($.toJSON(l));
	})

    },

    '{Kalkuli.Models.User} destroyed': function(){this.update()},
    '{Kalkuli.Models.User} created': function(){this.update()},
    '{Kalkuli.Models.User} updated': function(){this.update()},
}
)
});
