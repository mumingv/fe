// 使用DOM操作添加元素

// 构造待添加的元素

// 1. 创建元素节点
var newEl = document.createElement('li');
// 2. [可选]创建文本节点, 参数为文本节点内容
var newText = document.createTextNode('quinoa');
// 3. [可选]将文本节点作为元素节点的子节点
newEl.appendChild(newText);

// 将构造好的元素节点添加到DOM树中

// 1. 找到待插入元素的父节点
var position = document.getElementsByTagName('ul')[0];
// 2. 将新创建的元素节点作为父节点的子节点
position.appendChild(newEl);
