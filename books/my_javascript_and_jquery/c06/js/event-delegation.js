// 事件委托

// 获得事件的对象元素
function getTarget(e) {
    if (!e) {
        e = window.event; 
    }
    return e.target || e.srcElement;
}

// click事件处理函数
function itemDone(e) {
    // 移除该li元素
    var target, elParent, elGrandparent;
    target = getTarget(e);
    
    if (target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;  // li元素节点 
        elList = elListItem.parentNode;  // ul元素节点
        elList.removeChild(elListItem);  // 移除li元素节点
    }
    if (target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode;  // li元素节点
        elList = elListItem.parentNode;  // ul元素节点
        elList.removeChild(elListItem);  // 移除li元素节点
    }
    
    // 防止跳转到链接的目标页面
    if (e.preventDefault) {
        e.preventDefault(); 
    } else {
        e.returnValue = false;  // IE8及其之前版本的处理方式  
    }
}

// 设置事件监听器(仅仅设置在ul元素上，而不是li子元素上)
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);  // false表示事件触发为冒泡方式
} else {
    el.attachEvent('onclick', function(e) {
        itemDone(e);
    });
}
