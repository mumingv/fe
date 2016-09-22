// 循坏变量NodeList
var hotItems = document.querySelectorAll('li.hot');

if (hotItems.length > 0) {
    for (var i = 0; i < hotItems.length; i++) {
        hotItems[i].className = 'cool';  // 类名就是类属性的值
    }
}
