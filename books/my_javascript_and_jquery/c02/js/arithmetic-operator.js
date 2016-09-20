// 创建变量
var subtotal = (13 + 1) * 5;  // subtotal is 70
var shipping = 0.5 * (13 + 1);  // shipping is 7
var total = subtotal + shipping;  // total is 77

// 修改页面元素内容
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12, 15, and 18 but note the security issues on p228-231
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/
