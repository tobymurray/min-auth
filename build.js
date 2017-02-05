var fse = require('fs-extra');
var p = require("path");

const PUBLIC_FOLDER = p.join("min-auth-server", "public");
const DIST_FOLDER = p.join("min-auth-client", "dist");

// Delete anything that's hanging around in the public folder, as right now we have nothing we want to keep around
fse.removeSync(PUBLIC_FOLDER)

// Copy the build artifacts from Angular to Express
fse.copySync(DIST_FOLDER, PUBLIC_FOLDER)
