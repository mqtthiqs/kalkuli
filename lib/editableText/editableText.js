steal( 'jquery/controller',
       function($){


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

})