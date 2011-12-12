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
	    var e = $('<span></span>')
		.css('background-color', '#'+this.colors[c])
		.css('float', 'left')
		.css('height', '1em')
		.css('width', '1em')
		.css('cursor', 'pointer')
	    this.element.append(e);
	}
    },

    "span click": function(el) {
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
	    .css('width', '1.15em')
	    .css('height', '1em')
	    .css('cursor', 'pointer')
	    .css('border','none')
	this.change()
    },

    change: function() {
	var c = this.element.val()
	var d = darkerColor(c, 0.1)
	this.element
	    .css('background-color', c)
	    .css('color', c)
	    .css('border', "1px solid "+d)
    },

    click: function() {
	var el = this.element
	var swatch = $('<div></div>')
	    .addClass('shadow')
	    .css('position', 'absolute')
	    .css('width', '6em')
	    .css('height', '6em')
	    .css('z-index', '1000')
	    .color_swatch({change: function(c) {el.val(c); el.change()}});
	this.element.parent().append(swatch);
	return false;
    },
});


var pad = function(num, totalChars) {
    var pad = '0';
    num = num + '';
    while (num.length < totalChars) {
        num = pad + num;
    }
    return num;
};

// Ratio is between 0 and 1
var changeColor = function(color, ratio, darker) {
    // Trim trailing/leading whitespace
    color = color.replace(/^\s*|\s*$/, '');

    // Expand three-digit hex
    color = color.replace(
        /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        '#$1$1$2$2$3$3'
    );

    // Calculate ratio
    var difference = Math.round(ratio * 256) * (darker ? -1 : 1),
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$'
        , 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,

        // Convert hex to decimal
        decimal = !!rgb? [rgb[1], rgb[2], rgb[3]] : color.replace(
            /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
            function() {
                return parseInt(arguments[1], 16) + ',' +
                    parseInt(arguments[2], 16) + ',' +
                    parseInt(arguments[3], 16);
            }
        ).split(/,/),
        returnValue;

    // Return RGB(A)
    return !!rgb ?
        'rgb' + (alpha !== null ? 'a' : '') + '(' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ) +
            (alpha !== null ? ', ' + alpha : '') +
            ')' :
        // Return hex
        [
            '#',
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ).toString(16), 2)
        ].join('');
};
var lighterColor = function(color, ratio) {
    return changeColor(color, ratio, false);
};
var darkerColor = function(color, ratio) {
    return changeColor(color, ratio, true);
};

});
