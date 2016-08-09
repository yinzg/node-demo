var http = require("http");
var reqOption = {
    host: 'localhost',
    port: '9000',
    path: '/t5/t5.html'//以/开头
};

var server = function (res) {
    var content = "";
    res.on("data", function (data) {
        content += data;
    });
    res.on("end", function () {
        console.log(content.toString());
    });
};

var req = http.request(reqOption, server);
req.end();


