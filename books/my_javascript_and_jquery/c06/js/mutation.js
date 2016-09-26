// 变动事件

var elList, addLink, newEl, newText, counter, listItems; // Declare variables

elList = document.getElementById('list');  // ul元素
addLink = document.querySelector('a');  // 第一个a元素，即：button按钮
counter = document.getElementById('counter');  // span元素，记录数量

// 增加li元素
function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

// 刷新li元素数量
function updateCount() {
    // 数量即：NodeList的节点数量(长度)
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

// 按钮上绑定click事件, 用于增加li元素
addLink.addEventListener('click', addItem, false);
// 在ul元素(li元素的父元素)上绑定变动事件，该事件当一个节点被插入到DOM树中时触发
elList.addEventListener('DOMNodeInserted', updateCount, false);
