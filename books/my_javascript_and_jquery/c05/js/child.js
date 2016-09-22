// DOM遍历: 儿子节点
var startItem = document.getElementsByTagName('ul')[0];  // NodeList中的第一个节点
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.className = 'complete';
lastItem.className = 'cool';
