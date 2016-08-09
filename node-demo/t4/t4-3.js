var fs = require('fs');
var rs = fs.createReadStream("text.txt");
var ws = fs.createWriteStream("textCopy.txt");
rs.pipe(ws);//可读流中的内容复制到可写流中