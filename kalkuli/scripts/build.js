//steal/js kalkuli/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('kalkuli/scripts/build.html',{to: 'kalkuli'});
});
