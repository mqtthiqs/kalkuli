//steal/js kalkuli/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/clean',function(){
	steal.clean('kalkuli/kalkuli.html',{indent_size: 1, indent_char: '\t'});
});
