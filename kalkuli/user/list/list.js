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
	var el = this.element
	var v = this.view('init', Kalkuli.Models.User.findAll())
	    .done(function(v) {
		el.html(v)// .find('.color').colorPicker();
	    });
    },

    ".color change": function(el) {
	el.closest('.user').model().attr('color', el.val()).save()
    },

    '.destroy click': function(el) {
	el.closest('.user').model().destroy();
    },

    '.name click': function(el) {
	var user = el.closest('.user');
	user.kalkuli_user_create({user: user.model()});
    },

    '.add click': function(el) {
	var user = new Kalkuli.Models.User({name: "", color: "green", balance: 0});
	$('<li></li>').appendTo(this.element.find('ul')).kalkuli_user_create({user: user});
    },

    "{Kalkuli.Models.User} destroyed": function(User, ev, user) {
	user.elements(this.element).remove();
    },

    "{Kalkuli.Models.User} created": function(User, ev, user) {
	console.log(user.elements(this.element))
 	    // .html(this.view('user', user))
    },

    "{Kalkuli.Models.User} updated": function(User, ev, user) {
	user.elements(this.element).replaceWith(this.view('user', user));
    }
});

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
