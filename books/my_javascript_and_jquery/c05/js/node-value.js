// 访问修改文本节点：nodeValue只能用于操作文本节点
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;  // firstChild为文本节点
elText = elText.replace('pine nuts', 'kale');
itemTwo.firstChild.nodeValue = elText;
