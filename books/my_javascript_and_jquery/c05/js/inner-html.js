// 获取或更新文本和标签：innerHTML

var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '<a href=\"http://example.org\"' + itemContent + '</a>';
