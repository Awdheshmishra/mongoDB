const fs = require('fs');
fs.writeFileSync("test.txt","node js is open source and cross plateform");

const r = fs.readFileSync("tesr.txt","utf8");

console.log(r);