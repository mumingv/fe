// 创建变量
var inStock;
var shipping;
inStock = true;
shipping = false;

// 根据id获取元素对象
var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;
