var fs = require('fs');
ebonicsArray = fs.readFileSync('../ebonics.txt').toString().split("\n");
for(i in ebonicsArray) {
    console.log(ebonicsArray[i]);
}