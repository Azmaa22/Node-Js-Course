const path = require('path');

var currentFile = path.basename(__filename);
console.log(`current File ${currentFile}`);
var newFile = path.join(__dirname, 'abc.js');
console.log(`new File ${newFile}`);
var currentDir = path.basename(__dirname);
console.log(`current Directory ${currentDir}`);