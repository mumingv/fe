// 创建变量
var title;
var message;

// 变量赋值
title = "Jay's Special Offers";
message = '<a href="sale.html">25% off!</a>';  // 这里字符串中的双引号加不加转义字符都是可以的

// 根据id获取元素对象
var elTitle = document.getElementById('title');
elTitle.textContent = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;  // 这里必须要使用innerHTML，因为message里是HTML，而不仅仅是文本

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elTitle.innerHTML = title;

innerHTML is used on line 17 because it is adding markup (not just text)
*/
