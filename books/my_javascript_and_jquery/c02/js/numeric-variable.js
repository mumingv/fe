// 变量定义
var price;
var quantity;
var total;

// 变量赋值
price = 5;
quantity = 14;

// 数值计算
total = price * quantity;

// 根据id获取元素对象
var el = document.getElementById('cost');
el.textContent = '$' + total;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/
