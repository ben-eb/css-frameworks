var fs = require('fs');
var path = require('path');

function base () {
  var slice = Array.prototype.slice;
  return path.join.apply(null, [__dirname, 'frameworks'].concat(slice.call(arguments)));
}

module.exports = fs.readdirSync(base()).reduce(function (xports, framework) {
  xports[framework.split('.')[0]] = fs.readFileSync(base(framework), 'utf-8');
  return xports;
}, {});
