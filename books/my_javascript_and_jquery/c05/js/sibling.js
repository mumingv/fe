// DOM遍历: 兄弟节点
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;  // 前一个兄弟节点
var nextItem = startItem.nextSibling;  // 后一个兄弟节点

prevItem.className = 'complete';
nextItem.className = 'cool';
