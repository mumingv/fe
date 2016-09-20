// 创建数组
var colors = ['white', 'black', 'custom'];

// 修改数组中的值
colors[2] = 'beige';

// 修改元素的内容
var el = document.getElementById('colors');
el.textContent = colors[2];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[2];
*/
