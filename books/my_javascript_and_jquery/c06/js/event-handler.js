// 传统的DOM事件处理程序

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
// 注意：1. 事件名称前面要加上'on'; 2. 函数名称不能加括号(加括号的话表示立即调用)
elUsername.onblur = checkUsername;
