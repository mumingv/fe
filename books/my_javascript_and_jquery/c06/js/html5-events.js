// HTML5事件

// DOM树形成后，将焦点设置在textarea元素上
function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

// 绑定HTML5事件，在DOM树形成后触发
window.addEventListener('DOMContentLoaded', setup, false);

// 绑定HTML5事件，在页面被卸载之前触发
window.addEventListener('beforeunload', function(event) {
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
});  // 没有第三个参数，默认取值为false，表示事件冒泡
