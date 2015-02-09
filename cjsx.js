var cjsx = require('coffee-react-transform');
var Coffee = require('./coffee-script');

exports.translate = function(load) {
	var output = cjsx(load.source);
	load.source = output;
	  var output = Coffee.compile(load.source, {
    sourceMap: true,
    bare: true
  });
  load.source = output.js;
  load.metadata.sourceMap = output.v3SourceMap;
};
