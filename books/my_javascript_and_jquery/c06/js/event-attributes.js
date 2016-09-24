// HTML事件处理程序

function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    // elUsername是一个HTML DOM Text对象, 参考：
    // http://www.w3school.com.cn/jsref/dom_obj_text.asp
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}
