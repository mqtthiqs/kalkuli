steal( 'jquery/controller',
       'jquery/model',
       function($){

$.Controller('ColorSwatch', {},
{
    colors: [ '000000', '993300','333300', '000080', '333399', '333333',
	      '800000', 'FF6600', '808000', '008000', '008080', '0000FF',
	      '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966',
	      '33CCCC', '3366FF', '800080', '999999', 'FF00FF', 'FFCC00',
	      'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0',
	      'FF99CC', 'FFCC99', 'FFFF99' , 'CCFFFF', '99CCFF', 'FFFFFF'],

    init: function() {
	for(c in this.colors) {
	    var e = $('<a>&nbsp;</a>')
		.css('background-color', '#'+this.colors[c])
		.css('display', 'inline')
		.css('height', '1ex')
		.css('width', '1ex')
		.css('cursor', 'pointer')
	    this.element.append(e);
	}
    },

    "a click": function(el) {
	this.options.change(el.css('background-color'))
	this.element.remove();
    },

    click: function(el, ev) {
	ev.stopPropagation();
    },

    "{window} click": function() {
    	this.element.remove();
    },

});

$.Controller('ColorPicker', {},
{
    init: function() {
	this.element
	    .css('width', '1ex')
	    .css('height', '1ex')
	    .css('cursor', 'pointer')
	    .css('background-color',this.element.val())
	    .css('color',this.element.val())
	    .css('border','1px solid black')
    },

    click: function() {
	var el = this.element
	var swatch = $('<div></div>')
	    .css('position', 'fixed')
	    .css('border', '1px solid black')
	    .color_swatch({change: function(c) {el.val(c); el.change()}});
	this.element.parent().append(swatch);
	return false;
    },
});

});
