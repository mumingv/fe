// 问候语
var greeting = 'Howdy ';
var name = 'Jay';
var message = ', please check your order:';
var welcome = greeting + name + message;

// Custom sign字符串及其长度
var sign = 'Beijing House';
var tiles = sign.length;

// 其他变量
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// 修改HTML页面元素的内容
var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML instead of textContent, but note the security issues on p228-231

In the first print run, line 33-34 repeated elSubTotal (rather than elShipping).
This was fixed in later print runs and in this code sample.
*/
