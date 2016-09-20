// 创建变量
var inStock;
var shipping;
inStock = true;  // true必须使用全部小写的形式
shipping = false;  // false必须使用全部小写的形式

// 根据id获取元素对象
var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;
