//js kalkuli/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('kalkuli/kalkuli.html', {
		markdown : ['kalkuli']
	});
});