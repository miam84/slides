var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname))
    .listen(1234, function () {
        console.log('Server running ! App reachable at http://localhost:1234');
    }
);