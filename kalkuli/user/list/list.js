steal( 'jquery/controller',
       'jquery/controller/view',
       'jquery/view/ejs',
       'lib/editableText',
       'lib/colorPicker',
       'kalkuli/user/create',
       'kalkuli/models' )
    .then( './views/init.ejs',
	   './views/user.ejs',
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

})