// 使用DOM操作删除元素

// 注：从DOM中移除元素会影响到它的兄弟节点中NodeList中的索引

var removeEl = document.getElementsByTagName('li')[3];
var containerEl = document.getElementsByTagName('ul')[0];
containerEl.removeChild(removeEl);
