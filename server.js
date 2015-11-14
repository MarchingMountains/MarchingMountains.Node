var	path = require('path'),
	logger = require('koa-logger'),
    serve = require('koa-static'),
	swig  = require('swig'),
	React = require('react'),
	Router = require('react-router'),
	routes = require('./app/routes');
var koa = require('koa');
var app = koa();

app.use(logger());

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

app.use(function* () {
    this.body = yield new Promise(resolve => {
        Router.run(routes, this.req.url, function(Handler) {
        var html = React.renderToString(React.createElement(Handler));
        resolve(swig.renderFile('views/index.html', { html: html }));
    });
  });
}); 

app.listen( 3000, function() {
	console.log('Koa server listening on port ' +  3000); 
});