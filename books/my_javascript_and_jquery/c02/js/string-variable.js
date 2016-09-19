// 创建变量
var username;
var message;

// 变量赋值
username = 'Jay';
message = 'See our upcoming range';

// 根据id获取元素对象
var elName = document.getElementById('name');
elName.textContent = username;

// 根据id获取元素对象
var elNote = document.getElementById('note');
elNote.textContent = message;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
elName.innerHTML = username;
elNote.innerHTML = message;
*/
