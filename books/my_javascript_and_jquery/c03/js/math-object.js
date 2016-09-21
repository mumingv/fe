// Math对象的应用

// 生成一个[1-10]范围内的随机数
var randomNum = Math.floor(Math.random() * 10) + 1;

var el = document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';
