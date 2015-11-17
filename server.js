'use strict';

var	path = require('path'),
	logger = require('koa-logger'),
    serve = require('koa-static'),
	swig  = require('swig'),
	react = require('react'),
	router = require('react-router'),
	routes = require('./app/routes');
var koa = require('koa');
var app = module.exports = koa();

var port = process.env.PORT || 3000;

app.use(function* (next){
    var start = Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Resonse-Time', ms + 'ms');
});

app.use(function* (next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('TIME: %s %s - %s', this.method, this.url, ms);
})


app.use(logger());

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

app.use(function* () {
    this.body = yield new Promise(resolve => {
        router.run(routes, this.req.url, function(handler) {
        var html = react.renderToString(react.createElement(handler));
        resolve(swig.renderFile('views/index.html', { html: html }));
    });
  });
}); 

app.on('error', function(err, ctx){
    logger.error('server error', err, ctx);
})

// Compress
//app.use(compress());

app.listen(port);
