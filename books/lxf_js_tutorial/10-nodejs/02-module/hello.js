'use strict';

var s = 'Hello';
function greet(name) {
    console.log(s + ', ' + name  + '!');
}

// 将greet函数作为模块的输出提供给其他模块调用
module.exports = greet;
