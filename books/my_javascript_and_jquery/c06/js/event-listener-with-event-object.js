// 在事件监听器中使用事件对象

function checkLength(e, minLength) {
    var el, elMsg;

    // 事件对象存在为真值，不存在为假值
    if (!e) {
        e = window.event;
    }

    // 获取事件的目标(元素对象): <input type="text" id="username" />
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    // el.value为<input>的value属性值，为字符串形式
    // el.value.length则为字符串的长度
    if (el.value.length < minLength) {
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}

// 给元素<input type="text" id="username" />绑定事件
var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    // 事件对象作为事件处理函数的第一个参数
    elUsername.addEventListener('blur', function(e) {
        checkLength(e, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function(e) {
        checkLength(e, 5);
    });
}
