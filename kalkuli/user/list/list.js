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
	$("td", this.element).css('padding: 0')
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

    '{add} click': function(el) {
	var user = new Kalkuli.Models.User({name: "", color: "green", balance: 0});
	console.log(this.element);
	console.log(this.view('user', user))
	this.element
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
