// 综合示例

var noteInput, noteName, textEntered, target;    // Declare variables

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

// 将用户的输入显示在上面
function writeLabel(e) {
    if (!e) {
        e = window.events;
    }
    // 获取事件对应的元素对象
    target = e.target || e.srcElement;
    textEntered = target.value;
    noteName.textContent = textEntered;
}

// 将所有click事件的默认行为都去掉
function recorderControls(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch (target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
        //...
    }
} 

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}

// 绑定事件
if (document.addEventListener) {
    // 给所有元素绑定click事件
    document.addEventListener('click', function(e) {
        recorderControls(e);
    }, false);
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function(e) {
        recorderControls(e);
    });
    noteInput.attachEvent('onkeyup', writeLabel);
}
