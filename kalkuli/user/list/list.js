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

    ".color change": function(el) {
	el.closest('.user').model().attr('color', el.val()).save();
    },

    '.name change': function(el) {
	var user_el = el.closest('.user')
	var user = user_el.model();
	var user_id = user.identity();
	user.attr('name', el.html()).save(
	    function(user) {
		user_el.removeClass(user_id).addClass(user.identity());
	    }
	);
    },

    '.destroy click': function(el) {
	el.closest('.user').model().destroy();
    },

    '.add click': function(el) {
	var user = new Kalkuli.Models.User({name: "", color: "green", balance: 0});
	this.element.find('ul')
	    .append(this.view('user', user))
	    .find('.name').click()
    },

    "{Kalkuli.Models.User} destroyed": function(User, ev, user) {
	user.elements(this.element).remove();
    },

    "{Kalkuli.Models.User} created": function(User, ev, user) {
	// TODO: a ce stade, user a un id mais il n'a pas ete
	// repercute sur l'element du DOM. user.elements() est dc vide
	console.log(ev);
	console.log(user);
	console.log(user.elements(this.element))
 	    // .html(this.view('user', user))
    },

    "{Kalkuli.Models.User} updated": function(User, ev, user) {
	user.elements(this.element).replaceWith(this.view('user', user));
    }
});

$.Controller('EditableText',
{
    defaults: {}
}, {
    click: function() {
	this.original = this.element;
	var input = $('<input />').val(this.original.html())
	this.element.replaceWith(input);
	this.element = input.focus();
	this.bind('blur', 'blur')
    },

    blur: function() {
	if (this.element.val() != this.original.html()) {
	    this.original.html(this.element.val());
	    this.element.replaceWith(this.original);
	    this.original.change();
	} else {
	    this.element.replaceWith(this.original);
	    this.element = this.original;
	    this.bind('click', 'click')
	}
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
