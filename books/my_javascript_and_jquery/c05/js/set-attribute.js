// 使用DOM操作设置元素属性值

// 设置class属性值，有专门的方法
var firstItem = document.getElementById('one');
firstItem.className = 'complete';

// 使用DOM操作一般方法设置元素属性值
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');
