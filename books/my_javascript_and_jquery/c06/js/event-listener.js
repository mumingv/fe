// 事件监听器(函数无参数)

function checkUsername() {
    var elMsg = document.getElementById('feedback');
    // 注意：这里使用this, 表示触发调用此函数的事件所对应的元素
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
// 在元素上绑定事件和对应的处理函数
// 注意：
// 1. 事件名称前面不需要加上'on'; 
// 2. 函数名称不能加括号(加括号的话表示立即调用);
// 3. 第三个参数表示事件触发的方向：ture(捕获方式)、false(冒泡方式), 默认为false; IE8及其更早版本不支持不支持捕获方式;
elUsername.addEventListener('blur', checkUsername, false);
