var fs = require('fs');
var data = "hello";

var ws = fs.createWriteStream('text.txt');
ws.write(data, "UTF-8");
ws.end();
ws.on("finish", function () {
    console.log(data);
});
ws.on("error", function (err) {
    console.log(err.stack);
});

