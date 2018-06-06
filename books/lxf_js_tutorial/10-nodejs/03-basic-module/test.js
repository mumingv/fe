// test.js

// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

// 判断是浏览器还是node
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}

process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
