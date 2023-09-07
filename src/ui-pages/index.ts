// This index dynamically picks up all files in ui-pages
// It should not require modification

const req = require.context('./', true, /.js$/); // Looking for .js files because by the time it makes it to webpack the code has compiles to js

const modules = req.keys().map(req)

module.exports = modules;