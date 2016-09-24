// focus和blur事件(获得焦点和失去焦点)

function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = ''; 
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

// 给元素对象绑定事件处理函数
var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);  // 函数没有参数
el.addEventListener('blur',  checkUsername, false);  // 函数没有参数 
