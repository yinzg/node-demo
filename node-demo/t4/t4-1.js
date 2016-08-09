var fs = require('fs');
var data = "";

var rs = fs.createReadStream('text.txt');//创建可读流
rs.setEncoding("UTF-8");

/*处理事件：data/end/error*/
rs.on("data", function (d) {
    data += d;
});
rs.on("end", function () {
    console.log(data);
});
rs.on("error", function (err) {
    console.log(err.stack);
});

