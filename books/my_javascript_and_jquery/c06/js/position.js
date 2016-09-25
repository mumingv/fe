// 确定鼠标位置

// 存放基于屏幕左上角的定位
var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
// 存放基于页面左上角的定位
var px = document.getElementById('px');
var py = document.getElementById('py');
// 存放基于浏览器左上角的定位
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);
