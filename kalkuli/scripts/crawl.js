// load('kalkuli/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("kalkuli/kalkuli.html","kalkuli/out")
});
