// 创建变量
var greeting = 'Howdy ';
var name = 'Jay';

// 使用字符串操作符
var welcomeMessage = greeting + name + '!';

// 修改HTML元素的内容
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
el.innerHTML = welcomeMessage;
*/
