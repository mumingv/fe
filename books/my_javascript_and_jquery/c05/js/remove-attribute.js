// 使用DOM操作删除元素属性

var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')) {
    firstItem.removeAttribute('class');
}
