steal( 'jquery/controller',
       'jquery/lang/json',
       'jquery/model',
       function($){

$.Controller('DumpJSON', {},
{
    init: function() {this.update()},

    update: function() {
	el = this.element;
	this.options.model.findAll({}, function(l){
	    el.html($.toJSON(l));
	})
    },

    '{model} created': function(){this.update()},
    '{model} updated': function(){this.update()},
    '{model} destroyed': function(){this.update()},
});

});
