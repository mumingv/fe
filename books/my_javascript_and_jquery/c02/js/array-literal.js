// 创建数组
var colors;
colors = ['white', 'black', 'custom'];

// 访问数组元素
var el = document.getElementById('colors');
el.textContent = colors[0];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 7, but note the security issues on p228-231
el.textContent = colors[0];
*/
