// 事件监听器(函数有参数)

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

// 在元素上绑定事件和对应的处理函数
// 注意：
// 1. 事件名称前面不需要加上'on'; 
// 2. 使用匿名函数，只有在事件触发时才会被调用;
// 3. 第三个参数表示事件触发的方向：ture(捕获方式)、false(冒泡方式), 默认为false; IE8及其更早版本不支持不支持捕获方式;
elUsername.addEventListener('blur', function() {
    checkUsername(5);
}, false);
