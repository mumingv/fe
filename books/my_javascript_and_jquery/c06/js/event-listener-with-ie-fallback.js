// 事件监听器(函数有参数) -- 兼容IE8及其更早的版本

var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    // 注意：这里不能使用this, 因为addEventListener直接绑定的是匿名函数，
    // 而不是直接绑定的checkUsername函数，所以checkUsername函数不知道是
    // 哪个元素绑定了该函数; 如果使用this的话，这里的this会指代顶层全局
    // 对象window;
    if (elUsername.value.length < minLength) {
        elMsg.innerHTML = 'Username must be ' + minLength + '  characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}

// 基于上个版本，增加对IE8及其更早版本的支持
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function() {
        checkUsername(5);
    }, false);
} else {
    // IE8及其更早版本：不支持addEventListener, 只支持attachEvent;
    // 事件名称需要加上'on';
    elUsername.attachEvent('onblur', function() {
        checkUsername(5);
    });
}
