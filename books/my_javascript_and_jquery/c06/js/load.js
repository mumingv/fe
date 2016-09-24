// 用户界面(UI)：load事件

function setup() {
    var textInput;
    textInput = document.getElementById('username');
    // 在文本域上设置焦点
    textInput.focus();
}

// 使用事件监听器(函数没有参数): 当页面加载完成时触发load事件
window.addEventListener('load', setup, false);
