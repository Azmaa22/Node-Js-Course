// os core module
const os = require('os');
console.log(`host name ${os.hostname}`);

console.log(`arch ${os.arch}`);
console.log(`platform ${os.platform}`);
console.log(`os type ${os.type}`);

console.log(`free memory ${os.freemem}`);
console.log(`total memory ${os.totalmem}`);