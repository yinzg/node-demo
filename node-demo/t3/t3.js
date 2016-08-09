var event = require('events');
var em = new event.EventEmitter;

var listener1 = function () {
    console.log("listener1 exec...");
};
var listener2 = function () {
    console.log("listener2 exec...");
};
var listener3 = function () {
    console.log("listener3 exec...");
};

/*绑定监听器*/
em.once("connect", listener1);//执行一次后自动移除
em.addListener("connect", listener2);//添加监听器到监听器数组的尾部
em.on("connect", listener3);//注册监听器

var listCount = require('events').EventEmitter.listenerCount(em, "connect");//获取监听器数目
console.log("listener count=" + listCount);

em.emit("connect");//按顺序执行监听器

em.removeListener("connect", listener2);//移除监听器
em.emit("connect");

var lisCount = require('events').EventEmitter.listenerCount(em, "connect");
console.log("listener count=" + lisCount);