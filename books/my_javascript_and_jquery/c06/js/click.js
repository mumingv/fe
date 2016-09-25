// 鼠标点击事件

// 创建一个div浮层
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

// 放在body元素节点下面
var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);  // document.body直接获取<body>元素的引用

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
