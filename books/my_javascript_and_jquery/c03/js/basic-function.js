// 显示到页面的信息
var msg = 'Sign up to receive our newsletter for 10% off!';

// 创建函数，更新元素对象的内容
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

// 调用函数
updateMessage();
