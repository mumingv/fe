// 事件流

// 元素绑定的事件处理函数
function showElement() {
    alert(this.innerHTML);
}

// el未使用var声明，表明其为一个全局变量

// 事件冒泡
el = document.getElementById('list');
el.addEventListener('click', showElement, false);

el = document.getElementById('item');
el.addEventListener('click', showElement, false);

el = document.getElementById('link');
el.addEventListener('click', showElement, false);

// 事件捕获
el = document.getElementById('list2');
el.addEventListener('click', showElement, true);

el = document.getElementById('item2');
el.addEventListener('click', showElement, true);

el = document.getElementById('link2');
el.addEventListener('click', showElement, true);
