// 创建数组
var colors = new Array('white', 'black', 'custom');

// 访问数组
var el = document.getElementById('colors');
el.textContent = colors[0];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[0];

There was a typo in the first print run in the last line of this example, it has been corrected in this file.
*/
