steal( 'jquery/controller',
       'jquery/view/ejs',
       'jquery/lang/json',
       'jquery/controller/view',
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
    init : function(){
	this.element.html(this.view('init', Kalkuli.Models.User.findAll()) )
    },

    '.destroy click': function(el){
	el.closest('.user').model().destroy();
    },

    '.name click': function(el) {
	var user = el.closest('.user');
	user.kalkuli_user_create({user: user.model()});
    },

    '.add click': function(el) {
	$('<li></li>').appendTo(this.element).kalkuli_user_create();
    },

    "{Kalkuli.Models.User} destroyed" : function(User, ev, user) {
	user.elements(this.element).remove();
    },

    "{Kalkuli.Models.User} created" : function(User, ev, user){
	this.init()		// TODO
    },

    "{Kalkuli.Models.User} updated" : function(User, ev, user){
	// user.elements(this.element)
	//     .html(this.view('user', user) );
	this.init()		// TODO: html ne rebinde pas les evenements
    }
});

$.Controller('Kalkuli.User.JSON',
{
    defaults: {}
},
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
